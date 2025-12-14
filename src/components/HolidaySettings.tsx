import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarDays, Plus, Trash2, Settings } from 'lucide-react';
import { Holiday } from '@/types';
import { getHolidays, saveHoliday, deleteHoliday } from '@/utils/storage';
import { format, parseISO } from 'date-fns';

export const HolidaySettings = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [holidayName, setHolidayName] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    loadHolidays();
  }, []);

  const loadHolidays = () => {
    const storedHolidays = getHolidays();
    // Sort by date
    const sorted = [...storedHolidays].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setHolidays(sorted);
  };

  const handleAddHoliday = () => {
    if (!selectedDate || !holidayName.trim()) return;

    const dateStr = format(selectedDate, 'yyyy-MM-dd');

    // Check if this date already exists
    const exists = holidays.some(h => h.date === dateStr);
    if (exists) {
      alert('A holiday is already set for this date');
      return;
    }

    saveHoliday({
      date: dateStr,
      name: holidayName.trim()
    });

    setSelectedDate(undefined);
    setHolidayName('');
    setIsCalendarOpen(false);
    loadHolidays();
  };

  const handleDeleteHoliday = (id: string) => {
    deleteHoliday(id);
    loadHolidays();
  };

  const formatDisplayDate = (dateStr: string): string => {
    try {
      return format(parseISO(dateStr), 'EEEE, MMMM d, yyyy');
    } catch {
      return dateStr;
    }
  };

  const getDayOfWeek = (dateStr: string): string => {
    try {
      return format(parseISO(dateStr), 'EEE');
    } catch {
      return '';
    }
  };

  // Get dates that are already holidays for the calendar
  const holidayDates = holidays.map(h => parseISO(h.date));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle>Holiday Settings</CardTitle>
            <CardDescription>
              Mark weekdays as holidays to exclude them from working day calculations.
              Holidays are not counted when determining how long tasks have been stalled.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Add Holiday Form */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex-1">
            <Label htmlFor="holiday-name" className="mb-2 block">Holiday Name</Label>
            <Input
              id="holiday-name"
              placeholder="e.g., Christmas Day, Company Holiday"
              value={holidayName}
              onChange={(e) => setHolidayName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <Label className="mb-2 block">Date</Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : 'Select a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setIsCalendarOpen(false);
                  }}
                  modifiers={{
                    holiday: holidayDates
                  }}
                  modifiersStyles={{
                    holiday: {
                      backgroundColor: 'hsl(var(--destructive) / 0.2)',
                      color: 'hsl(var(--destructive))',
                      fontWeight: 'bold'
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleAddHoliday}
              disabled={!selectedDate || !holidayName.trim()}
              className="w-full sm:w-auto"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Holiday
            </Button>
          </div>
        </div>

        {/* Holidays List */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Configured Holidays ({holidays.length})
          </h3>

          {holidays.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <CalendarDays className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <p>No holidays configured</p>
              <p className="text-sm">Add holidays above to exclude them from working day calculations</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Holiday Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Day</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {holidays.map((holiday) => (
                  <TableRow key={holiday.id}>
                    <TableCell className="font-medium">{holiday.name}</TableCell>
                    <TableCell>{formatDisplayDate(holiday.date)}</TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">
                        {getDayOfWeek(holiday.date)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteHoliday(holiday.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

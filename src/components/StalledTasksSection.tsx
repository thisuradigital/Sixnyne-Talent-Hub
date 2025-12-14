import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock, User, Users, FolderOpen } from 'lucide-react';
import { StalledTask, TaskStatus } from '@/types';
import { getStalledTasksByThreshold } from '@/utils/storage';
import { formatWorkingDays } from '@/utils/dateUtils';

const getStatusColor = (status: TaskStatus): string => {
  switch (status) {
    case 'To Do':
      return 'bg-slate-500';
    case 'In Progress':
      return 'bg-blue-500';
    case 'In Review':
      return 'bg-purple-500';
    case 'Blocked':
      return 'bg-red-500';
    case 'Done':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

const getSeverityColor = (days: number): string => {
  if (days >= 3) return 'text-red-500';
  if (days >= 2) return 'text-orange-500';
  return 'text-yellow-500';
};

const StalledTaskTable = ({ tasks }: { tasks: StalledTask[] }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Clock className="mx-auto h-12 w-12 mb-4 opacity-50" />
        <p>No stalled tasks in this category</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Days Stalled</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="font-medium max-w-[250px]">
              <div className="truncate" title={task.title}>
                {task.title}
              </div>
              <div className="text-xs text-muted-foreground truncate" title={task.description}>
                {task.description}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>{task.assignee}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge className={`${getStatusColor(task.status)} text-white`}>
                {task.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{task.team}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
                <span>{task.category}</span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <span className={`font-semibold ${getSeverityColor(task.workingDaysStalled)}`}>
                {formatWorkingDays(task.workingDaysStalled)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

interface StalledTasksSummaryProps {
  oneDayCount: number;
  twoDaysCount: number;
  threeDaysCount: number;
}

const StalledTasksSummary = ({ oneDayCount, twoDaysCount, threeDaysCount }: StalledTasksSummaryProps) => {
  const totalCount = oneDayCount + twoDaysCount + threeDaysCount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted">
              <AlertTriangle className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Stalled</p>
              <p className="text-2xl font-bold">{totalCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-500/10">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">1 Day</p>
              <p className="text-2xl font-bold text-yellow-500">{oneDayCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <Clock className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">2 Days</p>
              <p className="text-2xl font-bold text-orange-500">{twoDaysCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10">
              <Clock className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">3+ Days</p>
              <p className="text-2xl font-bold text-red-500">{threeDaysCount}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const StalledTasksSection = () => {
  const [stalledTasks, setStalledTasks] = useState<{
    oneDayPlus: StalledTask[];
    twoDaysPlus: StalledTask[];
    threeDaysPlus: StalledTask[];
  }>({ oneDayPlus: [], twoDaysPlus: [], threeDaysPlus: [] });

  useEffect(() => {
    const tasks = getStalledTasksByThreshold();
    setStalledTasks(tasks);
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <CardTitle>Stalled Task Detection</CardTitle>
            <CardDescription>
              Tasks that have not progressed (same status and assignee) for extended periods.
              Only working days (Monday-Friday, excluding holidays) are counted.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <StalledTasksSummary
          oneDayCount={stalledTasks.oneDayPlus.length}
          twoDaysCount={stalledTasks.twoDaysPlus.length}
          threeDaysCount={stalledTasks.threeDaysPlus.length}
        />

        <Tabs defaultValue="3days" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="1day" className="flex items-center gap-2">
              <span className="hidden sm:inline">1 Day</span>
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-600">
                {stalledTasks.oneDayPlus.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="2days" className="flex items-center gap-2">
              <span className="hidden sm:inline">2 Days</span>
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-600">
                {stalledTasks.twoDaysPlus.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="3days" className="flex items-center gap-2">
              <span className="hidden sm:inline">3+ Days</span>
              <Badge variant="secondary" className="bg-red-500/20 text-red-600">
                {stalledTasks.threeDaysPlus.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="1day">
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Tasks stalled for exactly 1 working day. These may need attention soon.
              </p>
              <StalledTaskTable tasks={stalledTasks.oneDayPlus} />
            </div>
          </TabsContent>

          <TabsContent value="2days">
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Tasks stalled for 2 working days. Consider following up with assignees.
              </p>
              <StalledTaskTable tasks={stalledTasks.twoDaysPlus} />
            </div>
          </TabsContent>

          <TabsContent value="3days">
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Tasks stalled for 3 or more working days. These require immediate attention.
              </p>
              <StalledTaskTable tasks={stalledTasks.threeDaysPlus} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

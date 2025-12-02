import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Target, Heart, Users, Award, MapPin, HelpCircle } from "lucide-react";

interface CompanyInfoProps {
  onBack: () => void;
}

export const CompanyInfo = ({ onBack }: CompanyInfoProps) => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional results for our clients."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our relationships."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster a collaborative environment."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace creativity and continuously seek innovative solutions for our clients."
    }
  ];

  const benefits = [
    "Competitive salary and comprehensive benefits package",
    "Flexible work arrangements and remote opportunities",
    "Professional development and training programs",
    "Collaborative and supportive team culture",
    "Career growth and advancement opportunities",
    "Work-life balance initiatives"
  ];

  const faqs = [
    {
      question: "What is the hiring process?",
      answer: "Our hiring process typically includes: application review, initial phone screen, skills assessment, team interview, and final decision. The entire process usually takes 2-3 weeks."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes! We offer fully remote, hybrid, and in-office positions depending on the role and team needs. Many of our positions are location-flexible."
    },
    {
      question: "What growth opportunities are available?",
      answer: "We're committed to employee development with clear career paths, mentorship programs, training budgets, and opportunities to work on diverse projects that expand your skills."
    },
    {
      question: "What is the company culture like?",
      answer: "Our culture emphasizes collaboration, continuous learning, and work-life balance. We value diverse perspectives and create an inclusive environment where everyone can thrive."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Get to Know Us</h1>
          <p className="text-muted-foreground mt-2">Discover our culture, values, and what makes us unique</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-12">
        {/* About Us */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Our Company</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are a leading agency dedicated to delivering exceptional client service and 
                innovative solutions across multiple industries. With a team of talented professionals 
                in client service, design, and creative roles, we help our clients achieve their goals 
                and exceed expectations.
              </p>
              <p>
                Founded on principles of excellence, integrity, and collaboration, we've built a 
                reputation for transforming client challenges into success stories. Our approach 
                combines strategic thinking, creative innovation, and meticulous execution.
              </p>
              <p>
                As we continue to grow, we're always looking for passionate individuals who share 
                our values and want to make a meaningful impact. Join us in shaping the future of 
                client service excellence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Our Values */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* Culture & Benefits */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Culture & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe in creating an environment where our team members can do their best work 
                while maintaining a healthy work-life balance. Our comprehensive benefits package and 
                supportive culture reflect our commitment to employee wellbeing.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/10 p-1 mt-0.5">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Office Locations */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Office Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Headquarters - New York</h4>
                <p className="text-sm text-muted-foreground">123 Main Street, New York, NY 10001</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">West Coast Office - Los Angeles</h4>
                <p className="text-sm text-muted-foreground">456 Pacific Avenue, Los Angeles, CA 90001</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Midwest Office - Chicago</h4>
                <p className="text-sm text-muted-foreground">789 Lake Shore Drive, Chicago, IL 60601</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Plus remote team members across the United States and internationally
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              Explore our open positions and take the first step toward an exciting career.
            </p>
            <Button onClick={onBack} size="lg">
              Explore Opportunities
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

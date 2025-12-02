import { SkillAssessment } from "@/types";

export const SKILL_ASSESSMENTS: SkillAssessment[] = [
  {
    id: "communication-skills",
    title: "Communication Skills Assessment",
    description: "Evaluate your professional communication abilities",
    icon: "MessageSquare",
    type: "assessment",
    timeLimit: 20,
    passingScore: 80,
    quiz: [
      {
        id: "comm-1",
        question: "A client sends an urgent email at 5:30 PM requesting a meeting tomorrow morning. What is the most appropriate response?",
        options: [
          "Respond immediately confirming availability and suggesting specific times",
          "Wait until tomorrow morning to respond",
          "Send a brief 'ok' to acknowledge receipt",
          "Ignore it since it's after hours"
        ],
        correctIndex: 0,
        explanation: "Prompt, professional responses with specific details demonstrate reliability and respect for the client's time."
      },
      {
        id: "comm-2",
        question: "When addressing a client in email, what greeting is most appropriate?",
        options: [
          "Hey!",
          "Good morning/afternoon [Client Name],",
          "Yo [Name],",
          "Hi,"
        ],
        correctIndex: 1,
        explanation: "Time-appropriate greetings with proper names maintain professionalism while being personable."
      },
      {
        id: "comm-3",
        question: "If you don't know the answer to a client's question, you should:",
        options: [
          "Make an educated guess",
          "Say 'I don't know' and move on",
          "Be transparent, commit to researching, and provide a timeline for follow-up",
          "Ask a colleague in front of the client"
        ],
        correctIndex: 2,
        explanation: "Transparency combined with commitment to follow-up builds trust and demonstrates professionalism."
      },
      {
        id: "comm-4",
        question: "When discussing project work with clients, which language approach is best?",
        options: [
          "Use 'I' to highlight your contributions",
          "Use 'we' to emphasize team effort",
          "Alternate between 'I' and 'we'",
          "Use passive voice to avoid responsibility"
        ],
        correctIndex: 1,
        explanation: "Using 'we' reinforces teamwork and collective responsibility, which builds client confidence."
      },
      {
        id: "comm-5",
        question: "A client verbally requests changes to project scope. What should you do?",
        options: [
          "Proceed with the changes immediately",
          "Document the request in writing and outline impacts before proceeding",
          "Ask your manager first",
          "Decline the changes"
        ],
        correctIndex: 1,
        explanation: "All scope changes must be documented with clear impacts on timeline and budget before proceeding."
      }
    ]
  },
  {
    id: "problem-solving",
    title: "Problem Solving Assessment",
    description: "Test your analytical and critical thinking skills",
    icon: "Brain",
    type: "assessment",
    timeLimit: 25,
    passingScore: 75,
    quiz: [
      {
        id: "prob-1",
        question: "You're approaching 75% of budget with 60% of deliverables complete. What should you do?",
        options: [
          "Continue as planned and hope it works out",
          "Immediately discuss optimization strategies with the team",
          "Rush through remaining deliverables to stay on budget",
          "Wait until budget runs out to inform stakeholders"
        ],
        correctIndex: 1,
        explanation: "Proactive communication when issues are identified prevents larger problems and demonstrates accountability."
      },
      {
        id: "prob-2",
        question: "A client requests additional deliverables mid-project. What is the correct approach?",
        options: [
          "Add them to the scope to keep client happy",
          "Refuse the changes completely",
          "Outline impact on scope, budget, and timeline, then seek approval",
          "Complete them after the original deadline"
        ],
        correctIndex: 2,
        explanation: "The project management triangle requires balancing scope, budget, and time with documented approval."
      },
      {
        id: "prob-3",
        question: "You discover a competitor's negative social media post about your client. What do you do?",
        options: [
          "Ignore it - not our problem",
          "Respond directly to the competitor",
          "Alert the client immediately with screenshots and context",
          "Delete the post"
        ],
        correctIndex: 2,
        explanation: "Proactive monitoring and immediate client alerts demonstrate value and protect the client relationship."
      },
      {
        id: "prob-4",
        question: "Technical difficulties arise 5 minutes before a client presentation. What's your best action?",
        options: [
          "Panic and reschedule",
          "Use backup materials prepared in advance",
          "Apologize and spend 20 minutes fixing the issue",
          "Proceed without visuals"
        ],
        correctIndex: 1,
        explanation: "Preparation with backup plans demonstrates professionalism and respect for client time."
      },
      {
        id: "prob-5",
        question: "When should you escalate an issue to management?",
        options: [
          "Only when explicitly asked",
          "For any client complaint",
          "When issues exceed your authority or require urgent high-level attention",
          "Never - always handle it yourself"
        ],
        correctIndex: 2,
        explanation: "Knowing when and how to escalate appropriately ensures issues are resolved at the right level."
      }
    ]
  },
  {
    id: "time-management",
    title: "Time Management Assessment",
    description: "Assess your ability to manage deadlines and priorities",
    icon: "Clock",
    type: "assessment",
    timeLimit: 15,
    passingScore: 80,
    quiz: [
      {
        id: "time-1",
        question: "Client deadline is May 15th. When should your internal deadline be?",
        options: [
          "May 15th",
          "May 14th",
          "May 8th (with buffer for revisions)",
          "May 10th"
        ],
        correctIndex: 2,
        explanation: "Internal deadlines should include substantial buffer time for review cycles and unexpected issues."
      },
      {
        id: "time-2",
        question: "What is the purpose of working backward from deadlines?",
        options: [
          "To make schedules look complex",
          "To create realistic milestones with appropriate buffer time",
          "To delay starting work",
          "To impress clients"
        ],
        correctIndex: 1,
        explanation: "Backward planning ensures adequate time for each phase and builds in buffer for quality and revisions."
      },
      {
        id: "time-3",
        question: "You have multiple urgent tasks. How do you prioritize?",
        options: [
          "Work on the easiest tasks first",
          "Start with whatever is at the top of your inbox",
          "Assess impact and deadlines, communicate with stakeholders, then prioritize",
          "Complete random tasks throughout the day"
        ],
        correctIndex: 2,
        explanation: "Strategic prioritization based on impact and deadlines, with clear communication, ensures optimal outcomes."
      },
      {
        id: "time-4",
        question: "When should calendar invites be sent for meetings?",
        options: [
          "The morning of the meeting",
          "Immediately when the meeting is scheduled",
          "The day before",
          "Whenever you remember"
        ],
        correctIndex: 1,
        explanation: "Immediate calendar invites ensure everyone can plan accordingly and prevent scheduling conflicts."
      },
      {
        id: "time-5",
        question: "How early should you join client video calls?",
        options: [
          "Exactly on time",
          "5 minutes early",
          "10-15 minutes early to test equipment",
          "A few minutes late is acceptable"
        ],
        correctIndex: 2,
        explanation: "Joining 10-15 minutes early allows time to resolve any technical issues and demonstrates preparedness."
      }
    ]
  }
];

export const SKILL_LESSONS: SkillAssessment[] = [
  {
    id: "client-service-intro",
    title: "Introduction to Client Service",
    description: "Learn the fundamentals of exceptional client service",
    icon: "BookOpen",
    type: "lesson",
    quiz: []
  },
  {
    id: "professional-communication",
    title: "Professional Communication Basics",
    description: "Master the essentials of business communication",
    icon: "Mail",
    type: "lesson",
    quiz: []
  },
  {
    id: "meeting-etiquette",
    title: "Meeting Etiquette Essentials",
    description: "Navigate meetings with confidence and professionalism",
    icon: "Users",
    type: "lesson",
    quiz: []
  }
];

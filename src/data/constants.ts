import { Module } from "@/types";

export const MODULES: Module[] = [
  {
    id: "foundations",
    title: "Foundations & Communication",
    description: "Master core principles and professional communication standards",
    icon: "MessageSquare",
    sections: [
      {
        title: "Core Principle: Purposeful Action",
        content: [
          "Have a clear purpose for every client interaction, meeting, and deliverable. Define specific objectives and desired outcomes before any client engagement.",
          "Ensure every team member understands what success looks like for each activity. Evaluate actions based on how they contribute to client goals and relationship building.",
          "Regularly reassess and refine your purpose as projects evolve. Never conduct meetings, calls, or work without a clear understanding of what you aim to achieve."
        ],
        dos: [
          "Define purpose: 'Our purpose for today's meeting is to present campaign results, address concerns, and secure approval for phase two'",
          "Ensure each team member is prepared to support the objectives",
          "Evaluate actions based on contribution to client goals",
          "Regularly reassess and refine your purpose as projects evolve"
        ],
        donts: [
          "Conduct meetings, calls, or work without a clear understanding of what you aim to achieve",
          "Proceed without defining specific objectives",
          "Skip the step of aligning team members on success criteria"
        ]
      },
      {
        title: "Greeting and Communication Style",
        content: [
          "Always begin interactions with appropriate greetings: Good morning, Good afternoon, or Good evening. Maintain positive communication at all times.",
          "Speak confidently without being egotistical. Demonstrate expertise when appropriate, but be transparent when you don't know something.",
          "When you're not certain about something, commit to following up rather than guessing or leaving clients uncertain."
        ],
        dos: [
          "Start with 'Good morning Mr. Smith, I hope you're well. We've prepared the report you requested'",
          "Maintain positive, confident communication",
          "Say 'I'm not certain about that metric, but I'll research it and get back to you by tomorrow afternoon' when unsure",
          "Demonstrate expertise appropriately"
        ],
        donts: [
          "Use casual greetings like 'Hey, here's the report'",
          "Simply say 'I don't know' without commitment to follow up",
          "Make up answers without proper knowledge",
          "Be egotistical or overconfident"
        ]
      },
      {
        title: "Language Consistency",
        content: [
          "Use one primary language throughout client communications when possible. Adapt language choice based on client preference.",
          "Mirror the client's preferred language in all documentation. Maintain consistency in language throughout a project unless client requests otherwise."
        ],
        dos: [
          "Maintain consistency in one language throughout a project",
          "Adapt language based on client preference",
          "Mirror client's preferred language in documentation"
        ],
        donts: [
          "Mix languages unnecessarily",
          "Switch languages without reason",
          "Use different languages in related documents"
        ]
      },
      {
        title: "Teamwork Language: We vs I",
        content: [
          "Use 'we' instead of 'I' in client communications to emphasize collective effort over individual contributions.",
          "This creates a sense of partnership and shared responsibility with clients, making them feel part of the solution rather than just receiving a service.",
          "However, use 'I' when taking personal responsibility for mistakes or providing individual opinions."
        ],
        dos: [
          "Say 'We've analyzed the data and believe this approach will work best for your campaign'",
          "Use 'We can explore this together' to emphasize partnership",
          "Frame solutions collaboratively: 'We have a few options'",
          "Use 'I' when taking personal responsibility for mistakes"
        ],
        donts: [
          "Say 'I came up with this idea that will fix your campaign'",
          "Overuse 'I think' or 'I believe'",
          "Use 'You should' which can sound directive"
        ]
      },
      {
        title: "Professional Communication Standards",
        content: [
          "Respond to clients efficiently and effectively. Avoid single-letter responses or shortened text-speak.",
          "Maintain professional language in all communications. Check grammar and spelling before sending messages.",
          "Utilize tools like Grammarly, ChatGPT, or Claude to polish important communications. Consider using simple prompts like 'polish this message' or 'fix English' when using AI tools."
        ],
        dos: [
          "Write 'Thank you for your feedback. We'll incorporate these changes by Thursday'",
          "Check grammar and spelling before sending",
          "Use Grammarly, ChatGPT, or Claude to polish communications",
          "Respond efficiently and effectively"
        ],
        donts: [
          "Send single-letter responses like 'k' or 'np'",
          "Use shortened text-speak like 'will do it soon'",
          "Send messages with spelling or grammar errors",
          "Skip proofreading important communications"
        ]
      },
      {
        title: "Response Time Management",
        content: [
          "Acknowledge client messages within 2 hours during business hours. Provide clear timeframes for comprehensive responses.",
          "Set realistic deadlines and deliver ahead of schedule when possible. Never leave messages unacknowledged for extended periods."
        ],
        dos: [
          "Acknowledge receipt within 2 hours during business hours",
          "Say 'I've received your request and will have a complete answer for you by tomorrow morning'",
          "Set realistic deadlines",
          "Deliver ahead of schedule when possible"
        ],
        donts: [
          "Leave messages unacknowledged for extended periods",
          "Give vague responses without timeframes",
          "Miss promised response deadlines"
        ]
      },
      {
        title: "Change Request Protocol",
        content: [
          "Document all client change requests in writing. Clearly outline scope, timeline, and budget impacts.",
          "Get formal approval before proceeding with significant changes. Never accept verbal change requests without documenting impact."
        ],
        dos: [
          "Document all change requests in writing",
          "Say 'Based on your requested changes, we'll need to adjust the timeline by one week and the budget by X. Please confirm if you approve'",
          "Clearly outline scope, timeline, and budget impacts",
          "Get formal approval before proceeding"
        ],
        donts: [
          "Accept verbal change requests without documentation",
          "Proceed with changes without outlining impacts",
          "Skip formal approval process",
          "Hide the impact of changes from clients"
        ]
      },
      {
        title: "Client Name Etiquette",
        content: [
          "Always verify and use correct client names in all communications. Use mention features in group settings.",
          "Confirm proper pronunciation for verbal communication. Never use abbreviated or casual versions of names without permission."
        ],
        dos: [
          "Use '@Jennifer Thompson, could you please confirm if this timeline works for your team?'",
          "Verify correct spelling and pronunciation",
          "Use formal names in professional settings",
          "Use mention features in group communications"
        ],
        donts: [
          "Use 'Hey Jen' when they go by Jennifer Thompson professionally",
          "Assume nickname usage is acceptable",
          "Skip verifying name spelling and pronunciation"
        ]
      },
      {
        title: "Cross-Selling and Upselling Etiquette",
        content: [
          "Recommend additional services only when genuinely beneficial. Focus on value-added opportunities.",
          "Present options without pressure. Never push services that don't align with client needs or budget."
        ],
        dos: [
          "Say 'Based on your goals, our social media management service could complement your current marketing strategy. Would you like to learn more?'",
          "Recommend when genuinely beneficial",
          "Focus on value-added opportunities",
          "Present without pressure"
        ],
        donts: [
          "Push services that don't align with client needs",
          "Pressure clients to purchase additional services",
          "Recommend services solely for revenue",
          "Make suggestions that exceed client budget"
        ]
      },
      {
        title: "After-Hours Communication Boundaries",
        content: [
          "Establish clear expectations for after-hours availability. Respect client time and use emergency protocols when required.",
          "Create different channels for urgent versus non-urgent communications."
        ],
        dos: [
          "Say 'For urgent matters after business hours, please text me at this number. For non-urgent items, I'll respond to emails first thing tomorrow morning'",
          "Establish expectations for availability",
          "Use emergency protocols appropriately",
          "Respect client time outside business hours"
        ],
        donts: [
          "Create expectations of 24/7 availability for all request types",
          "Ignore the distinction between urgent and non-urgent",
          "Respond to all after-hours messages immediately (sets unrealistic expectations)"
        ]
      }
    ],
    quiz: [
      {
        id: "found_q1",
        question: "What should you do before every client interaction?",
        options: ["Check your calendar", "Define a clear purpose and objectives", "Review past emails", "Update your status"],
        correctIndex: 1,
        explanation: "Have a clear purpose for every client interaction, meeting, and deliverable. Define specific objectives and desired outcomes before any client engagement."
      },
      {
        id: "found_q2",
        question: "What is the proper way to greet a client?",
        options: ["Hey there!", "Good morning/afternoon [Name]", "What's up?", "Hi"],
        correctIndex: 1,
        explanation: "Always begin interactions with appropriate greetings like Good morning, Good afternoon, followed by the client's name."
      },
      {
        id: "found_q3",
        question: "What should you say when you don't know an answer?",
        options: ["I don't know", "Let me guess", "I'm not certain, but I'll research it and get back to you by [time]", "Ask someone else"],
        correctIndex: 2,
        explanation: "Be transparent when you don't know something and commit to following up with a specific timeframe."
      },
      {
        id: "found_q4",
        question: "When should you use 'we' instead of 'I'?",
        options: ["Never", "Always", "In client communications to show partnership", "Only in formal documents"],
        correctIndex: 2,
        explanation: "Use 'we' instead of 'I' in client communications to emphasize collective effort and partnership."
      },
      {
        id: "found_q5",
        question: "What is the response time standard for acknowledging client messages?",
        options: ["1 hour", "2 hours", "4 hours", "Same day"],
        correctIndex: 1,
        explanation: "Acknowledge client messages within 2 hours during business hours to demonstrate responsiveness."
      },
      {
        id: "found_q6",
        question: "Which tools can help polish professional communications?",
        options: ["Only spell check", "Grammarly, ChatGPT, or Claude", "No tools needed", "Google only"],
        correctIndex: 1,
        explanation: "Utilize tools like Grammarly, ChatGPT, or Claude to polish important communications and ensure professional tone."
      },
      {
        id: "found_q7",
        question: "How should change requests be handled?",
        options: ["Verbally agreed", "Documented in writing with impact outlined and formal approval obtained", "Assumed approved", "Handled later"],
        correctIndex: 1,
        explanation: "Document all client change requests in writing, outline impacts, and get formal approval before proceeding."
      },
      {
        id: "found_q8",
        question: "What type of responses should you avoid?",
        options: ["Detailed explanations", "Single-letter responses like 'k'", "Professional language", "Timely acknowledgments"],
        correctIndex: 1,
        explanation: "Avoid single-letter responses or shortened text-speak. Maintain professional language in all communications."
      },
      {
        id: "found_q9",
        question: "When should you recommend additional services?",
        options: ["Always", "Never", "Only when genuinely beneficial to client", "Monthly"],
        correctIndex: 2,
        explanation: "Recommend additional services only when genuinely beneficial, focusing on value-added opportunities without pressure."
      },
      {
        id: "found_q10",
        question: "How should after-hours availability be managed?",
        options: ["Always available 24/7", "Never respond after hours", "Establish clear expectations with emergency protocols", "Ignore after-hours messages"],
        correctIndex: 2,
        explanation: "Establish expectations for after-hours availability, respect client time, and use emergency protocols when required."
      }
    ]
  },
  {
    id: "project-management",
    title: "Project Management Excellence",
    description: "Master deadline management, accountability, and the Project Management Triangle",
    icon: "BarChart3",
    sections: [
      {
        title: "Deadline Management: Working Backward",
        content: [
          "Work backward from final client deadlines to create realistic timelines. Create internal milestones with buffer time.",
          "Set personal deadlines earlier than actual due dates. Allow time for review and revisions. Communicate timelines clearly and track progress against milestones.",
          "Example backward schedule: If client needs delivery May 15, work backward: May 13-14 buffer (2 days), May 10-12 client revisions (3 days), May 9 present draft (1 day), May 7-8 internal review (2 days), May 1-6 creation (6 days), April 29-30 research (2 days), April 28 kickoff (1 day)."
        ],
        dos: [
          "Work backward from final client deadlines",
          "Create internal milestones with buffer time",
          "Say 'Our client needs this by the 15th, so our internal deadline is the 8th to allow for review cycle'",
          "Allow time for review and revisions",
          "Track progress against milestones"
        ],
        donts: [
          "Work toward the actual deadline without buffer time",
          "Skip internal review cycles",
          "Forget to account for revision rounds",
          "Miss milestones without adjusting plan"
        ]
      },
      {
        title: "Project Accountability",
        content: [
          "Take complete ownership of deadlines, budget, and scope. Prevent issues proactively rather than reactively.",
          "Avoid missing deadlines. Manage scope creep properly and track budget utilization closely. Project success is your responsibility.",
          "Monitor progress continuously and communicate early when issues arise."
        ],
        dos: [
          "Take complete ownership of deadlines, budget, and scope",
          "Say 'I'm tracking our hours closely and noticed we're at 75% of budget with 60% of deliverables completed. Let's discuss optimization now'",
          "Prevent issues proactively",
          "Track budget utilization",
          "Communicate early about potential issues"
        ],
        donts: [
          "Miss deadlines without prior communication",
          "Allow budgets to overrun without warning",
          "Blame external factors for failures",
          "Wait until crisis to address issues"
        ]
      },
      {
        title: "The Project Management Triangle",
        content: [
          "Always secure approval for scope, budget, and time. These three constraints are interconnected - changes to one affect the others.",
          "Document all changes with client approval. Never accept changes without addressing impacts on the other two constraints.",
          "Understanding this triangle is essential for managing client expectations and maintaining project health."
        ],
        dos: [
          "Secure approval for scope, budget, and time before starting",
          "Say 'If we add these additional deliverables, we will need to adjust the timeline or the budget. Let me outline our options'",
          "Document all changes with client approval",
          "Explain how changes to one constraint affect others"
        ],
        donts: [
          "Accept changes without addressing impacts",
          "Promise to deliver more without adjusting time or budget",
          "Proceed without written confirmation",
          "Hide scope creep from stakeholders"
        ]
      },
      {
        title: "Project Initialization Requirements",
        content: [
          "Before starting any project, confirm budget, scope, and deadlines in writing. Obtain written confirmation from the client.",
          "Never start work without clear agreement on all three elements. This protects both you and the client from misunderstandings."
        ],
        dos: [
          "Confirm budget, scope, and deadlines before proceeding",
          "Say 'Before we proceed, could we please confirm the project budget of $25,000, with deliverables A, B, and C due by June 15th?'",
          "Obtain written confirmation",
          "Document all project parameters"
        ],
        donts: [
          "Start work without written confirmation",
          "Assume verbal agreements are sufficient",
          "Skip documentation of project scope",
          "Proceed with ambiguous requirements"
        ]
      },
      {
        title: "Billing Practices",
        content: [
          "Submit accurate, itemized invoices that align with agreed scope. Follow up professionally on outstanding invoices.",
          "Timely, detailed invoicing builds trust and ensures smooth payment processes."
        ],
        dos: [
          "Submit accurate, itemized invoices",
          "Align invoices with agreed scope",
          "Follow up professionally on outstanding payments",
          "Send invoices promptly after work completion"
        ],
        donts: [
          "Delay billing",
          "Send incomplete or vague invoices",
          "Include work outside agreed scope without discussion",
          "Forget to follow up on overdue payments"
        ]
      },
      {
        title: "Technology Leverage",
        content: [
          "Use Google and AI tools to research clients, verify facts, and enhance your work. AI tools can help draft proposals, refine language, and research information.",
          "Don't rely solely on memory when information is readily available through research."
        ],
        dos: [
          "Research clients using Google and AI",
          "Verify facts before presenting to clients",
          "Say 'I'll draft this proposal and then use Claude to refine the language'",
          "Use available tools effectively"
        ],
        donts: [
          "Rely on memory when information is available",
          "Skip client research",
          "Ignore helpful technology tools",
          "Present unverified information"
        ]
      },
      {
        title: "Technology Troubleshooting",
        content: [
          "Prepare backups for important meetings and presentations. Know basic troubleshooting steps.",
          "Keep alternate communication channels ready. Never waste client time with technical delays."
        ],
        dos: [
          "Prepare backup files and equipment",
          "Know basic troubleshooting steps",
          "Have alternate communication methods ready",
          "Test technology before client meetings"
        ],
        donts: [
          "Waste client time with technical delays",
          "Arrive unprepared without backups",
          "Panic when technology fails",
          "Rely solely on one method or device"
        ]
      },
      {
        title: "Continuous Professional Development",
        content: [
          "Keep skills updated and share knowledge with the team. Apply new learnings to improve service.",
          "Request training when needed. Stay current with industry developments and best practices."
        ],
        dos: [
          "Keep skills updated regularly",
          "Share knowledge with team",
          "Say 'I've been researching the latest developments and suggest an improved approach'",
          "Request training when needed",
          "Apply new learnings to client work"
        ],
        donts: [
          "Allow skills to stagnate",
          "Hoard knowledge from team",
          "Ignore industry developments",
          "Decline professional development opportunities"
        ]
      }
    ],
    quiz: [
      {
        id: "pm_q1",
        question: "How should you approach deadline management?",
        options: ["Work forward from start date", "Work backward from final deadline", "Set deadlines day-by-day", "Wait for client to set all dates"],
        correctIndex: 1,
        explanation: "Work backward from final client deadlines, creating internal milestones with buffer time and setting personal deadlines earlier than actual due dates."
      },
      {
        id: "pm_q2",
        question: "What are the three elements of the Project Management Triangle?",
        options: ["Team, Client, Manager", "Scope, Budget, Time", "Quality, Speed, Price", "Start, Middle, End"],
        correctIndex: 1,
        explanation: "The Project Management Triangle consists of Scope, Budget, and Time. Changes to one always affect the others."
      },
      {
        id: "pm_q3",
        question: "What should you do if noticing budget concerns mid-project?",
        options: ["Wait until project end", "Address immediately with stakeholders", "Reduce quality quietly", "Ignore and hope it works out"],
        correctIndex: 1,
        explanation: "Take ownership and address immediately: 'I'm tracking hours and noticed we're at 75% of budget with 60% complete. Let's discuss optimization now.'"
      },
      {
        id: "pm_q4",
        question: "What must you confirm before starting any project?",
        options: ["Just the budget", "Just the deadline", "Budget, scope, and deadlines in writing", "Only verbal agreement needed"],
        correctIndex: 2,
        explanation: "Always confirm budget, scope, and deadlines in writing before proceeding with any project work."
      },
      {
        id: "pm_q5",
        question: "If a client adds deliverables to scope, what must happen?",
        options: ["Accept with no changes", "Budget or timeline must adjust", "Work faster", "Reduce quality"],
        correctIndex: 1,
        explanation: "Changes to scope require adjusting budget or timeline. Say 'If we add these deliverables, we need to adjust timeline or budget.'"
      },
      {
        id: "pm_q6",
        question: "How should invoices be structured?",
        options: ["One total amount", "Accurate, itemized, aligned with scope", "Vague descriptions", "Delayed until month end"],
        correctIndex: 1,
        explanation: "Submit accurate, itemized invoices that align with agreed scope and follow up professionally."
      },
      {
        id: "pm_q7",
        question: "What should you prepare for important client meetings?",
        options: ["Just your main files", "Backups and alternate methods", "Nothing extra needed", "Only online resources"],
        correctIndex: 1,
        explanation: "Prepare backups, know troubleshooting basics, and keep alternate communication channels ready. Never waste client time with technical delays."
      },
      {
        id: "pm_q8",
        question: "Who is responsible for project success?",
        options: ["The client", "Your manager", "The team collectively", "You - take complete ownership"],
        correctIndex: 3,
        explanation: "Take complete ownership of deadlines, budget, and scope. Prevent issues proactively. Project success is your responsibility."
      },
      {
        id: "pm_q9",
        question: "How should you handle scope creep?",
        options: ["Accept all changes", "Document and get approval with impact outlined", "Ignore it", "Complete extra work silently"],
        correctIndex: 1,
        explanation: "Document all changes with client approval, clearly outlining impacts on budget and timeline."
      },
      {
        id: "pm_q10",
        question: "What is essential for continuous improvement?",
        options: ["Keeping skills static", "Updating skills and sharing knowledge", "Working alone", "Avoiding new approaches"],
        correctIndex: 1,
        explanation: "Keep skills updated, share knowledge with the team, apply new learnings, and request training when needed."
      }
    ]
  },
  {
    id: "meetings",
    title: "Meetings & Digital Etiquette",
    description: "Professional standards for scheduling, video calls, messaging, and presentations",
    icon: "Video",
    sections: [
      {
        title: "Meeting Scheduling and Calendar Management",
        content: [
          "Send calendar invites for every meeting with clear title, agenda, duration, and location/link. Include any pre-reading materials.",
          "Specify whether meetings are physical or virtual clearly. RSVP promptly to invites you receive.",
          "Always include a detailed agenda so participants can prepare. Send invites immediately after agreeing on meeting times."
        ],
        dos: [
          "Send calendar invites with title, agenda, duration, and link",
          "Label clearly: 'PHYSICAL MEETING: Q1 Strategy Review - 123 Main Street, Conference Room B'",
          "Include pre-reading materials in invite",
          "RSVP promptly to invites",
          "Send invites immediately after scheduling"
        ],
        donts: [
          "Send vague invites like 'Meeting with Client'",
          "Omit location or video link details",
          "Schedule without sending calendar invite",
          "Forget to include agenda or preparation materials"
        ]
      },
      {
        title: "Video Call Etiquette",
        content: [
          "Always begin calls with video on. Turn video off only for connection issues, and inform clients if disabling video.",
          "Dress professionally for all client video calls. Join 10-15 minutes early to test equipment and ensure everything works.",
          "Test audio and video before important calls. Position camera at eye level with good lighting."
        ],
        dos: [
          "Begin with video on for all client calls",
          "Say 'If you don't mind, I'll turn off my video to improve connection quality' if needed",
          "Join 10-15 minutes early to test equipment",
          "Dress professionally",
          "Position camera at eye level"
        ],
        donts: [
          "Join with video off without explanation",
          "Say 'Sorry I'm late! Let me just fix my camera... can you hear me now?'",
          "Arrive unprepared with untested equipment",
          "Dress casually for professional calls"
        ]
      },
      {
        title: "Meeting Management and Preparation",
        content: [
          "Conduct internal prep meetings before client meetings. Review objectives and research the client beforehand.",
          "Join meetings 10-15 minutes early to test equipment. Send meeting invites immediately after scheduling.",
          "Prepare agenda and ensure all participants understand their roles and objectives."
        ],
        dos: [
          "Conduct internal prep meetings",
          "Review objectives before client meetings",
          "Research client in advance",
          "Join 10-15 minutes early with tested equipment",
          "Send invites immediately"
        ],
        donts: [
          "Skip preparation and research",
          "Arrive late with technical issues",
          "Forget to brief team members on their roles",
          "Join unprepared without testing equipment"
        ]
      },
      {
        title: "WhatsApp Professional Standards",
        content: [
          "WhatsApp requires specific professional etiquette. Keep business hours - avoid messaging outside 9 AM - 6 PM their time unless urgent or previously agreed.",
          "Use clear, grammatically correct messages. Avoid excessive emojis. Format longer messages with line breaks for readability.",
          "Use WhatsApp Business features where possible: business profile, away messages, quick replies."
        ],
        dos: [
          "Keep business hours: 9 AM - 6 PM client time",
          "Use clear, grammatically correct messages",
          "Format longer messages with line breaks",
          "Set status with business hours and response expectations",
          "Use voice notes sparingly after checking client preference"
        ],
        donts: [
          "Message clients late at night or early morning",
          "Send multiple short messages in rapid succession",
          "Use excessive emojis or informal language",
          "Share sensitive information without encryption confirmation"
        ]
      },
      {
        title: "Presentation Tools & Professional Slides",
        content: [
          "Use professional templates from platforms like SlidesGo, but always customize them. Choose templates that match your message and client's brand.",
          "Follow the 10-20-30 rule: no more than 10 slides, 20 minutes presentation time, 30+ point font size for readability.",
          "Customize colors to match client brand. Replace placeholder content thoroughly. Keep text minimal - slides should support speech, not replace it."
        ],
        dos: [
          "Choose professional, clean templates from SlidesGo",
          "Customize colors to match client brand",
          "Follow 10-20-30 rule: 10 slides, 20 minutes, 30+ point font",
          "Use high-quality images and consistent fonts",
          "Keep text minimal to support speech"
        ],
        donts: [
          "Use templates without customization",
          "Cram too much text on slides",
          "Use low-resolution images",
          "Choose overly animated or distracting templates",
          "Forget to proofread all slides before presenting"
        ]
      }
    ],
    quiz: [
      {
        id: "meet_q1",
        question: "What must be included in calendar invites?",
        options: ["Just the time", "Just the link", "Title, agenda, duration, and video link/location", "Only attendee names"],
        correctIndex: 2,
        explanation: "Send calendar invites with clear meeting title, agenda, duration, and video link or physical location. Include pre-reading materials."
      },
      {
        id: "meet_q2",
        question: "How should physical meetings be labeled in invites?",
        options: ["No label needed", "PHYSICAL MEETING with address and room", "Just the address", "Same as virtual meetings"],
        correctIndex: 1,
        explanation: "Specify clearly: 'PHYSICAL MEETING: Q1 Strategy Review - 123 Main Street, Conference Room B'."
      },
      {
        id: "meet_q3",
        question: "When should you join important client video calls?",
        options: ["Exactly on time", "10-15 minutes early to test equipment", "A few minutes late", "Whenever convenient"],
        correctIndex: 1,
        explanation: "Join 10-15 minutes early to test equipment and ensure everything works properly before the meeting starts."
      },
      {
        id: "meet_q4",
        question: "What is the default video setting for client calls?",
        options: ["Video off", "Video on unless technical issues", "Video optional", "Video only if asked"],
        correctIndex: 1,
        explanation: "Always begin calls with video on. Turn video off only for connection issues and inform clients if disabling."
      },
      {
        id: "meet_q5",
        question: "What are appropriate WhatsApp business hours?",
        options: ["Any time", "9 AM - 6 PM client time unless urgent", "Only weekdays", "24/7 availability"],
        correctIndex: 1,
        explanation: "Keep business hours: avoid messaging clients outside 9 AM - 6 PM their time unless previously agreed or urgent."
      },
      {
        id: "meet_q6",
        question: "How should multiple thoughts be shared on WhatsApp?",
        options: ["Multiple rapid short messages", "One organized message with line breaks", "Voice notes only", "Wait for in-person"],
        correctIndex: 1,
        explanation: "Send one organized message with line breaks for readability instead of multiple short messages in rapid succession."
      },
      {
        id: "meet_q7",
        question: "What is the 10-20-30 rule for presentations?",
        options: ["10 hours, 20 people, 30 slides", "10 slides, 20 minutes, 30+ point font", "10 points, 20 facts, 30 images", "10 days, 20 reviews, 30 edits"],
        correctIndex: 1,
        explanation: "No more than 10 slides, 20 minutes presentation time, 30+ point font size for readability."
      },
      {
        id: "meet_q8",
        question: "What should you do with presentation templates from SlidesGo?",
        options: ["Use as-is without changes", "Customize colors, content, and brand elements", "Only change title slide", "Add more animations"],
        correctIndex: 1,
        explanation: "Always customize templates: change colors to match client brand, replace all placeholder content, add your visual identity."
      },
      {
        id: "meet_q9",
        question: "What should you do before client meetings?",
        options: ["Just show up", "Conduct internal prep and research client", "Review notes during meeting", "Wing it"],
        correctIndex: 1,
        explanation: "Conduct internal prep meetings, review objectives, and research the client before any client meeting."
      },
      {
        id: "meet_q10",
        question: "What role should slides play in presentations?",
        options: ["Replace speech entirely", "Contain full script", "Support speech, not replace it", "Show only company logo"],
        correctIndex: 2,
        explanation: "Keep text minimal - slides should support your speech with key points and visuals, not replace it with walls of text."
      }
    ]
  },
  {
    id: "documentation",
    title: "Documentation & Security",
    description: "Standards for response times, documentation, file management, and confidentiality",
    icon: "FileText",
    sections: [
      {
        title: "Documentation Standards",
        content: [
          "Send meeting minutes after every client interaction. Document all discussions from messages or calls.",
          "Follow up conversations with written emails to confirm understanding and create a record.",
          "Never rely solely on memory - create written confirmation of all important discussions and decisions."
        ],
        dos: [
          "Send meeting minutes after every client interaction",
          "Say 'As discussed, you've approved the color scheme and requested font changes. I'm sending this email to confirm these details'",
          "Document all discussions from messages or calls",
          "Follow up verbal conversations with written confirmation"
        ],
        donts: [
          "Forget to document conversations",
          "Rely on memory for important details",
          "Skip follow-up emails after calls",
          "Leave decisions undocumented"
        ]
      },
      {
        title: "Response Time Standards",
        content: [
          "Acknowledge client messages within 2 hours during business hours. This doesn't mean solving in 2 hours, just acknowledging receipt.",
          "If you need time to research, send immediate acknowledgment: 'Received, looking into this and will get back to you by [specific time].'",
          "For complex requests requiring more than a day, send daily progress updates. Use away messages when unavailable."
        ],
        dos: [
          "Acknowledge within 2 hours during business hours",
          "Provide specific timeframes for full responses",
          "Send daily updates on ongoing issues",
          "Set calendar reminders for promised response times",
          "Use auto-responders when out of office"
        ],
        donts: [
          "Go silent for more than 2 hours on active projects",
          "Promise response times you can't meet",
          "Give vague responses like 'I'll get back to you soon'",
          "Ignore messages on weekends without setting expectations"
        ]
      },
      {
        title: "File Naming Conventions",
        content: [
          "Follow the pattern: ProjectName_FileType_YYYYMMDD. For example: AcmeCorp_Contract_20250115_V2.pdf",
          "Use underscores or hyphens instead of spaces. Include version numbers for iterative files (_V1, _V2). Mark final versions as _Final.",
          "Be specific with file types: 'Proposal', 'Contract', 'Design_V1', 'Report_Final'. This prevents confusion and looks professional."
        ],
        dos: [
          "Use format: ProjectName_FileType_YYYYMMDD",
          "Example: 'ClientX_Design_Mockup_20250120_Final.png'",
          "Replace spaces with underscores or hyphens",
          "Include version numbers (_V1, _V2, _Final)",
          "Use descriptive file types"
        ],
        donts: [
          "Use names like 'final_final_v3_REALLY_FINAL.pdf'",
          "Include spaces in filenames",
          "Use ambiguous dates like '1-15-25'",
          "Skip version numbers on iterative documents",
          "Use special characters (@, #, %, etc.)"
        ]
      },
      {
        title: "Confidentiality Management",
        content: [
          "Never discuss one client's business with another client. Be cautious in public spaces about what you say.",
          "Password protect sensitive files. Use secure file sharing methods with encryption.",
          "Treat all client information as confidential by default. Follow the 'need to know' principle."
        ],
        dos: [
          "Treat all client information as confidential by default",
          "Use password protection for sensitive documents",
          "Use secure file sharing with encryption",
          "Follow 'need to know' principle",
          "Be cautious discussing client work in public"
        ],
        donts: [
          "Discuss one client's business with another",
          "Share client information in public spaces",
          "Use unsecured methods for sensitive data",
          "Share details beyond those who need to know"
        ]
      },
      {
        title: "Password & Access Management",
        content: [
          "Use a password manager (1Password, LastPass, Bitwarden) for all client credentials. Never store passwords in plain text.",
          "Create unique, complex passwords: minimum 12 characters with uppercase, lowercase, numbers, and symbols.",
          "Enable two-factor authentication (2FA) wherever possible. Update passwords when team members leave projects."
        ],
        dos: [
          "Use password manager for all credentials",
          "Create 12+ character passwords with mixed types",
          "Enable 2FA on all systems that support it",
          "Share via secure password manager or self-destructing links",
          "Update passwords when team changes"
        ],
        donts: [
          "Share passwords via email, Slack, or WhatsApp",
          "Reuse passwords across different systems",
          "Write passwords on paper or sticky notes",
          "Use simple passwords like 'ClientName2025'",
          "Keep access active after team members leave"
        ]
      },
      {
        title: "Client Offboarding",
        content: [
          "Provide thorough handover documentation when projects end. Conduct exit interviews to gather feedback.",
          "Leave the door open for future work. Ensure smooth transition and professional closure."
        ],
        dos: [
          "Provide comprehensive handover documentation",
          "Conduct exit interviews for feedback",
          "Leave door open for future work",
          "Ensure smooth transition"
        ],
        donts: [
          "End relationships abruptly",
          "Skip documentation during offboarding",
          "Forget to gather feedback",
          "Burn bridges"
        ]
      },
      {
        title: "Crisis Management",
        content: [
          "Follow established protocols for crisis situations. Respond promptly and keep stakeholders informed.",
          "Document all actions taken. Conduct post-crisis reviews to learn and improve.",
          "Never panic or leave clients without next steps during emergencies."
        ],
        dos: [
          "Follow crisis protocols",
          "Respond promptly to emergency situations",
          "Say 'I understand this is an emergency. I have escalated to our crisis team. Here's what we will do immediately...'",
          "Keep stakeholders informed",
          "Document all actions and conduct post-crisis reviews"
        ],
        donts: [
          "Panic or show unprofessional behavior",
          "Leave clients without next steps",
          "Skip documentation during crisis",
          "Ignore established protocols"
        ]
      },
      {
        title: "Client Gift and Entertainment Policy",
        content: [
          "Follow company policies on gifts. Keep gifts appropriate and documented to avoid ethical issues.",
          "Generally acceptable: modest gifts under $50, items with company branding, celebrations of shared milestones.",
          "Avoid gifts that could be perceived as bribes or unethical influence."
        ],
        dos: [
          "Follow company and client gift policies",
          "Keep gifts modest (typically under $50)",
          "Send thoughtful, appropriate tokens",
          "Time gifts around holidays or achievements, not contract decisions",
          "Document all gifts sent or received"
        ],
        donts: [
          "Provide lavish gifts that could appear as bribes",
          "Send gifts right before contract renewals",
          "Ignore company or client policies",
          "Give inappropriate or personal gifts"
        ]
      }
    ],
    quiz: [
      {
        id: "doc_q1",
        question: "What should you do after every client interaction?",
        options: ["Nothing if notes taken", "Send meeting minutes documenting discussions", "Wait for client to summarize", "Only document if requested"],
        correctIndex: 1,
        explanation: "Send meeting minutes after every client interaction to document all discussions and create written record."
      },
      {
        id: "doc_q2",
        question: "What is the response time standard for acknowledging messages?",
        options: ["Same day", "2 hours during business hours", "1 hour", "Next morning"],
        correctIndex: 1,
        explanation: "Acknowledge client messages within 2 hours during business hours to demonstrate responsiveness and respect."
      },
      {
        id: "doc_q3",
        question: "What is the correct file naming format?",
        options: ["AnyFormat_Works", "ProjectName_FileType_YYYYMMDD", "Client-Date-File", "File_Final"],
        correctIndex: 1,
        explanation: "Use ProjectName_FileType_YYYYMMDD format (e.g., AcmeCorp_Contract_20250115_V2.pdf) for consistent organization."
      },
      {
        id: "doc_q4",
        question: "How should you handle client information?",
        options: ["Share freely internally", "Treat all as confidential by default", "Only protect if labeled", "Discuss anonymously"],
        correctIndex: 1,
        explanation: "Never discuss one client's business with another. Treat all client information as confidential by default."
      },
      {
        id: "doc_q5",
        question: "Where should passwords be stored?",
        options: ["Excel spreadsheet", "Sticky notes", "Password manager (1Password, LastPass, Bitwarden)", "Email drafts"],
        correctIndex: 2,
        explanation: "Use a password manager for all client credentials. Never store passwords in plain text, spreadsheets, or sticky notes."
      },
      {
        id: "doc_q6",
        question: "What is the minimum password length?",
        options: ["6 characters", "8 characters", "12 characters with mixed types", "Any length"],
        correctIndex: 2,
        explanation: "Create passwords with minimum 12 characters including uppercase, lowercase, numbers, and symbols."
      },
      {
        id: "doc_q7",
        question: "When should 2FA be enabled?",
        options: ["Never", "Only for banking", "Wherever possible, especially for sensitive data", "Only if required"],
        correctIndex: 2,
        explanation: "Enable two-factor authentication wherever possible, especially for client accounts with financial or sensitive data."
      },
      {
        id: "doc_q8",
        question: "What should you do during a crisis?",
        options: ["Wait and hope it resolves", "Panic and escalate immediately", "Follow protocols, respond promptly, keep stakeholders informed", "Handle alone quietly"],
        correctIndex: 2,
        explanation: "Follow protocols, respond promptly, say 'I understand this is an emergency. Here's what we'll do immediately...' and document everything."
      },
      {
        id: "doc_q9",
        question: "What is generally acceptable for client gifts?",
        options: ["Any amount shows care", "Modest gifts under $50 following policies", "No gifts ever", "Only expensive gifts matter"],
        correctIndex: 1,
        explanation: "Keep gifts modest (under $50), follow company policies, and avoid timing them around contract decisions."
      },
      {
        id: "doc_q10",
        question: "How should verbal conversations be handled?",
        options: ["Memory is sufficient", "Record all calls", "Follow up with written confirmation", "Notes are optional"],
        correctIndex: 2,
        explanation: "Follow up conversations with written emails to confirm understanding and create a permanent record."
      }
    ]
  },
  {
    id: "strategy",
    title: "Client Strategy & Relations",
    description: "Building lasting relationships through networking, monitoring, education, and feedback",
    icon: "Users",
    sections: [
      {
        title: "Professional Networking on LinkedIn",
        content: [
          "Connect on LinkedIn with clients, partners, and industry professionals. Always personalize connection requests - mention how you know them or what sparked interest.",
          "Follow client updates and track milestones. Engage meaningfully: comment on posts, share relevant content, celebrate client wins (with permission).",
          "Keep your profile current with professional photo, detailed experience, and skills. Your profile is your digital business card."
        ],
        dos: [
          "Send personalized requests: mention connection context",
          "Keep profile professional and current",
          "Engage with client posts through likes and thoughtful comments",
          "Say 'Congratulations on your company's recent award. This aligns with the campaign we are developing'",
          "Share thought leadership about industry trends"
        ],
        donts: [
          "Send generic 'I'd like to add you' requests",
          "Miss opportunities or send generic messages",
          "Use LinkedIn InMail for sales pitches",
          "Share controversial content on professional profile",
          "Post about client work without permission"
        ]
      },
      {
        title: "Client Education",
        content: [
          "Explain processes clearly to clients. Share insights and provide resources so they understand the work and can get full value.",
          "Avoid jargon without explanation. Empower clients with knowledge rather than creating dependency."
        ],
        dos: [
          "Say 'Let me explain how this dashboard works so you can get full value'",
          "Explain processes clearly",
          "Share valuable insights",
          "Provide helpful resources",
          "Translate technical terms"
        ],
        donts: [
          "Use jargon without explanation",
          "Create dependency by withholding knowledge",
          "Assume clients understand technical concepts",
          "Skip explanations to save time"
        ]
      },
      {
        title: "Social Media Monitoring",
        content: [
          "Follow client company pages and turn on notifications. Check manually twice daily (morning and afternoon).",
          "Look for announcements, brand messaging shifts, customer sentiment, competitive actions, and crisis indicators. Alert clients to issues before they discover them.",
          "Set up Google Alerts for client company names and key executives to catch news coverage."
        ],
        dos: [
          "Check client social media twice daily (morning and afternoon)",
          "Follow client pages and turn on notifications",
          "Say 'I noticed the post contains different messaging than approved. We can help address this'",
          "Set up Google Alerts for client names",
          "Engage with client content genuinely"
        ],
        donts: [
          "Only check when problems arise",
          "Allow clients to discover issues first",
          "Engage with controversial posts",
          "Share confidential knowledge in comments",
          "Obsessively monitor - balance with productivity"
        ]
      },
      {
        title: "Feedback Collection",
        content: [
          "Collect feedback regularly from clients. Create comfortable channels for honest input.",
          "Document and share feedback with team. Act on feedback to improve service quality.",
          "Never react defensively to criticism - view it as opportunity for growth."
        ],
        dos: [
          "Collect feedback regularly",
          "Say 'We value your opinion. Would you mind sharing thoughts on our recent campaign?'",
          "Create comfortable feedback channels",
          "Document and share feedback",
          "Act on feedback constructively"
        ],
        donts: [
          "Avoid feedback collection",
          "React defensively to criticism",
          "Ignore feedback after collecting it",
          "Only ask when things go wrong"
        ]
      },
      {
        title: "Escalation Procedures",
        content: [
          "Know when to escalate issues. Inform clients of escalation processes and maintain professional tone throughout.",
          "Don't promise solutions you cannot deliver. Escalate promptly when situations exceed your authority or expertise."
        ],
        dos: [
          "Know when to escalate",
          "Say 'I understand this is a priority issue. I'll escalate to our director immediately'",
          "Inform clients of escalation processes",
          "Maintain professional tone",
          "Escalate promptly when needed"
        ],
        donts: [
          "Promise solutions you cannot deliver",
          "Delay escalation hoping to solve alone",
          "Skip informing clients about escalation",
          "Handle issues beyond your expertise without help"
        ]
      },
      {
        title: "Cross-Selling and Upselling Etiquette",
        content: [
          "Recommend additional services only when genuinely beneficial. Listen for organic opportunities when clients mention new challenges.",
          "Frame services as solutions to problems they've expressed: 'Given your team expansion, our training program might help' vs. 'Want to buy training?'",
          "Timing matters: don't pitch during crisis or when they're unhappy. Fix issues first, expand later. Be transparent about costs and value."
        ],
        dos: [
          "Listen for organic needs clients express",
          "Say 'Based on your goals, our social media management could complement your strategy. Would you like to learn more?'",
          "Frame as solutions to their problems",
          "Choose timing carefully",
          "Be transparent about costs and value"
        ],
        donts: [
          "Pitch constantly regardless of situation",
          "Suggest services that don't fit their needs",
          "Upsell during crisis or when current work is problematic",
          "Pressure clients to decide immediately",
          "Make recommendations solely to hit sales targets"
        ]
      },
      {
        title: "Gift Policies & Professional Boundaries",
        content: [
          "Check company and client gift policies before sending anything. Keep gifts modest (typically under $50).",
          "Time gifts around holidays or project completions, not contract decisions. Consider branded items or donations to charities client supports.",
          "Handwritten thank-you notes are meaningful, free alternatives. If client offers substantial gift, check company policy before accepting."
        ],
        dos: [
          "Check company and client gift policies first",
          "Keep gifts modest (under $50)",
          "Time around holidays or achievements, not contract renewals",
          "Send handwritten thank-you notes",
          "Consider donations to charities client supports"
        ],
        donts: [
          "Send expensive gifts that could appear as bribes",
          "Give gifts before contract renewals or pitches",
          "Assume all clients accept gifts",
          "Give personal gifts (clothing, jewelry, perfume)",
          "Accept substantial gifts without checking policy"
        ]
      }
    ],
    quiz: [
      {
        id: "strat_q1",
        question: "How should LinkedIn connection requests be sent?",
        options: ["Use default message", "Personalize with context about connection", "Send mass requests", "Don't bother connecting"],
        correctIndex: 1,
        explanation: "Always personalize connection requests by mentioning how you know them or what sparked your interest."
      },
      {
        id: "strat_q2",
        question: "How often should client social media be monitored?",
        options: ["Weekly", "Once daily", "Twice daily (morning and afternoon)", "Only when problems arise"],
        correctIndex: 2,
        explanation: "Check client social media twice daily - morning and afternoon - to stay aware of announcements, shifts, and potential issues."
      },
      {
        id: "strat_q3",
        question: "What should you do if you notice an issue on client's social media?",
        options: ["Ignore it", "Alert client before they discover it", "Post comment publicly", "Tell competitors"],
        correctIndex: 1,
        explanation: "Say 'I noticed the post contains different messaging than approved. We can help address this' - alert clients proactively."
      },
      {
        id: "strat_q4",
        question: "When is the best time to pitch additional services?",
        options: ["Every meeting", "When they express relevant needs organically", "During crisis", "Monthly regardless"],
        correctIndex: 1,
        explanation: "Listen for organic opportunities when clients mention challenges. Frame additional services as solutions to problems they've expressed."
      },
      {
        id: "strat_q5",
        question: "How should upselling be framed?",
        options: ["As revenue opportunity", "As solutions to their expressed problems", "As required add-ons", "As pressure tactics"],
        correctIndex: 1,
        explanation: "Present as solutions: 'Given your team expansion, our training program might help' not 'Want to buy training?'"
      },
      {
        id: "strat_q6",
        question: "What is generally acceptable for client gifts?",
        options: ["Any amount", "Modest gifts under $50 following policies", "No gifts ever", "Only expensive gifts"],
        correctIndex: 1,
        explanation: "Keep gifts modest (under $50), check both company and client policies, and time appropriately."
      },
      {
        id: "strat_q7",
        question: "When should you NOT send client gifts?",
        options: ["Holidays", "After project completion", "Right before contract renewals", "Never send gifts"],
        correctIndex: 2,
        explanation: "Avoid gifts right before contract renewals or new business decisions as it could appear as bribery."
      },
      {
        id: "strat_q8",
        question: "What should you do before accepting substantial client gifts?",
        options: ["Accept immediately", "Decline always", "Check company policy first", "Share with team"],
        correctIndex: 2,
        explanation: "If client offers substantial gift, politely decline or check company policy before accepting to ensure compliance."
      },
      {
        id: "strat_q9",
        question: "How should you handle client education?",
        options: ["Use jargon freely", "Explain processes clearly to empower them", "Keep knowledge secret", "Assume they understand"],
        correctIndex: 1,
        explanation: "Say 'Let me explain how this dashboard works so you can get full value' - explain processes, share insights, avoid unexplained jargon."
      },
      {
        id: "strat_q10",
        question: "When should issues be escalated?",
        options: ["Never escalate", "Always handle alone", "When beyond your authority or expertise", "Only if client demands"],
        correctIndex: 2,
        explanation: "Say 'I understand this is priority. I'll escalate to our director immediately' - know when to escalate and don't promise solutions you can't deliver."
      }
    ]
  }
];

export const MOCK_LEADERBOARD: Array<{ name: string; xp: number; modulesCompleted: number }> = [
  { name: "Sarah Chen", xp: 2850, modulesCompleted: 5 },
  { name: "Marcus Johnson", xp: 2600, modulesCompleted: 5 },
  { name: "Aisha Patel", xp: 2200, modulesCompleted: 4 },
  { name: "Luis Rodriguez", xp: 1900, modulesCompleted: 4 },
  { name: "Emma Thompson", xp: 1650, modulesCompleted: 3 }
];

export const XP_PER_SECTION = 50;
export const XP_PER_CORRECT_ANSWER = 100;

import { Module } from "@/types";

export const MODULES: Module[] = [
  {
    id: "foundations",
    title: "Foundations & Communication",
    description: "Master the fundamentals of client communication and professional interaction",
    icon: "MessageSquare",
    sections: [
      {
        title: "Greeting & First Impressions",
        content: [
          "Every interaction begins with a proper greeting. The way you greet a client sets the tone for the entire relationship.",
          "Use warm, professional language that acknowledges the client's presence and makes them feel valued.",
          "Always address clients by name when known, and maintain a friendly yet professional demeanor."
        ],
        dos: [
          "Use 'Good morning/afternoon' followed by the client's name",
          "Acknowledge receipt of messages within 2 hours",
          "Express enthusiasm about working together"
        ],
        donts: [
          "Use casual greetings like 'Hey' or 'What's up'",
          "Start conversations without proper introduction",
          "Ignore time zones when greeting international clients"
        ]
      },
      {
        title: "Purposeful Communication",
        content: [
          "Every message should have a clear purpose. Before hitting send, ask yourself: what action or understanding do I want from this communication?",
          "Structure your messages with a clear beginning, middle, and end. State the purpose upfront, provide necessary details, and close with a clear call to action.",
          "Avoid rambling or including unnecessary information that could confuse the main message."
        ],
        dos: [
          "State the purpose in the first sentence",
          "Use bullet points for multiple items",
          "End with a specific call to action or next steps"
        ],
        donts: [
          "Write long paragraphs without structure",
          "Mix multiple unrelated topics in one message",
          "Leave the recipient guessing about required actions"
        ]
      },
      {
        title: "We vs I Language",
        content: [
          "Using 'We' instead of 'I' creates a sense of partnership and shared responsibility with clients.",
          "This linguistic choice emphasizes collaboration and makes clients feel they're part of the solution, not just receiving a service.",
          "However, use 'I' when taking personal responsibility for mistakes or when providing individual opinions."
        ],
        dos: [
          "Use 'We can explore this together'",
          "Say 'We'll ensure this is completed'",
          "Frame solutions as collaborative: 'We have a few options'"
        ],
        donts: [
          "Overuse 'I think' or 'I believe'",
          "Use 'You should' which can sound directive",
          "Say 'I'll try' which lacks confidence"
        ]
      },
      {
        title: "Leveraging AI Tools",
        content: [
          "Modern AI tools like Grammarly and ChatGPT are powerful allies in professional communication.",
          "Use Grammarly to catch spelling errors, improve clarity, and ensure professional tone. Set it to 'Professional' or 'Formal' mode for client communications.",
          "ChatGPT can help restructure messages, suggest alternative phrasing, or even draft initial responses that you can personalize.",
          "Always review and personalize AI-generated content. Clients can often detect generic, unmodified AI text."
        ],
        dos: [
          "Run all client emails through Grammarly",
          "Use ChatGPT to brainstorm different ways to phrase sensitive messages",
          "Ask AI to check tone and cultural appropriateness"
        ],
        donts: [
          "Send AI-generated text without personal review",
          "Rely solely on AI for creative or strategic decisions",
          "Share confidential client information with AI tools"
        ]
      }
    ],
    quiz: [
      {
        id: "found_q1",
        question: "What is the recommended response time for acknowledging client messages?",
        options: ["Within 1 hour", "Within 2 hours", "Within 4 hours", "Same business day"],
        correctIndex: 1,
        explanation: "The standard is to acknowledge client messages within 2 hours to demonstrate responsiveness while being realistic about workload."
      },
      {
        id: "found_q2",
        question: "When should you use 'I' instead of 'We' in client communication?",
        options: ["When proposing solutions", "When taking responsibility for mistakes", "When discussing deadlines", "Never, always use 'We'"],
        correctIndex: 1,
        explanation: "Use 'I' when taking personal responsibility for mistakes to show accountability."
      },
      {
        id: "found_q3",
        question: "What is the proper way to greet a client?",
        options: ["Hey there!", "What's up?", "Good morning/afternoon [Name]", "Hi"],
        correctIndex: 2,
        explanation: "Professional greetings should include a time-appropriate salutation followed by the client's name."
      },
      {
        id: "found_q4",
        question: "What should every message include at the end?",
        options: ["Your signature only", "A clear call to action", "A friendly emoji", "The project name"],
        correctIndex: 1,
        explanation: "Messages should end with a clear call to action or next steps so clients know what to expect."
      },
      {
        id: "found_q5",
        question: "How should you structure client messages?",
        options: ["One long paragraph", "Stream of consciousness", "Clear beginning, middle, and end", "Bullet points only"],
        correctIndex: 2,
        explanation: "Messages should have a clear structure with purpose stated upfront, details in the middle, and action items at the end."
      },
      {
        id: "found_q6",
        question: "What is the recommended Grammarly mode for client communications?",
        options: ["Casual", "Professional or Formal", "Creative", "Neutral"],
        correctIndex: 1,
        explanation: "Professional or Formal mode ensures appropriate tone for client communications."
      },
      {
        id: "found_q7",
        question: "When using AI-generated content, you should:",
        options: ["Send it immediately", "Review and personalize it", "Only use the first paragraph", "Never use it"],
        correctIndex: 1,
        explanation: "Always review and personalize AI-generated content to ensure it's appropriate and authentic."
      },
      {
        id: "found_q8",
        question: "What creates a sense of partnership with clients?",
        options: ["Using 'I' language", "Using 'We' language", "Using 'You' language", "Avoiding pronouns"],
        correctIndex: 1,
        explanation: "'We' language creates a collaborative atmosphere and makes clients feel they're part of the solution."
      },
      {
        id: "found_q9",
        question: "What should you do before sending any message?",
        options: ["Check your calendar", "Ask what action you want from it", "Wait 24 hours", "Print it out"],
        correctIndex: 1,
        explanation: "Before sending, always ask yourself what action or understanding you want from the communication."
      },
      {
        id: "found_q10",
        question: "Why should you avoid mixing multiple unrelated topics in one message?",
        options: ["It saves time", "It's more efficient", "It could confuse the main message", "It's a company rule"],
        correctIndex: 2,
        explanation: "Mixing unrelated topics can confuse the main message and make it unclear what action is needed."
      }
    ]
  },
  {
    id: "project-management",
    title: "Project Management Excellence",
    description: "Learn to manage projects efficiently using the Project Management Triangle",
    icon: "BarChart3",
    sections: [
      {
        title: "The Project Management Triangle",
        content: [
          "The Project Management Triangle consists of three critical constraints: Scope, Budget, and Time. These three elements are interconnected - changing one always affects the others.",
          "Scope defines what will be delivered. Budget determines resources available. Time sets the deadline for completion.",
          "Understanding this triangle helps you communicate trade-offs to clients. If they want to add features (scope), either budget or timeline must adjust.",
          "Excellence in project management means transparently navigating these constraints while maintaining quality."
        ],
        dos: [
          "Explain triangle trade-offs to clients early",
          "Document scope changes and their impact",
          "Regularly reassess all three constraints"
        ],
        donts: [
          "Promise to deliver more without adjusting time or budget",
          "Hide scope creep from stakeholders",
          "Ignore early warning signs of constraint conflicts"
        ]
      },
      {
        title: "Working Backward from Deadlines",
        content: [
          "Effective project planning starts at the end. Begin with the deadline and work backward to create a realistic timeline.",
          "Break the project into phases, allocating time for each phase, review cycles, and potential delays.",
          "Always build in buffer time - at least 20% extra for unexpected issues, stakeholder feedback rounds, and revisions.",
          "This approach prevents last-minute rushes and ensures quality deliverables."
        ],
        dos: [
          "Start with the final deadline and work backward",
          "Include buffer time (minimum 20%)",
          "Account for client feedback and approval cycles",
          "Set internal deadlines 2-3 days before client deadlines"
        ],
        donts: [
          "Work forward from start date without considering deadline",
          "Plan right up to the deadline with no buffer",
          "Forget to account for weekends and holidays",
          "Ignore stakeholder review time"
        ]
      },
      {
        title: "Billing & Budget Management",
        content: [
          "Transparent billing builds trust. Always clarify billing terms before starting work.",
          "Track all billable hours accurately using project management tools. Round to 15-minute increments.",
          "Communicate early if project is trending over budget. Clients appreciate warnings more than surprises.",
          "Provide detailed invoices that break down work by task or phase, making the value clear."
        ],
        dos: [
          "Log time daily while details are fresh",
          "Send budget status updates at 50% and 75% spent",
          "Provide itemized invoices",
          "Discuss budget adjustments before exceeding limits"
        ],
        donts: [
          "Wait until end of month to log time",
          "Surprise clients with over-budget invoices",
          "Include vague line items like 'misc work'",
          "Perform work outside agreed scope without approval"
        ]
      },
      {
        title: "Crisis Management Protocols",
        content: [
          "Every project may face crises. Having a protocol in place prevents panic and ensures professional handling.",
          "First: Assess the situation and impact. Second: Inform relevant stakeholders immediately. Third: Propose solutions with timelines.",
          "Never hide problems hoping they'll resolve themselves. Early transparency allows for collaborative problem-solving.",
          "Document the crisis, response, and outcome for future learning."
        ],
        dos: [
          "Notify stakeholders within 1 hour of identifying crisis",
          "Present problem AND proposed solutions together",
          "Keep communication channels open and active",
          "Document everything for post-crisis review"
        ],
        donts: [
          "Delay informing clients hoping to fix it first",
          "Present problems without proposed solutions",
          "Go radio silent during crisis periods",
          "Blame team members or external factors"
        ]
      }
    ],
    quiz: [
      {
        id: "pm_q1",
        question: "What are the three elements of the Project Management Triangle?",
        options: ["Quality, Speed, Cost", "Scope, Budget, Time", "Team, Client, Deliverable", "Planning, Execution, Review"],
        correctIndex: 1,
        explanation: "The Project Management Triangle consists of Scope (what will be delivered), Budget (available resources), and Time (deadline)."
      },
      {
        id: "pm_q2",
        question: "What is the recommended minimum buffer time for projects?",
        options: ["10%", "20%", "30%", "50%"],
        correctIndex: 1,
        explanation: "Always build in at least 20% buffer time for unexpected issues, feedback rounds, and revisions."
      },
      {
        id: "pm_q3",
        question: "When should you start project planning?",
        options: ["From the start date forward", "From the deadline backward", "From the middle outward", "When the team is assembled"],
        correctIndex: 1,
        explanation: "Start with the final deadline and work backward to create a realistic timeline with proper buffer time."
      },
      {
        id: "pm_q4",
        question: "How far ahead of client deadlines should you set internal deadlines?",
        options: ["Same day", "1 day", "2-3 days", "1 week"],
        correctIndex: 2,
        explanation: "Set internal deadlines 2-3 days before client deadlines to allow for final reviews and unexpected issues."
      },
      {
        id: "pm_q5",
        question: "When should you send budget status updates?",
        options: ["Only at project end", "Weekly", "At 50% and 75% spent", "When budget is exceeded"],
        correctIndex: 2,
        explanation: "Proactively send budget status updates at 50% and 75% of budget spent to keep clients informed."
      },
      {
        id: "pm_q6",
        question: "How should billable hours be rounded?",
        options: ["5-minute increments", "15-minute increments", "30-minute increments", "Full hours only"],
        correctIndex: 1,
        explanation: "Track and round billable hours to 15-minute increments for accuracy and industry standard practice."
      },
      {
        id: "pm_q7",
        question: "When should you notify stakeholders of a project crisis?",
        options: ["After you fix it", "End of the day", "Within 1 hour", "Next scheduled meeting"],
        correctIndex: 2,
        explanation: "Notify stakeholders within 1 hour of identifying a crisis to enable collaborative problem-solving."
      },
      {
        id: "pm_q8",
        question: "When presenting a crisis, you should:",
        options: ["Only explain the problem", "Present problem AND solutions", "Wait for stakeholders to ask", "Send a brief email"],
        correctIndex: 1,
        explanation: "Always present both the problem and proposed solutions together to demonstrate proactive thinking."
      },
      {
        id: "pm_q9",
        question: "What happens when you add features to project scope?",
        options: ["Nothing changes", "Budget or time must adjust", "Quality improves automatically", "Team works harder"],
        correctIndex: 1,
        explanation: "The Project Management Triangle means changing scope requires adjusting budget or timeline to maintain balance."
      },
      {
        id: "pm_q10",
        question: "When should you log billable time?",
        options: ["End of week", "End of month", "Daily while fresh", "When invoicing"],
        correctIndex: 2,
        explanation: "Log time daily while details are fresh to ensure accuracy and prevent forgotten work."
      }
    ]
  },
  {
    id: "meetings",
    title: "Meetings & Digital Etiquette",
    description: "Professional standards for virtual meetings and digital communication",
    icon: "Video",
    sections: [
      {
        title: "Scheduling & Calendar Management",
        content: [
          "Professional scheduling respects everyone's time. Always send calendar invites for any meeting, even informal ones.",
          "Include clear meeting title, agenda, duration, and video link in the invite. Add any pre-read materials as attachments or links.",
          "Check attendees' time zones using tools like World Clock Meeting Planner. Schedule at times reasonable for all parties.",
          "Send invites at least 24 hours in advance for internal meetings, 48+ hours for client meetings."
        ],
        dos: [
          "Send calendar invites immediately after agreeing on meeting",
          "Include detailed agenda in invitation description",
          "Add video conferencing link to invite",
          "Verify time zones for international meetings"
        ],
        donts: [
          "Schedule meetings via email or chat without calendar invite",
          "Send vague invites like 'Quick chat'",
          "Assume everyone is in your time zone",
          "Schedule meetings with less than 24 hours notice (except emergencies)"
        ]
      },
      {
        title: "Video Call Best Practices",
        content: [
          "Video calls require the same professionalism as in-person meetings, with additional technical considerations.",
          "Camera should be on unless bandwidth or privacy issues prevent it. Being visible builds trust and facilitates better communication.",
          "Position camera at eye level, ensure good lighting (face the light source), and use a neutral, tidy background or virtual background.",
          "Test audio and video before important client calls. Join 2-3 minutes early to handle technical issues."
        ],
        dos: [
          "Keep camera on during client meetings",
          "Mute when not speaking in large meetings",
          "Join 2-3 minutes early to test setup",
          "Use headphones to prevent audio echo",
          "Maintain eye contact by looking at camera"
        ],
        donts: [
          "Turn camera off without explanation",
          "Eat during video calls",
          "Check phone or other screens visibly",
          "Use distracting virtual backgrounds for professional meetings",
          "Forget to check your video preview before joining"
        ]
      },
      {
        title: "WhatsApp Professional Standards",
        content: [
          "WhatsApp is increasingly used for business communication, but requires specific etiquette to maintain professionalism.",
          "Use WhatsApp Business features where possible: business profile, away messages, quick replies for common questions.",
          "Keep business hours: avoid messaging clients outside 9 AM - 6 PM their time unless previously agreed or urgent.",
          "Use clear, grammatically correct messages. Avoid excessive emojis. One or two relevant emojis is fine; strings of them are not professional."
        ],
        dos: [
          "Set status with business hours and response time expectations",
          "Use read receipts judiciously - consider turning off for less pressure",
          "Format longer messages with line breaks for readability",
          "Use voice notes sparingly and only after checking if client prefers them"
        ],
        donts: [
          "Use WhatsApp for sensitive/confidential information without encryption confirmation",
          "Send multiple short messages in rapid succession (send one organized message)",
          "Use excessive emojis or informal language",
          "Message clients late at night or early morning"
        ]
      },
      {
        title: "Presentation Tools & SlidesGo",
        content: [
          "Presentations are a key communication tool. SlidesGo and similar platforms offer professional templates that save time and ensure polish.",
          "Choose templates that match your message and client's brand. Simplicity often beats flash - clear data and messaging matters most.",
          "Customize templates: don't use as-is. Change colors to match brand, replace placeholder content thoroughly, add your visual identity.",
          "Follow the 10-20-30 rule: no more than 10 slides, 20 minutes presentation time, 30+ point font size for readability."
        ],
        dos: [
          "Choose professional, clean templates from SlidesGo",
          "Customize colors to match client brand",
          "Use high-quality images and consistent fonts",
          "Keep text minimal - slides should support speech, not replace it"
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
        question: "How far in advance should you send client meeting invites?",
        options: ["Same day", "24 hours", "48+ hours", "1 week"],
        correctIndex: 2,
        explanation: "Client meetings require 48+ hours notice to respect their schedule and allow proper preparation."
      },
      {
        id: "meet_q2",
        question: "What should be included in a calendar invite?",
        options: ["Just the meeting time", "Title and link only", "Title, agenda, duration, and video link", "Only the attendee list"],
        correctIndex: 2,
        explanation: "Professional invites include title, detailed agenda, duration, video link, and any pre-read materials."
      },
      {
        id: "meet_q3",
        question: "When should you join important client video calls?",
        options: ["Exactly on time", "2-3 minutes early", "5 minutes late", "When everyone else joins"],
        correctIndex: 1,
        explanation: "Join 2-3 minutes early to test your setup and be ready when the meeting starts."
      },
      {
        id: "meet_q4",
        question: "What is the default camera position for client meetings?",
        options: ["Off unless asked", "On unless technical issues", "Only for presentations", "On only for first 5 minutes"],
        correctIndex: 1,
        explanation: "Camera should be on during client meetings unless bandwidth or privacy issues prevent it."
      },
      {
        id: "meet_q5",
        question: "What hours should you avoid messaging clients on WhatsApp?",
        options: ["Before 9 AM and after 6 PM their time", "Weekends only", "Before 7 AM only", "No restrictions"],
        correctIndex: 0,
        explanation: "Respect business hours: avoid messaging outside 9 AM - 6 PM in the client's time zone unless urgent."
      },
      {
        id: "meet_q6",
        question: "How should you send multiple thoughts on WhatsApp?",
        options: ["Multiple rapid short messages", "One organized message with line breaks", "Voice notes only", "Wait and batch weekly"],
        correctIndex: 1,
        explanation: "Send one organized message with line breaks for readability instead of multiple rapid messages."
      },
      {
        id: "meet_q7",
        question: "What is the 10-20-30 rule for presentations?",
        options: ["10 speakers, 20 topics, 30 slides", "10 slides, 20 minutes, 30+ point font", "10 minutes, 20 slides, 30 speakers", "10 points, 20 facts, 30 images"],
        correctIndex: 1,
        explanation: "The rule suggests no more than 10 slides, 20 minutes presentation time, and 30+ point font size."
      },
      {
        id: "meet_q8",
        question: "When using SlidesGo templates, you should:",
        options: ["Use them as-is", "Customize colors and content", "Only change the title", "Add more animations"],
        correctIndex: 1,
        explanation: "Always customize templates by changing colors to match brand and replacing all placeholder content."
      },
      {
        id: "meet_q9",
        question: "Why should you use headphones on video calls?",
        options: ["They look professional", "To prevent audio echo", "Required by company policy", "Better sound quality only"],
        correctIndex: 1,
        explanation: "Headphones prevent audio echo and feedback, ensuring clear communication for all participants."
      },
      {
        id: "meet_q10",
        question: "What should presentation slides do?",
        options: ["Replace your speech entirely", "Contain your full script", "Support speech, not replace it", "Display only images"],
        correctIndex: 2,
        explanation: "Slides should support your speech with key points and visuals, not replace it with walls of text."
      }
    ]
  },
  {
    id: "documentation",
    title: "Documentation & Security",
    description: "Standards for file management, response times, and data security",
    icon: "FileText",
    sections: [
      {
        title: "Response Time Standards",
        content: [
          "In client service, response time directly impacts client satisfaction and trust. Set clear expectations and consistently meet them.",
          "The 2-hour rule: Acknowledge any client message within 2 hours during business hours. This doesn't mean solving the issue in 2 hours, just acknowledging receipt.",
          "If you need time to research or prepare a full response, send an immediate acknowledgment: 'Received, looking into this and will get back to you by [specific time].'",
          "For complex requests requiring more than a day, send daily progress updates even if it's just 'Still working on this, expect response by [date].'",
          "Use away messages, vacation responders, and calendar blocking to set expectations when unavailable."
        ],
        dos: [
          "Acknowledge messages within 2 hours during business hours",
          "Provide specific timeframes for full responses",
          "Send daily updates on ongoing issues",
          "Set calendar reminders for promised response times",
          "Use auto-responders when out of office"
        ],
        donts: [
          "Go radio silent for more than 2 hours on active projects",
          "Promise response times you can't meet",
          "Give vague responses like 'I'll get back to you soon'",
          "Ignore messages on weekends without setting expectations"
        ]
      },
      {
        title: "File Naming Conventions",
        content: [
          "Consistent file naming prevents confusion, saves time, and looks professional. Follow the pattern: ProjectName_FileType_Date",
          "ProjectName: Use client name or project code. No spaces (use underscores or hyphens).",
          "FileType: Be specific - 'Proposal', 'Contract', 'Design_V1', 'Report_Final', etc.",
          "Date: Use YYYYMMDD format (e.g., 20250115) so files sort chronologically.",
          "Version control: Add _V1, _V2, etc. for iterations. Final versions can be marked _Final.",
          "Examples: AcmeCorp_Contract_20250115_V2.pdf, ClientX_Design_Mockup_20250120_Final.png"
        ],
        dos: [
          "Use format: ProjectName_FileType_YYYYMMDD",
          "Replace spaces with underscores or hyphens",
          "Include version numbers for iterative files",
          "Use descriptive file types",
          "Maintain consistency across all project files"
        ],
        donts: [
          "Use vague names like 'final_final_v3_REAL_FINAL.pdf'",
          "Include spaces in filenames",
          "Use ambiguous dates like '1-15-25' (is it Jan 15 or 1st of May?)",
          "Skip version numbers on iterative documents",
          "Use special characters that cause system errors (@, #, %, etc.)"
        ]
      },
      {
        title: "Confidentiality & Data Protection",
        content: [
          "Client data is sacred. Treat every piece of client information as if it's the most sensitive data in the world.",
          "Never discuss client projects, data, or challenges in public spaces, on personal social media, or with people outside the project team.",
          "Use encryption for sensitive files. Most platforms (Google Drive, Dropbox) encrypt automatically, but verify settings.",
          "When sharing via email, avoid sending sensitive data in email body. Use secure attachments or links with expiration dates and password protection.",
          "Follow the 'need to know' principle: only share information with team members who actually need it for their role."
        ],
        dos: [
          "Treat all client information as confidential by default",
          "Use password protection for sensitive documents",
          "Enable link expiration on shared files (7-30 days typical)",
          "Verify recipient email addresses before sending sensitive data",
          "Use company-approved secure sharing platforms"
        ],
        donts: [
          "Share login credentials via unsecured channels",
          "Use personal email or storage for client work",
          "Leave confidential documents visible on screen in public",
          "Share client details in case studies without explicit written permission",
          "Store passwords in plain text files"
        ]
      },
      {
        title: "Password & Access Management",
        content: [
          "Secure credential management prevents data breaches and maintains client trust.",
          "Use a password manager (1Password, LastPass, Bitwarden) for all client credentials. Never store passwords in plain text, spreadsheets, or sticky notes.",
          "Create unique, complex passwords for each client system: minimum 12 characters with mix of uppercase, lowercase, numbers, and symbols.",
          "Enable two-factor authentication (2FA) wherever possible, especially for client accounts with financial or sensitive data access.",
          "When sharing credentials with team members, use password manager sharing features or secure, self-destructing links (like OneTimeSecret.com).",
          "Audit access regularly: remove team member access when they roll off projects, and update passwords after any team changes."
        ],
        dos: [
          "Use password manager for all credentials",
          "Create passwords with 12+ characters and mixed types",
          "Enable 2FA on all systems that support it",
          "Share credentials only via secure password manager or self-destructing links",
          "Update passwords when team members leave projects"
        ],
        donts: [
          "Share passwords via email, Slack, or WhatsApp",
          "Reuse passwords across different client systems",
          "Write passwords on paper or sticky notes",
          "Use simple passwords like 'ClientName2025'",
          "Keep access active for team members no longer on project"
        ]
      }
    ],
    quiz: [
      {
        id: "doc_q1",
        question: "What is the standard response time for acknowledging client messages?",
        options: ["1 hour", "2 hours", "4 hours", "Same day"],
        correctIndex: 1,
        explanation: "The 2-hour rule: acknowledge any client message within 2 hours during business hours to demonstrate responsiveness."
      },
      {
        id: "doc_q2",
        question: "What should you do if you need more time for a full response?",
        options: ["Wait until you have full answer", "Send acknowledgment with specific timeframe", "Ignore until ready", "Ask colleague to respond"],
        correctIndex: 1,
        explanation: "Send immediate acknowledgment stating you're working on it and provide a specific timeframe for full response."
      },
      {
        id: "doc_q3",
        question: "What is the correct file naming format?",
        options: ["filename_date", "ProjectName_FileType_YYYYMMDD", "ClientName_randomnumber", "anything works"],
        correctIndex: 1,
        explanation: "Use the format ProjectName_FileType_YYYYMMDD for consistent, professional file organization."
      },
      {
        id: "doc_q4",
        question: "How should dates be formatted in filenames?",
        options: ["MM/DD/YY", "DD-MM-YYYY", "YYYYMMDD", "Month Day, Year"],
        correctIndex: 2,
        explanation: "Use YYYYMMDD format (e.g., 20250115) so files sort chronologically and avoid date format confusion."
      },
      {
        id: "doc_q5",
        question: "What should you do with client information?",
        options: ["Share freely with colleagues", "Treat all as confidential by default", "Post anonymously online", "Discuss in public"],
        correctIndex: 1,
        explanation: "Treat every piece of client information as confidential by default, following the 'need to know' principle."
      },
      {
        id: "doc_q6",
        question: "How should sensitive documents be shared?",
        options: ["Email body text", "Password protected with expiration", "Public link", "Social media"],
        correctIndex: 1,
        explanation: "Use password protection and link expiration dates for sensitive documents to maintain security."
      },
      {
        id: "doc_q7",
        question: "What is the minimum password length recommended?",
        options: ["6 characters", "8 characters", "12 characters", "20 characters"],
        correctIndex: 2,
        explanation: "Passwords should be minimum 12 characters with a mix of uppercase, lowercase, numbers, and symbols."
      },
      {
        id: "doc_q8",
        question: "How should passwords be stored?",
        options: ["Sticky notes", "Excel spreadsheet", "Password manager", "Email draft"],
        correctIndex: 2,
        explanation: "Use a password manager (1Password, LastPass, Bitwarden) for all credentials - never plain text."
      },
      {
        id: "doc_q9",
        question: "When should you enable 2FA?",
        options: ["Never", "Only for banking", "Wherever possible, especially for sensitive data", "Only when required"],
        correctIndex: 2,
        explanation: "Enable two-factor authentication wherever possible, especially for client accounts with sensitive data."
      },
      {
        id: "doc_q10",
        question: "When should access be removed from team members?",
        options: ["Never", "When they leave the company", "When they roll off projects", "Annually"],
        correctIndex: 2,
        explanation: "Audit and remove access when team members roll off projects to maintain security and follow least privilege principle."
      }
    ]
  },
  {
    id: "strategy",
    title: "Client Strategy & Relations",
    description: "Building lasting client relationships and strategic growth opportunities",
    icon: "Users",
    sections: [
      {
        title: "Professional Networking on LinkedIn",
        content: [
          "LinkedIn is the primary platform for professional networking. Your profile and activity represent both you and the company.",
          "Connect with clients, partners, and industry professionals. Personalize connection requests: mention how you know them or what sparked your interest.",
          "Engage meaningfully: comment on posts, share relevant industry content, celebrate client wins (with their permission).",
          "Keep your profile current: professional photo, detailed experience, skills, and recommendations. Your profile is your digital business card.",
          "Share thought leadership: post about industry trends, lessons learned (without violating confidentiality), and insights that demonstrate expertise."
        ],
        dos: [
          "Send personalized connection requests",
          "Engage with client posts through likes and thoughtful comments",
          "Share industry news and insights regularly",
          "Keep profile photo professional and current",
          "Celebrate client achievements (with permission)"
        ],
        donts: [
          "Send generic 'I'd like to add you to my professional network' requests",
          "Ignore your LinkedIn for months then mass-post",
          "Share controversial political or social content on professional profile",
          "Use LinkedIn InMail for sales pitches to connections",
          "Post about client work without explicit permission"
        ]
      },
      {
        title: "Social Media Monitoring",
        content: [
          "Stay aware of client's public social media presence to identify opportunities, understand their brand voice, and spot potential issues.",
          "Check client's LinkedIn, Twitter, and Instagram twice daily: morning and afternoon. This takes 10-15 minutes but provides valuable context.",
          "Look for: announcements that might affect your work, brand messaging shifts, customer sentiment, competitive actions, crisis indicators.",
          "Engage appropriately: like company posts, share relevant content, comment professionally. This shows partnership beyond transactional relationship.",
          "Set up Google Alerts for client company names and key executives to catch news coverage."
        ],
        dos: [
          "Monitor client social media twice daily (morning and afternoon)",
          "Set up Google Alerts for client names",
          "Engage with client content genuinely and professionally",
          "Note trends or shifts in their messaging",
          "Share relevant opportunities or concerns with your team"
        ],
        donts: [
          "Only check social media when problems arise",
          "Engage with controversial client posts",
          "Share confidential knowledge in comments",
          "Obsessively monitor - balance awareness with productivity",
          "Use personal social accounts to monitor if it creates conflicts"
        ]
      },
      {
        title: "Upsell & Cross-Sell Etiquette",
        content: [
          "Growing accounts is good business, but must be done ethically and at the right moment. Forced selling damages relationships.",
          "Listen for organic opportunities: when clients mention new challenges, expanding teams, or upcoming projects, that's your opening.",
          "Present additional services as solutions to problems they've expressed, not random pitches. 'Given your team expansion, our training program might help' vs. 'Want to buy training?'",
          "Timing matters: don't pitch new services during crisis management or when they're unhappy with current deliverables. Fix first, expand later.",
          "Be transparent: if recommending additional services, be clear about costs and why it's genuinely beneficial, not just revenue opportunity."
        ],
        dos: [
          "Listen for organic needs the client expresses",
          "Frame additional services as solutions to their problems",
          "Choose timing carefully - not during crisis or dissatisfaction",
          "Be transparent about costs and value",
          "Offer case studies or examples of how services helped similar clients"
        ],
        donts: [
          "Pitch constantly regardless of client situation",
          "Suggest services that don't truly fit their needs",
          "Upsell during crisis or when current work is problematic",
          "Pressure clients to decide immediately",
          "Make recommendations solely to hit sales targets"
        ]
      },
      {
        title: "Gift Policies & Professional Boundaries",
        content: [
          "Client gifts can strengthen relationships or create ethical concerns. Navigate this carefully following company and client policies.",
          "Generally acceptable: modest thank-you gifts (under $50), items with company branding, celebrations of shared milestones.",
          "Always check both your company's and client's gift policies. Many organizations prohibit or limit gifts to prevent perceived conflicts of interest.",
          "Timing matters: gifts should celebrate achievements or holidays, not coincide with contract renewals or new business decisions.",
          "When in doubt, opt for experiences over objects: handwritten thank-you notes, public recognition of their team's work, or offering to share their success story (with permission).",
          "If a client offers you a substantial gift, politely decline or check company policy before accepting."
        ],
        dos: [
          "Check company and client gift policies before sending",
          "Keep gifts modest (typically under $50)",
          "Time gifts around holidays or project completions, not contract decisions",
          "Consider branded company items or donations to charities client supports",
          "Send handwritten thank-you notes as free, meaningful alternatives"
        ],
        donts: [
          "Send expensive gifts that could appear as bribes",
          "Give gifts right before contract renewals or new business pitches",
          "Assume all clients accept gifts - many organizations prohibit them",
          "Give personal gifts that are too intimate (clothing, jewelry, perfume)",
          "Accept substantial gifts from clients without checking company policy"
        ]
      }
    ],
    quiz: [
      {
        id: "strat_q1",
        question: "How should you send LinkedIn connection requests?",
        options: ["Use default message", "Personalize with context", "Send mass requests", "Don't send any"],
        correctIndex: 1,
        explanation: "Always personalize connection requests by mentioning how you know them or what sparked your interest."
      },
      {
        id: "strat_q2",
        question: "How often should you check client social media?",
        options: ["Weekly", "Once daily", "Twice daily (morning and afternoon)", "Only when problems arise"],
        correctIndex: 2,
        explanation: "Check client social media twice daily - morning and afternoon - to stay aware without being obsessive."
      },
      {
        id: "strat_q3",
        question: "When is the best time to pitch additional services?",
        options: ["During any meeting", "When they express relevant needs", "During crisis management", "Monthly regardless of situation"],
        correctIndex: 1,
        explanation: "Listen for organic opportunities when clients mention challenges that your additional services could solve."
      },
      {
        id: "strat_q4",
        question: "How should additional services be framed?",
        options: ["As revenue opportunities", "As solutions to their expressed problems", "As required add-ons", "As limited-time offers"],
        correctIndex: 1,
        explanation: "Frame additional services as solutions to problems the client has expressed, not random pitches."
      },
      {
        id: "strat_q5",
        question: "What is generally acceptable for client gifts?",
        options: ["Any amount", "Under $50 and following policies", "No gifts ever", "Only expensive gifts show appreciation"],
        correctIndex: 1,
        explanation: "Keep gifts modest (typically under $50) and always check both your company's and client's gift policies."
      },
      {
        id: "strat_q6",
        question: "When should you NOT send client gifts?",
        options: ["During holidays", "After project completion", "Right before contract renewals", "Never any time"],
        correctIndex: 2,
        explanation: "Avoid sending gifts right before contract renewals or new business decisions as it could appear as bribery."
      },
      {
        id: "strat_q7",
        question: "What should you do before accepting a substantial gift from a client?",
        options: ["Accept immediately", "Decline immediately", "Check company policy", "Share with team"],
        correctIndex: 2,
        explanation: "Check your company policy before accepting substantial gifts to ensure compliance with ethics guidelines."
      },
      {
        id: "strat_q8",
        question: "How should you engage with client social media content?",
        options: ["Never engage", "Like and comment professionally", "Only share, never comment", "Engage with everything"],
        correctIndex: 1,
        explanation: "Engage genuinely and professionally through likes and thoughtful comments to show partnership."
      },
      {
        id: "strat_q9",
        question: "When should you NOT upsell additional services?",
        options: ["During project kickoffs", "When current work is problematic", "After successful deliveries", "During planning phases"],
        correctIndex: 1,
        explanation: "Don't upsell during crisis or when clients are unhappy with current deliverables - fix first, expand later."
      },
      {
        id: "strat_q10",
        question: "What is a good alternative to physical client gifts?",
        options: ["Expensive dinners", "Handwritten thank-you notes", "Cash bonuses", "Personal items"],
        correctIndex: 1,
        explanation: "Handwritten thank-you notes are free, meaningful alternatives that strengthen relationships professionally."
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

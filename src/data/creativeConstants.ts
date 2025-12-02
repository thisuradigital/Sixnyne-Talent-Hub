import { Module } from "@/types";

export const CREATIVE_MODULES: Module[] = [
  {
    id: "creative-strategy",
    title: "Creative Strategy Fundamentals",
    description: "Develop strategic thinking for creative campaigns",
    icon: "Lightbulb",
    sections: [
      {
        title: "Strategic Thinking in Creative Work",
        content: [
          "Creative strategy bridges business objectives and creative execution. It's not just about making something beautiful - it's about making something that achieves specific goals.",
          "Great creative strategy starts with deep audience understanding. You need to know what motivates them, what they fear, what they aspire to, and how they make decisions.",
          "The strategic process: Research → Insights → Strategy → Creative Brief → Execution → Measurement. Each stage informs the next.",
          "Strategy should constrain creativity productively. Too much freedom paralyzes; the right constraints spark innovative solutions within meaningful boundaries."
        ],
        dos: [
          "Ground creative decisions in audience insights and business objectives",
          "Ask 'why' repeatedly until you understand the real challenge",
          "Use data and research to inform creative direction",
          "Test strategic hypotheses before full execution"
        ],
        donts: [
          "Skip research and rely solely on intuition or personal preferences",
          "Create strategy that's so vague it could apply to any brand",
          "Let creative execution drift from strategic foundation",
          "Ignore market and competitive context"
        ]
      },
      {
        title: "Positioning and Differentiation",
        content: [
          "Positioning defines how your brand occupies a distinct place in the market and in consumers' minds. It's the foundation of all creative strategy.",
          "Effective positioning is simple, memorable, defensible, and relevant. It should answer: What do you do? Who is it for? Why should they choose you?",
          "Differentiation is how you stand out from competitors. It's not about being different for the sake of it - it's about being different in ways that matter to your audience.",
          "Positioning frameworks: Feature-based (what you have), benefit-based (what you provide), use-case (when to use), or category (creating new categories)."
        ],
        dos: [
          "Identify your unique value proposition clearly",
          "Research competitors to find genuine differentiation opportunities",
          "Test positioning with target audiences to ensure it resonates",
          "Keep positioning statements simple and memorable"
        ],
        donts: [
          "Claim positioning that isn't believable or defensible",
          "Copy competitor positioning without differentiation",
          "Create positioning so complex it confuses audiences",
          "Change positioning frequently without strategic reason"
        ]
      },
      {
        title: "Insight Mining and Consumer Psychology",
        content: [
          "Insights are not observations - they're unexpected truths about human behavior that unlock creative opportunities. An observation: 'People drink coffee in the morning.' An insight: 'People use morning coffee rituals to transition from personal time to work mode.'",
          "Great insights reveal tensions, contradictions, or unmet needs. They make you think 'That's so true, why haven't I thought of it that way?'",
          "Sources of insights: Qualitative research (interviews, ethnography), quantitative data (surveys, analytics), social listening, competitive analysis, and cultural trends.",
          "Consumer psychology principles: Social proof (people follow others), scarcity (limited availability increases desire), reciprocity (people return favors), authority (experts influence decisions)."
        ],
        dos: [
          "Dig beneath surface behaviors to understand underlying motivations",
          "Look for patterns across different data sources",
          "Test whether insights are genuinely surprising or just obvious observations",
          "Apply psychological principles ethically and transparently"
        ],
        donts: [
          "Confuse observations with insights",
          "Manipulate psychological triggers unethically",
          "Ignore cultural context that shapes behavior",
          "Rely on stereotypes instead of real research"
        ]
      },
      {
        title: "Campaign Architecture and Big Ideas",
        content: [
          "Campaign architecture is the strategic framework that connects all creative touchpoints into a cohesive whole. It ensures consistency while allowing flexibility.",
          "The 'Big Idea' is the central creative concept that can be expressed across multiple channels and formats. It's bigger than any single execution.",
          "Good Big Ideas are simple, flexible, ownable, and strategically sound. They should work in any medium and inspire multiple executions.",
          "Campaign elements hierarchy: Big Idea → Key Messages → Channel Strategies → Individual Executions. Each level should ladde up to support the level above."
        ],
        dos: [
          "Develop Big Ideas that can scale across channels and time",
          "Create clear guidelines for how the idea adapts to different contexts",
          "Test whether the Big Idea can generate multiple unique executions",
          "Ensure all campaign elements connect back to core strategy"
        ],
        donts: [
          "Create campaign ideas that only work in one medium",
          "Let individual executions drift from the Big Idea",
          "Overcomplicate the central concept",
          "Copy trending campaign formats without strategic fit"
        ]
      },
      {
        title: "Creative Testing and Optimization",
        content: [
          "Creative testing validates strategic assumptions before full investment. Test concepts, messaging, and execution approaches early and often.",
          "Testing methods: A/B testing (comparing variations), multivariate testing (testing multiple elements), focus groups (qualitative feedback), and surveys (quantitative validation).",
          "What to test: Headlines, visuals, calls-to-action, value propositions, formats, and channels. Test one variable at a time for clear learnings.",
          "Optimization is continuous. Use performance data to refine creative. What's working? What's not? Why? Apply learnings to improve future campaigns."
        ],
        dos: [
          "Test strategic assumptions before committing to full production",
          "Define success metrics before launching tests",
          "Use adequate sample sizes for statistical significance",
          "Document learnings to inform future creative strategy"
        ],
        donts: [
          "Test too many variables simultaneously",
          "End tests too early before reaching significance",
          "Ignore test results that contradict your preferences",
          "Optimize for vanity metrics instead of business objectives"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the primary role of creative strategy?",
        options: [
          "To make creative work look beautiful",
          "To bridge business objectives and creative execution",
          "To copy successful competitor campaigns",
          "To limit creative freedom"
        ],
        correctAnswer: 1,
        explanation: "Creative strategy bridges business objectives and creative execution, ensuring creative work is both compelling and effective at achieving specific goals."
      },
      {
        question: "What makes a statement an 'insight' rather than an observation?",
        options: [
          "It's longer and more detailed",
          "It reveals unexpected truths about human behavior",
          "It includes statistics",
          "It's written in formal language"
        ],
        correctAnswer: 1,
        explanation: "Insights reveal unexpected truths about human behavior that unlock creative opportunities, going beyond surface observations to underlying motivations."
      },
      {
        question: "What should effective brand positioning answer?",
        options: [
          "Only what you do",
          "What you do, who it's for, and why they should choose you",
          "Just your price point",
          "Your company history"
        ],
        correctAnswer: 1,
        explanation: "Effective positioning answers: What do you do? Who is it for? Why should they choose you? It defines your distinct place in the market."
      },
      {
        question: "What is a 'Big Idea' in campaign architecture?",
        options: [
          "The campaign budget",
          "The central creative concept that works across channels",
          "The largest advertisement",
          "The first idea generated"
        ],
        correctAnswer: 1,
        explanation: "A Big Idea is the central creative concept that can be expressed across multiple channels and formats, inspiring multiple executions while maintaining coherence."
      },
      {
        question: "Which is a consumer psychology principle commonly used in creative strategy?",
        options: [
          "Ignore what competitors are doing",
          "Social proof - people follow others' behavior",
          "Always use bright colors",
          "Make everything free"
        ],
        correctAnswer: 1,
        explanation: "Social proof is a key consumer psychology principle where people are influenced by others' actions and choices, especially in uncertain situations."
      },
      {
        question: "What is the strategic process flow for creative work?",
        options: [
          "Execution → Measurement → Strategy",
          "Research → Insights → Strategy → Creative Brief → Execution → Measurement",
          "Creative Brief → Execution",
          "Measurement → Research → Execution"
        ],
        correctAnswer: 1,
        explanation: "The strategic process flows: Research → Insights → Strategy → Creative Brief → Execution → Measurement, with each stage informing the next."
      },
      {
        question: "Why should creative strategy constrain creativity?",
        options: [
          "To make creative work easier to reject",
          "To limit costs",
          "Productive constraints spark innovative solutions within meaningful boundaries",
          "To prevent any creativity"
        ],
        correctAnswer: 2,
        explanation: "Strategic constraints guide creativity productively. Too much freedom paralyzes; the right constraints spark innovative solutions within meaningful boundaries."
      },
      {
        question: "What should you test in creative optimization?",
        options: [
          "Everything simultaneously",
          "One variable at a time for clear learnings",
          "Nothing - trust your instincts",
          "Only after campaigns fail"
        ],
        correctAnswer: 1,
        explanation: "Test one variable at a time for clear learnings. Testing multiple variables simultaneously makes it impossible to know what drove results."
      },
      {
        question: "What makes positioning 'defensible'?",
        options: [
          "It's legally protected",
          "It's believable and backed by genuine differentiators",
          "It's expensive",
          "It uses complex language"
        ],
        correctAnswer: 1,
        explanation: "Defensible positioning is believable and backed by genuine differentiators that competitors can't easily copy or claim."
      },
      {
        question: "When should creative testing happen?",
        options: [
          "Only after campaign failure",
          "Early and often to validate assumptions before full investment",
          "Never - testing limits creativity",
          "Only for large campaigns"
        ],
        correctAnswer: 1,
        explanation: "Test early and often to validate strategic assumptions before full investment. This reduces risk and improves creative effectiveness."
      }
    ]
  },
  {
    id: "copywriting-mastery",
    title: "Copywriting Mastery",
    description: "Craft compelling copy that converts",
    icon: "PenTool",
    sections: [
      {
        title: "Copywriting Fundamentals",
        content: [
          "Copywriting is persuasive writing designed to drive specific actions. Unlike content writing (which informs or entertains), copy sells, convinces, and converts.",
          "The copywriting formula: Attention → Interest → Desire → Action (AIDA). Grab attention with headlines, build interest with benefits, create desire through emotion, and drive action with clear CTAs.",
          "Know your audience intimately. Write to one person, not 'everyone.' Use their language, understand their problems, and speak to their aspirations.",
          "Benefits over features: Don't tell them the drill has a 1/2-inch bit; tell them they'll have perfect 1/2-inch holes. People buy outcomes, not specifications."
        ],
        dos: [
          "Write conversationally as if speaking to a friend",
          "Lead with benefits and back up with features",
          "Use specific, concrete language over vague abstractions",
          "Include clear, action-oriented CTAs"
        ],
        donts: [
          "Use jargon or industry terminology your audience doesn't understand",
          "Write about yourself instead of addressing audience needs",
          "Bury the main message beneath cleverness",
          "Create CTAs that are vague or passive"
        ]
      },
      {
        title: "Headlines and Subject Lines",
        content: [
          "Headlines determine whether your copy gets read. Spend as much time on your headline as the rest of your copy - it's that important.",
          "Effective headline formulas: Numbers ('5 Ways to...'), How-to ('How to...'), Questions ('Are You...?'), News ('Introducing...'), Curiosity gaps ('The Secret to...').",
          "Subject lines for emails: Keep under 50 characters for mobile, create urgency without being spammy, personalize when possible, and test extensively.",
          "A/B test headlines. Small changes can dramatically impact performance. Test different angles, lengths, and emotional tones."
        ],
        dos: [
          "Make headlines specific and promise clear value",
          "Use numbers and data when available (e.g., '73% of Users...')",
          "Create curiosity without being clickbait",
          "Test multiple headline variations"
        ],
        donts: [
          "Write vague headlines that could apply to anything",
          "Use clickbait that doesn't deliver on the promise",
          "Make headlines so clever they're confusing",
          "Forget mobile optimization (first 30-40 characters matter most)"
        ]
      },
      {
        title: "Emotional Copywriting and Storytelling",
        content: [
          "People make decisions emotionally and justify them rationally. Effective copy taps into emotions first, then provides logical support.",
          "Core emotions in copywriting: Fear (of missing out, of loss), Desire (for gain, improvement), Trust (through social proof, credibility), and Belonging (being part of something).",
          "Storytelling structure: Setup (relatable situation) → Conflict (problem arises) → Resolution (your solution). Stories make messages memorable and relatable.",
          "Show, don't tell: Instead of 'our service is fast,' say 'get results in 48 hours.' Concrete details create vivid mental images and emotional responses."
        ],
        dos: [
          "Use customer stories and testimonials to trigger emotions",
          "Paint vivid pictures with sensory details",
          "Address fears and desires directly",
          "Balance emotional appeals with logical proof points"
        ],
        donts: [
          "Manipulate emotions unethically or dishonestly",
          "Tell instead of show",
          "Ignore the rational justification people need",
          "Use emotional triggers that don't align with brand"
        ]
      },
      {
        title: "Calls-to-Action and Conversion Copy",
        content: [
          "Your CTA tells people exactly what to do next. Make it crystal clear, compelling, and easy to act on.",
          "CTA best practices: Use action verbs (Get, Start, Join, Discover), create urgency (Limited time, Today only), reduce friction (Free, No credit card), emphasize value (Get Your Free Guide).",
          "Placement matters: Put CTAs where people are ready to act - after explaining benefits, addressing objections, and building desire.",
          "Test everything about CTAs: Wording, color, size, placement, button shape. Small changes can dramatically impact conversion rates."
        ],
        dos: [
          "Make CTAs specific and action-oriented",
          "Use first-person language ('Get My Free Trial' vs 'Get Your Free Trial')",
          "Repeat CTAs in long-form copy (after key benefits)",
          "Remove friction and risk ('Cancel anytime', 'No credit card required')"
        ],
        donts: [
          "Use passive language like 'Submit' or 'Click Here'",
          "Hide CTAs or make them hard to find",
          "Create too many competing CTAs on one page",
          "Forget to address objections before asking for action"
        ]
      },
      {
        title: "Editing and Refining Copy",
        content: [
          "First drafts are for getting ideas out. Editing is where good copy becomes great. Plan to rewrite extensively.",
          "Hemingway's principle: Write drunk, edit sober. (Metaphorically) - Write freely, then cut ruthlessly. Remove every unnecessary word.",
          "Read your copy aloud. If you stumble over phrases, your readers will too. Natural, conversational flow is crucial.",
          "The editing checklist: Is it clear? Is it concise? Is it compelling? Is it credible? Does it focus on benefits? Does it have a strong CTA?"
        ],
        dos: [
          "Cut words that don't add value (very, really, just, actually)",
          "Replace weak verbs with strong, specific ones",
          "Break long sentences into shorter ones",
          "Get feedback from someone in your target audience"
        ],
        donts: [
          "Submit first drafts without editing",
          "Fall in love with clever phrases that obscure meaning",
          "Ignore feedback because you like your version",
          "Edit only for grammar without considering persuasiveness"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the key difference between copywriting and content writing?",
        options: [
          "Length of text",
          "Copywriting is persuasive writing designed to drive action; content writing informs",
          "Copywriting uses more complex words",
          "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "Copywriting is persuasive writing designed to drive specific actions (sell, convince, convert), while content writing primarily informs or entertains."
      },
      {
        question: "What does the AIDA formula stand for?",
        options: [
          "Art, Ideas, Design, Action",
          "Attention, Interest, Desire, Action",
          "Always Innovate, Design, Adapt",
          "Audience, Intent, Direction, Advice"
        ],
        correctAnswer: 1,
        explanation: "AIDA stands for Attention → Interest → Desire → Action, a classic copywriting formula for persuasive writing that converts."
      },
      {
        question: "Why should copy focus on benefits over features?",
        options: [
          "Features are boring",
          "People buy outcomes and results, not specifications",
          "Benefits are shorter to write",
          "Features are too technical"
        ],
        correctAnswer: 1,
        explanation: "People buy outcomes, not specifications. They want to know what the product will do for them, not just what it has."
      },
      {
        question: "How much time should you spend on headlines?",
        options: [
          "Just a few minutes",
          "As much time as the rest of your copy - headlines are critical",
          "Headlines don't matter much",
          "Only for important projects"
        ],
        correctAnswer: 1,
        explanation: "Headlines determine whether your copy gets read at all, so spend as much time on headlines as the rest of your copy."
      },
      {
        question: "How long should email subject lines be optimized for mobile?",
        options: [
          "Under 20 characters",
          "Under 50 characters",
          "Under 100 characters",
          "Length doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "Keep subject lines under 50 characters for mobile optimization, as longer subject lines get cut off on mobile devices."
      },
      {
        question: "Why do people make purchase decisions emotionally?",
        options: [
          "People are irrational",
          "Emotional decisions come first, then rational justification follows",
          "Only emotional people do this",
          "This is a myth"
        ],
        correctAnswer: 1,
        explanation: "People make decisions emotionally and justify them rationally. Effective copy taps into emotions first, then provides logical support."
      },
      {
        question: "What makes a strong CTA (Call-to-Action)?",
        options: [
          "Passive language like 'Submit'",
          "Action verbs, urgency, reduced friction, and emphasized value",
          "Generic phrases like 'Click Here'",
          "Small, hidden buttons"
        ],
        correctAnswer: 1,
        explanation: "Strong CTAs use action verbs, create urgency, reduce friction, and emphasize value to drive specific user actions."
      },
      {
        question: "What is Hemingway's principle for editing?",
        options: [
          "Never edit your work",
          "Write freely, then cut ruthlessly - remove every unnecessary word",
          "Always use complex words",
          "Write in third person only"
        ],
        correctAnswer: 1,
        explanation: "Hemingway's principle: Write freely (get ideas out), then edit ruthlessly by cutting every unnecessary word for clear, powerful copy."
      },
      {
        question: "Why should you read your copy aloud?",
        options: [
          "It makes you look professional",
          "If you stumble over phrases, your readers will too",
          "It's a traditional requirement",
          "Only for presentations"
        ],
        correctAnswer: 1,
        explanation: "Reading copy aloud reveals awkward phrasing. If you stumble over phrases, your readers will too. Natural, conversational flow is crucial."
      },
      {
        question: "What should the storytelling structure in copy include?",
        options: [
          "Only happy endings",
          "Setup (relatable situation) → Conflict (problem) → Resolution (solution)",
          "As many characters as possible",
          "No structure needed"
        ],
        correctAnswer: 1,
        explanation: "Effective storytelling structure: Setup (relatable situation) → Conflict (problem arises) → Resolution (your solution). This makes messages memorable."
      }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation Excellence",
    description: "Produce engaging content across all platforms",
    icon: "Video",
    sections: [
      {
        title: "Content Strategy and Planning",
        content: [
          "Content strategy defines what content you'll create, for whom, why, and how you'll measure success. Without strategy, you're just creating noise.",
          "Content pillars are the 3-5 core themes your content addresses. They should align with business goals and audience interests. Example: Education, Inspiration, Product Updates, Community.",
          "Content calendar planning: Mix content types (educational, entertaining, promotional), plan for seasonal moments, batch content creation for efficiency.",
          "The 70-20-10 rule: 70% proven content that works, 20% experimental variations, 10% high-risk/high-reward ideas. Balance reliability with innovation."
        ],
        dos: [
          "Document content strategy with clear goals and metrics",
          "Define 3-5 content pillars that guide all content creation",
          "Plan content calendars at least one month ahead",
          "Audit existing content regularly for performance insights"
        ],
        donts: [
          "Create content without strategic purpose",
          "Focus solely on promotional content",
          "Copy competitors without adapting to your brand",
          "Ignore performance data when planning future content"
        ]
      },
      {
        title: "Visual Content Creation",
        content: [
          "Visual content (images, graphics, videos) gets higher engagement than text alone. 65% of people are visual learners, and visuals are processed 60,000x faster than text.",
          "Photo content guidelines: High resolution, good lighting, authentic (not overly staged), on-brand (consistent filters/style), and optimized for platform dimensions.",
          "Video content is king: Short-form video (TikTok, Reels, Shorts) drives discovery; long-form (YouTube, IGTV) builds deeper connections. Different purposes, both valuable.",
          "Design principles for social graphics: Clear hierarchy, legible text (large font sizes), high contrast, platform-appropriate dimensions, and consistent branding."
        ],
        dos: [
          "Create platform-specific versions of visual content (dimensions matter)",
          "Use authentic, diverse imagery that represents your audience",
          "Add captions to all video content (80% watch without sound)",
          "Maintain consistent visual style across all content"
        ],
        donts: [
          "Use low-resolution or poorly lit images",
          "Forget platform-specific requirements (vertical vs horizontal)",
          "Rely solely on stock photos without brand customization",
          "Create text-heavy graphics that are hard to read on mobile"
        ]
      },
      {
        title: "Written Content Excellence",
        content: [
          "Written content (blog posts, social captions, articles) should provide value: educate, entertain, inspire, or help your audience solve problems.",
          "Social media caption structure: Hook (first line grabs attention) → Value (main content) → CTA (clear next step). The first line determines if people read more.",
          "Blog post structure: Compelling headline → Introduction with hook → Subheadings for scanability → Conclusion with CTA. Most people scan, few read word-for-word.",
          "Voice and tone: Voice is your brand personality (consistent), tone adapts to context (sympathetic for complaints, excited for announcements, professional for formal content)."
        ],
        dos: [
          "Front-load important information (people skim)",
          "Use short paragraphs (2-3 sentences) for readability",
          "Include relevant keywords naturally for SEO",
          "Break up text with subheadings, bullets, and visuals"
        ],
        donts: [
          "Write walls of text without breaks",
          "Bury the main point several paragraphs in",
          "Use inconsistent voice across different content",
          "Forget mobile readability (most content is viewed on phones)"
        ]
      },
      {
        title: "User-Generated Content and Community",
        content: [
          "User-generated content (UGC) is content created by your customers or community. It's more trusted than brand content (79% say UGC influences purchase decisions).",
          "Encourage UGC with branded hashtags, contests, feature opportunities, and community challenges. Make it easy and rewarding for people to create and share.",
          "Always get permission before reposting user content. Credit creators prominently and engage with their posts (comments, shares, likes).",
          "Community management is content creation: Thoughtful responses to comments, engaging in conversations, and celebrating community members all create content and build loyalty."
        ],
        dos: [
          "Create branded hashtags and encourage their use",
          "Showcase and credit user-generated content regularly",
          "Respond authentically to comments and messages",
          "Build community by connecting members with each other"
        ],
        donts: [
          "Repost user content without permission or credit",
          "Ignore community interactions and engagement",
          "Only engage when people complain",
          "Delete negative feedback instead of addressing it constructively"
        ]
      },
      {
        title: "Content Performance and Optimization",
        content: [
          "Measure what matters: Vanity metrics (likes, followers) feel good but don't drive business. Focus on engagement rate, click-through rate, conversions, and retention.",
          "Platform analytics show what's working: Best posting times, top-performing content types, audience demographics, and engagement patterns.",
          "A/B test content variables: Thumbnails, headlines, post times, content formats, CTAs. Small changes can significantly impact performance.",
          "Document learnings: Create a 'what works' playbook based on performance data. Share insights across teams to improve all content creation."
        ],
        dos: [
          "Track performance metrics aligned with business goals",
          "Analyze top-performing content for common elements",
          "Test variables systematically to understand what drives results",
          "Apply learnings to continuously improve content"
        ],
        donts: [
          "Optimize for vanity metrics that don't drive business value",
          "Post content and never analyze performance",
          "Change too many variables at once (can't identify what worked)",
          "Ignore platform-specific analytics and insights"
        ]
      }
    ],
    quiz: [
      {
        question: "What are content pillars?",
        options: [
          "Physical supports for content",
          "The 3-5 core themes your content addresses",
          "Types of social media platforms",
          "Content publishing schedules"
        ],
        correctAnswer: 1,
        explanation: "Content pillars are the 3-5 core themes your content addresses, aligned with business goals and audience interests, that guide all content creation."
      },
      {
        question: "What is the 70-20-10 rule in content strategy?",
        options: [
          "70% video, 20% images, 10% text",
          "70% proven content, 20% experimental, 10% high-risk/high-reward",
          "Posting times throughout the day",
          "Budget allocation"
        ],
        correctAnswer: 1,
        explanation: "The 70-20-10 rule: 70% proven content that works, 20% experimental variations, 10% high-risk/high-reward ideas, balancing reliability with innovation."
      },
      {
        question: "How much faster are visuals processed compared to text?",
        options: [
          "10x faster",
          "100x faster",
          "1,000x faster",
          "60,000x faster"
        ],
        correctAnswer: 3,
        explanation: "Visuals are processed 60,000x faster than text, which is why visual content consistently gets higher engagement than text alone."
      },
      {
        question: "Why should all videos include captions?",
        options: [
          "They look more professional",
          "80% of people watch videos without sound",
          "It's legally required",
          "They make videos longer"
        ],
        correctAnswer: 1,
        explanation: "80% of people watch videos without sound (especially on social media), so captions are essential for comprehension and accessibility."
      },
      {
        question: "What is the ideal social media caption structure?",
        options: [
          "Hook → Value → CTA",
          "CTA → Hook → Value",
          "Only emojis",
          "As long as possible"
        ],
        correctAnswer: 0,
        explanation: "Effective caption structure: Hook (first line grabs attention) → Value (main content) → CTA (clear next step). The hook determines if people read more."
      },
      {
        question: "What percentage of people say UGC influences purchase decisions?",
        options: [
          "25%",
          "50%",
          "79%",
          "90%"
        ],
        correctAnswer: 2,
        explanation: "79% of people say user-generated content influences their purchase decisions, making UGC more trusted than brand-created content."
      },
      {
        question: "What's the difference between brand voice and tone?",
        options: [
          "There is no difference",
          "Voice is consistent personality; tone adapts to context",
          "Voice is louder than tone",
          "Tone is only for formal content"
        ],
        correctAnswer: 1,
        explanation: "Voice is your brand personality (consistent across content), while tone adapts to context (sympathetic for complaints, excited for announcements, etc.)."
      },
      {
        question: "Why should you focus on engagement rate over follower count?",
        options: [
          "Followers are easier to count",
          "Engagement rate measures actual interaction and connection, not just vanity metrics",
          "Follower count is always fake",
          "Engagement doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "Engagement rate measures actual interaction and connection with your content, while follower count is a vanity metric that doesn't necessarily drive business value."
      },
      {
        question: "What should you do before reposting user-generated content?",
        options: [
          "Nothing - it's public content",
          "Get permission and credit the creator",
          "Remove the creator's name",
          "Only repost if it has many likes"
        ],
        correctAnswer: 1,
        explanation: "Always get permission before reposting user content and credit creators prominently. This respects creators and encourages more UGC."
      },
      {
        question: "How should blog posts be structured for readability?",
        options: [
          "One long paragraph",
          "Headline → Hook → Subheadings for scanability → Conclusion with CTA",
          "Just a headline and conclusion",
          "No structure needed"
        ],
        correctAnswer: 1,
        explanation: "Effective blog structure: Compelling headline → Introduction with hook → Subheadings for scanability → Conclusion with CTA, since most people scan content."
      }
    ]
  },
  {
    id: "social-media-creative",
    title: "Social Media Creative",
    description: "Master platform-specific creative best practices",
    icon: "Share2",
    sections: [
      {
        title: "Platform-Specific Creative Strategies",
        content: [
          "Each social platform has unique culture, format requirements, and audience expectations. What works on LinkedIn fails on TikTok and vice versa.",
          "Instagram: Visual storytelling, aspirational content, polished aesthetics. Optimal: Carousels (highest engagement), Reels (discovery), Stories (authenticity).",
          "TikTok: Authentic, entertaining, trend-driven. Raw, unpolished content often outperforms professional production. Hook viewers in first 3 seconds or they scroll.",
          "LinkedIn: Professional insights, thought leadership, industry news. Educational content and personal professional stories perform best."
        ],
        dos: [
          "Create platform-native content that fits each platform's culture",
          "Adapt content dimensions and formats for each platform",
          "Study top performers on each platform to understand norms",
          "Test different content approaches per platform"
        ],
        donts: [
          "Post identical content across all platforms",
          "Ignore platform-specific features (Stories, Reels, Carousels)",
          "Use wrong aspect ratios (vertical content on horizontal platforms)",
          "Bring one platform's culture to another (LinkedIn tone on TikTok)"
        ]
      },
      {
        title: "Short-Form Video Mastery",
        content: [
          "Short-form video (TikTok, Reels, Shorts) is the highest-reach content format. The algorithm favors video, especially from smaller accounts.",
          "Hook formula: First 3 seconds must stop the scroll. Use pattern interrupts (unexpected visuals, bold statements, questions) to grab attention.",
          "Video structure: Hook (0-3 sec) → Value/Entertainment (3-20 sec) → Payoff/CTA (final 5 sec). Keep total length 15-30 seconds for maximum retention.",
          "Editing techniques: Jump cuts (maintain energy), text overlays (emphasize key points), trending audio (algorithmic boost), captions (accessibility and no-sound viewing)."
        ],
        dos: [
          "Hook viewers within first 3 seconds",
          "Use trending audio strategically (with original spin)",
          "Add text overlays for emphasis and accessibility",
          "Keep videos concise (15-30 seconds ideal for Reels/Shorts)"
        ],
        donts: [
          "Start with slow intros or brand logos",
          "Create horizontal videos for vertical platforms",
          "Ignore trending formats and challenges",
          "Make videos too long (retention drops after 30 seconds)"
        ]
      },
      {
        title: "Social Graphics and Carousel Design",
        content: [
          "Social graphics must work on small screens. Test every graphic on your phone before posting - if text isn't readable, redesign.",
          "Carousel posts (multi-image swipes) get 1.4x more engagement than single images. Use them for tutorials, listicles, storytelling, and before/after reveals.",
          "Carousel design principles: Strong cover slide (stops scroll), consistent design across slides, one idea per slide, strong finish with CTA or summary.",
          "Typography for social: Minimum 24-30pt font size, high contrast (dark text on light background or inverse), sans-serif fonts for readability, limited text per graphic."
        ],
        dos: [
          "Design for mobile viewing first (80%+ of social is mobile)",
          "Create carousel posts for educational and storytelling content",
          "Use consistent branding (colors, fonts, style) across all graphics",
          "Test graphics on actual mobile devices before posting"
        ],
        donts: [
          "Use small fonts that are unreadable on mobile",
          "Overcrowd graphics with too much text",
          "Create carousels without a compelling first slide",
          "Ignore platform-specific safe zones (Instagram crops corners)"
        ]
      },
      {
        title: "Trending Content and Viral Mechanics",
        content: [
          "Trends come and go quickly on social media. Jump on relevant trends early (first 48 hours) for maximum reach, but only if it fits your brand.",
          "Viral content characteristics: Emotional (joy, surprise, inspiration), relatable (shared experiences), valuable (teaches something), or entertaining (makes people laugh).",
          "The algorithm rewards early engagement. Post when your audience is most active, and encourage engagement immediately (questions, controversial opinions, calls to comment).",
          "Not all viral content is good for business. Evaluate: Does this align with brand? Will it attract your target audience? Can you follow up with value?"
        ],
        dos: [
          "Monitor trends and jump on relevant ones quickly",
          "Add your unique brand perspective to trending formats",
          "Post during peak audience activity times",
          "Create content that naturally encourages engagement (questions, polls)"
        ],
        donts: [
          "Chase every trend regardless of relevance",
          "Copy trending content without adding unique value",
          "Post controversial content just for engagement",
          "Ignore that going viral doesn't always equal business success"
        ]
      },
      {
        title: "Community Management and Engagement",
        content: [
          "Social media is social - it's about conversations, not broadcasts. Brands that engage with their community see higher loyalty and better algorithmic reach.",
          "Response strategy: Reply to comments (especially in first hour), like responses, ask follow-up questions, and show personality. Engagement signals quality to algorithms.",
          "Handle criticism professionally: Acknowledge the issue, apologize if appropriate, move detailed resolution to DMs, follow up publicly when resolved. Transparency builds trust.",
          "Engage beyond your own posts: Comment on others' content, share user content (with credit), participate in conversations. Give value before asking for attention."
        ],
        dos: [
          "Respond to comments within first hour of posting",
          "Show authentic personality in responses (not robotic)",
          "Address negative feedback professionally and publicly",
          "Engage with community content beyond your own posts"
        ],
        donts: [
          "Leave comments unanswered (signals low-quality to algorithm)",
          "Use generic responses ('Thanks for sharing!')",
          "Delete negative comments (unless they violate policies)",
          "Only engage on your own content (appears self-centered)"
        ]
      }
    ],
    quiz: [
      {
        question: "Why should content differ across social media platforms?",
        options: [
          "To save time",
          "Each platform has unique culture, formats, and audience expectations",
          "It's not necessary to differ",
          "To confuse followers"
        ],
        correctAnswer: 1,
        explanation: "Each platform has unique culture, format requirements, and audience expectations. What works on LinkedIn fails on TikTok and vice versa."
      },
      {
        question: "How long should you hook viewers in short-form video?",
        options: [
          "Within first 10 seconds",
          "Within first 3 seconds",
          "Within first 30 seconds",
          "Hook doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "You must hook viewers within the first 3 seconds of short-form video or they will scroll. Use pattern interrupts to stop the scroll."
      },
      {
        question: "What is the ideal length for Reels and Shorts?",
        options: [
          "5-10 seconds",
          "15-30 seconds",
          "1-2 minutes",
          "As long as possible"
        ],
        correctAnswer: 1,
        explanation: "Keep Reels and Shorts concise at 15-30 seconds for maximum retention. Viewer retention drops significantly after 30 seconds."
      },
      {
        question: "How much more engagement do carousel posts get compared to single images?",
        options: [
          "No difference",
          "1.4x more engagement",
          "2x more engagement",
          "Less engagement"
        ],
        correctAnswer: 1,
        explanation: "Carousel posts get 1.4x more engagement than single images, making them valuable for tutorials, listicles, storytelling, and before/after content."
      },
      {
        question: "What is the minimum font size for social media graphics?",
        options: [
          "12pt",
          "18pt",
          "24-30pt",
          "Font size doesn't matter"
        ],
        correctAnswer: 2,
        explanation: "Use minimum 24-30pt font size for social graphics to ensure readability on mobile devices where 80%+ of social content is viewed."
      },
      {
        question: "When should you jump on trending content?",
        options: [
          "Anytime",
          "Within first 48 hours, if relevant to your brand",
          "Never - trends are bad",
          "Only after trends are proven"
        ],
        correctAnswer: 1,
        explanation: "Jump on relevant trends within the first 48 hours for maximum reach, but only if it fits your brand and attracts your target audience."
      },
      {
        question: "What do viral content characteristics include?",
        options: [
          "Only expensive production",
          "Emotional, relatable, valuable, or entertaining",
          "Always controversial",
          "Long-form only"
        ],
        correctAnswer: 1,
        explanation: "Viral content is typically emotional (joy, surprise), relatable (shared experiences), valuable (teaches something), or entertaining (makes people laugh)."
      },
      {
        question: "Why is responding to comments important?",
        options: [
          "It's polite",
          "Engagement signals quality to algorithms and builds community",
          "It's required by law",
          "It doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "Responding to comments signals content quality to algorithms (improving reach) and builds community loyalty through authentic engagement."
      },
      {
        question: "How should brands handle negative feedback on social media?",
        options: [
          "Delete it immediately",
          "Ignore it completely",
          "Acknowledge, apologize if appropriate, move resolution to DMs, follow up publicly",
          "Argue with the customer"
        ],
        correctAnswer: 2,
        explanation: "Handle criticism professionally: Acknowledge the issue, apologize if appropriate, move detailed resolution to DMs, follow up publicly when resolved."
      },
      {
        question: "What percentage of social media content is viewed on mobile?",
        options: [
          "30%",
          "50%",
          "80%+",
          "100%"
        ],
        correctAnswer: 2,
        explanation: "80%+ of social media content is viewed on mobile devices, which is why all graphics and content must be optimized for mobile viewing first."
      }
    ]
  },
  {
    id: "campaign-development",
    title: "Campaign Development",
    description: "Build integrated campaigns that deliver results",
    icon: "Target",
    sections: [
      {
        title: "Campaign Strategy and Objectives",
        content: [
          "Integrated campaigns coordinate messaging across multiple channels to create a unified brand experience. Each touchpoint reinforces the others.",
          "SMART campaign objectives: Specific (clear goal), Measurable (trackable metrics), Achievable (realistic), Relevant (ties to business goals), Time-bound (deadline).",
          "Campaign hierarchy: Business Objective → Marketing Objective → Campaign Strategy → Channel Tactics → Individual Executions. Each level supports the one above.",
          "Choose channels based on where your audience is and how they prefer to consume content, not where you're comfortable or what's trendy."
        ],
        dos: [
          "Define clear, measurable objectives before creative development",
          "Select channels based on audience behavior data",
          "Ensure all campaign elements work together toward common goals",
          "Establish KPIs and measurement framework upfront"
        ],
        donts: [
          "Launch campaigns without clear success metrics",
          "Choose channels based on personal preference instead of data",
          "Create disconnected tactics that don't support overall strategy",
          "Change objectives mid-campaign without adjusting tactics"
        ]
      },
      {
        title: "Multi-Channel Campaign Planning",
        content: [
          "Channel mix should cover the customer journey: Awareness (social media, display ads) → Consideration (content, email) → Conversion (retargeting, landing pages) → Loyalty (email, community).",
          "Budget allocation: Use the 70-20-10 rule (70% proven channels, 20% growing channels, 10% experimental) or weight by channel ROI from past campaigns.",
          "Timing and sequencing: Launch with awareness channels, layer in consideration tactics as awareness builds, activate conversion channels when intent is high.",
          "Cross-channel consistency: Same core message with channel-specific adaptations. The Big Idea should be recognizable across all touchpoints."
        ],
        dos: [
          "Map channels to customer journey stages",
          "Stagger channel launches strategically (not all at once)",
          "Adapt creative for each channel while maintaining consistency",
          "Track customer paths across channels (multi-touch attribution)"
        ],
        donts: [
          "Launch all channels simultaneously without sequence strategy",
          "Create completely different messages for each channel",
          "Ignore how channels influence each other",
          "Spread budget too thin across too many channels"
        ]
      },
      {
        title: "Campaign Creative Development",
        content: [
          "Start with the creative brief (objectives, audience, key message, mandatories). All creative decisions should trace back to the brief.",
          "Develop the Big Idea first, then adapt it across channels. The Big Idea should be simple enough to express in one sentence but rich enough to generate multiple executions.",
          "Create a creative toolkit: Templates, guidelines, asset libraries that enable consistent execution at scale across teams and channels.",
          "Messaging hierarchy: Primary message (the one thing), secondary messages (supporting points), proof points (data, testimonials). Not everything has equal weight."
        ],
        dos: [
          "Develop mood boards and creative territories before final production",
          "Test concepts with target audience before full production",
          "Create comprehensive asset packages (multiple sizes, formats)",
          "Document creative rationale for stakeholder alignment"
        ],
        donts: [
          "Jump straight to execution without concept development",
          "Create channel-specific creative without an overarching idea",
          "Forget to produce assets in all necessary sizes and formats",
          "Let multiple stakeholders art-direct without clear decision-maker"
        ]
      },
      {
        title: "Campaign Launch and Management",
        content: [
          "Pre-launch checklist: Assets approved, tracking implemented, budgets allocated, teams briefed, backup plans ready. More campaigns fail from poor execution than poor strategy.",
          "Launch phases: Soft launch (test and optimize) → Full launch (scale what works) → Always-on (sustain momentum). Don't go all-in without testing.",
          "Real-time monitoring: Track performance daily in early days, identify issues quickly, make tactical adjustments while strategy stays constant.",
          "Campaign management tools: Project management platforms (Asana, Monday), approval workflows, asset management (DAM systems), analytics dashboards."
        ],
        dos: [
          "Test campaigns in soft launch before full spend",
          "Monitor performance closely in first 48-72 hours",
          "Have contingency plans for underperformance",
          "Document all decisions and changes for post-campaign analysis"
        ],
        donts: [
          "Launch campaigns on Fridays (hard to monitor over weekends)",
          "Set-and-forget campaigns without ongoing monitoring",
          "Make major strategy changes based on first day performance",
          "Launch without clear ownership and escalation paths"
        ]
      },
      {
        title: "Campaign Measurement and Optimization",
        content: [
          "Measure throughout the campaign, not just at the end. Early signals indicate if you're on track or need to adjust.",
          "Metrics framework: Input metrics (impressions, reach), engagement metrics (clicks, time spent), outcome metrics (conversions, revenue). Focus on outcomes.",
          "Attribution challenges: Most conversions involve multiple touchpoints. Use first-touch (awareness credit), last-touch (conversion credit), or multi-touch (distributed credit) based on goals.",
          "Post-campaign analysis: What worked? What didn't? Why? What would we do differently? Document learnings in a campaign playbook for future reference."
        ],
        dos: [
          "Set up tracking and attribution before launch",
          "Create real-time dashboards for key metrics",
          "Run post-campaign analysis to document learnings",
          "Share insights across teams to improve future campaigns"
        ],
        donts: [
          "Wait until campaign ends to analyze performance",
          "Focus only on vanity metrics (impressions, likes)",
          "Ignore attribution complexity (give credit to last click only)",
          "Move to next campaign without documenting learnings"
        ]
      }
    ],
    quiz: [
      {
        question: "What makes a campaign 'integrated'?",
        options: [
          "It uses multiple channels",
          "It coordinates messaging across channels to create a unified experience",
          "It's expensive",
          "It lasts more than a month"
        ],
        correctAnswer: 1,
        explanation: "Integrated campaigns coordinate messaging across multiple channels to create a unified brand experience where each touchpoint reinforces the others."
      },
      {
        question: "What does SMART stand for in campaign objectives?",
        options: [
          "Social Media And Real Tracking",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Simple Metrics And Results Tracking",
          "Strategic Marketing Action Response Tactics"
        ],
        correctAnswer: 1,
        explanation: "SMART objectives are Specific, Measurable, Achievable, Relevant, and Time-bound, ensuring campaign goals are clear and trackable."
      },
      {
        question: "How should campaign budget be allocated using the 70-20-10 rule?",
        options: [
          "70% social, 20% email, 10% ads",
          "70% proven channels, 20% growing channels, 10% experimental",
          "70% creative, 20% media, 10% analytics",
          "70% first week, 20% second week, 10% third week"
        ],
        correctAnswer: 1,
        explanation: "Budget allocation 70-20-10 rule: 70% to proven channels, 20% to growing channels, 10% to experimental, balancing reliability with innovation."
      },
      {
        question: "What is the proper campaign hierarchy?",
        options: [
          "Individual Executions → Channel Tactics → Campaign Strategy",
          "Business Objective → Marketing Objective → Campaign Strategy → Channel Tactics → Executions",
          "Channel Tactics → Business Objective → Executions",
          "Campaign Strategy → Business Objective → Marketing Objective"
        ],
        correctAnswer: 1,
        explanation: "Campaign hierarchy: Business Objective → Marketing Objective → Campaign Strategy → Channel Tactics → Individual Executions, with each level supporting the one above."
      },
      {
        question: "When should channels be launched in a campaign?",
        options: [
          "All at once",
          "Strategically sequenced (awareness, then consideration, then conversion)",
          "Randomly",
          "Only one channel at a time"
        ],
        correctAnswer: 1,
        explanation: "Channels should be strategically sequenced: Launch awareness channels first, layer in consideration tactics, then activate conversion channels when intent is high."
      },
      {
        question: "What should be developed before channel-specific creative?",
        options: [
          "The budget",
          "The Big Idea that can be adapted across all channels",
          "Social media posts",
          "The launch date"
        ],
        correctAnswer: 1,
        explanation: "Develop the Big Idea first, then adapt it across channels. This ensures consistency while allowing channel-specific optimization."
      },
      {
        question: "What should you do before fully launching a campaign?",
        options: [
          "Announce it publicly",
          "Soft launch to test and optimize before scaling",
          "Spend entire budget immediately",
          "Wait and see what happens"
        ],
        correctAnswer: 1,
        explanation: "Use soft launch to test and optimize before full spend. Don't go all-in without testing what works."
      },
      {
        question: "Which metrics should campaigns ultimately focus on?",
        options: [
          "Input metrics (impressions, reach)",
          "Engagement metrics (clicks, likes)",
          "Outcome metrics (conversions, revenue)",
          "Follower count"
        ],
        correctAnswer: 2,
        explanation: "Focus on outcome metrics (conversions, revenue) rather than vanity metrics. These tie directly to business objectives."
      },
      {
        question: "When should campaign performance be measured?",
        options: [
          "Only at the end",
          "Throughout the campaign, not just at the end",
          "Never",
          "Only if it's failing"
        ],
        correctAnswer: 1,
        explanation: "Measure throughout the campaign, not just at the end. Early signals indicate if you're on track or need to adjust."
      },
      {
        question: "What should happen after campaign completion?",
        options: [
          "Move immediately to next campaign",
          "Post-campaign analysis to document learnings and improve future campaigns",
          "Delete all campaign files",
          "Nothing"
        ],
        correctAnswer: 1,
        explanation: "Conduct post-campaign analysis: What worked? What didn't? Why? Document learnings in a campaign playbook for future reference."
      }
    ]
  }
];

import { Module } from "@/types";

export const DESIGN_MODULES: Module[] = [
  {
    id: "design-fundamentals",
    title: "Design Fundamentals",
    description: "Master the core principles of effective design",
    icon: "Palette",
    sections: [
      {
        title: "Visual Hierarchy and Information Architecture",
        content: [
          "Visual hierarchy is the arrangement of elements to show their order of importance. It guides the viewer's eye through content in a deliberate sequence.",
          "Use size, color, contrast, and positioning to establish clear hierarchy. The most important elements should be the most prominent.",
          "Information architecture organizes content logically so users can find what they need quickly. Group related items and create clear navigation paths.",
          "Consider F-pattern and Z-pattern reading behaviors when designing layouts. Place critical information where eyes naturally focus first."
        ],
        dos: [
          "Make headlines significantly larger than body text (at least 2-3x)",
          "Use consistent spacing to group related elements together",
          "Create clear focal points using contrast and whitespace",
          "Test your hierarchy by asking: What catches your eye first, second, third?"
        ],
        donts: [
          "Make all elements the same size and weight",
          "Use too many different font sizes (stick to 3-4 max)",
          "Overcrowd designs without breathing room",
          "Place important information in corners or edges"
        ]
      },
      {
        title: "Color Theory and Application",
        content: [
          "Color is one of the most powerful tools in design. It evokes emotions, establishes brand identity, and guides user behavior.",
          "The 60-30-10 rule: Use 60% dominant color, 30% secondary color, and 10% accent color for balanced color schemes.",
          "Understand color psychology: Blue conveys trust and professionalism, red creates urgency, green suggests growth and health, yellow grabs attention.",
          "Always consider accessibility. Ensure sufficient contrast between text and backgrounds (WCAG AA standard: 4.5:1 for normal text, 3:1 for large text)."
        ],
        dos: [
          "Use color to create visual hierarchy and emphasis",
          "Test color combinations for accessibility with tools like WebAIM",
          "Create a defined color palette with primary, secondary, and accent colors",
          "Consider cultural meanings of colors for international audiences"
        ],
        donts: [
          "Use more than 3-4 main colors in a single design",
          "Rely solely on color to convey information (consider colorblind users)",
          "Use bright, saturated colors for large areas or backgrounds",
          "Mix warm and cool colors randomly without purpose"
        ]
      },
      {
        title: "Typography Fundamentals",
        content: [
          "Typography is the art of arranging type to make written language legible, readable, and visually appealing. It's often the most important design decision.",
          "Choose fonts that match your message: Serif fonts (Times, Georgia) convey tradition and formality; Sans-serif fonts (Helvetica, Arial) suggest modernity and clarity.",
          "Line height (leading) should be 1.4-1.6x the font size for body text. Line length should be 45-75 characters for optimal readability.",
          "Font pairing: Combine contrasting fonts (e.g., serif headline with sans-serif body) but limit yourself to 2-3 fonts maximum per design."
        ],
        dos: [
          "Use responsive type scales (16px minimum for body text on web)",
          "Maintain consistent spacing between letters and lines",
          "Create clear typographic hierarchy with size, weight, and spacing",
          "Test readability on different devices and screen sizes"
        ],
        donts: [
          "Use decorative fonts for body text or long passages",
          "Set text in all caps for more than a few words",
          "Use too many different fonts (causes visual confusion)",
          "Ignore line length - overly long lines are hard to read"
        ]
      },
      {
        title: "Whitespace and Composition",
        content: [
          "Whitespace (negative space) is the empty space around design elements. It's not wasted space - it's a crucial design tool that improves comprehension and focus.",
          "Active whitespace is deliberately added to enhance structure and emphasis. Passive whitespace is the natural space between lines of text and margins.",
          "The Rule of Thirds: Divide your canvas into a 3x3 grid and place important elements along these lines or at their intersections for balanced composition.",
          "Balance doesn't always mean symmetry. Asymmetrical designs can be balanced through careful consideration of visual weight and spacing."
        ],
        dos: [
          "Give important elements breathing room to increase their impact",
          "Use margins and padding consistently throughout your design",
          "Create visual rest areas to prevent cognitive overload",
          "Use whitespace to separate distinct content sections"
        ],
        donts: [
          "Fill every available space just because it's empty",
          "Use inconsistent spacing between similar elements",
          "Crowd too many elements into a small area",
          "Ignore the edges - inadequate margins make designs feel cramped"
        ]
      },
      {
        title: "Grid Systems and Alignment",
        content: [
          "Grid systems provide structure and consistency to designs. They create invisible guidelines that organize content and maintain harmony across pages.",
          "Common grid types: Single column (mobile), multi-column (desktop), modular grids (complex layouts), and baseline grids (typography alignment).",
          "Alignment creates order and connection between elements. Everything should align to something - either other elements or grid lines.",
          "The 8-point grid system (using multiples of 8px for all spacing and sizing) creates mathematical harmony and makes responsive design easier."
        ],
        dos: [
          "Establish a consistent grid system before starting design",
          "Align elements to grid lines and to each other",
          "Use consistent spacing multiples (4px, 8px, 16px, 24px, etc.)",
          "Break the grid intentionally for emphasis, not accidentally"
        ],
        donts: [
          "Place elements randomly without considering alignment",
          "Use arbitrary spacing values (e.g., 13px, 27px)",
          "Create different grid systems on every page",
          "Ignore mobile grid considerations in responsive designs"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the 60-30-10 rule in color theory?",
        options: [
          "60% dominant color, 30% secondary color, 10% accent color",
          "60% brightness, 30% saturation, 10% hue",
          "60% images, 30% text, 10% whitespace",
          "60% warm colors, 30% cool colors, 10% neutrals"
        ],
        correctAnswer: 0,
        explanation: "The 60-30-10 rule is a classic color scheme guideline: use 60% of a dominant color, 30% of a secondary color, and 10% of an accent color for balanced color distribution."
      },
      {
        question: "What is the minimum contrast ratio recommended by WCAG AA standards for normal text?",
        options: [
          "2:1",
          "3:1",
          "4.5:1",
          "7:1"
        ],
        correctAnswer: 2,
        explanation: "WCAG AA standards require a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text to ensure accessibility for users with visual impairments."
      },
      {
        question: "What is the optimal line length for readable body text?",
        options: [
          "20-35 characters",
          "45-75 characters",
          "80-100 characters",
          "100-120 characters"
        ],
        correctAnswer: 1,
        explanation: "The optimal line length for body text is 45-75 characters (including spaces). Lines that are too long or too short make reading difficult and tiring."
      },
      {
        question: "Which statement about whitespace is TRUE?",
        options: [
          "Whitespace is wasted space that should be filled",
          "Whitespace is only important in minimalist designs",
          "Whitespace improves comprehension and reduces cognitive load",
          "Whitespace should be avoided in professional designs"
        ],
        correctAnswer: 2,
        explanation: "Whitespace is a crucial design tool that improves comprehension, reduces cognitive load, and increases focus on important elements. It's not wasted space."
      },
      {
        question: "What is the purpose of visual hierarchy in design?",
        options: [
          "To make designs look more complex and professional",
          "To guide viewers through content in order of importance",
          "To use as many font sizes as possible",
          "To ensure all elements receive equal attention"
        ],
        correctAnswer: 1,
        explanation: "Visual hierarchy guides viewers through content in a deliberate sequence based on importance, using size, color, contrast, and positioning to establish order."
      },
      {
        question: "What is the Rule of Thirds in composition?",
        options: [
          "Use exactly three colors in every design",
          "Divide canvas into 3x3 grid and place important elements at intersections",
          "Make designs three times larger than needed",
          "Use three different fonts in every layout"
        ],
        correctAnswer: 1,
        explanation: "The Rule of Thirds divides your canvas into a 3x3 grid. Placing important elements along these lines or at their intersections creates balanced, visually appealing compositions."
      },
      {
        question: "What is the recommended line height for body text?",
        options: [
          "Equal to font size (1x)",
          "1.1-1.2x the font size",
          "1.4-1.6x the font size",
          "2.0-2.5x the font size"
        ],
        correctAnswer: 2,
        explanation: "Line height (leading) should be 1.4-1.6x the font size for optimal readability of body text. This provides enough space between lines without creating disconnection."
      },
      {
        question: "Why is the 8-point grid system commonly used?",
        options: [
          "It's the only grid system that works",
          "It creates mathematical harmony and simplifies responsive design",
          "Eight is considered a lucky number",
          "It was invented by Apple"
        ],
        correctAnswer: 1,
        explanation: "The 8-point grid system (using multiples of 8px) creates mathematical harmony, ensures consistency, and makes responsive design easier by providing clear spacing increments."
      },
      {
        question: "What does alignment in design achieve?",
        options: [
          "Makes designs symmetrical",
          "Creates visual clutter",
          "Creates order and connection between elements",
          "Eliminates the need for grids"
        ],
        correctAnswer: 2,
        explanation: "Alignment creates order and visual connection between elements. Everything should align to something - either other elements or grid lines - to create cohesive designs."
      },
      {
        question: "Which is TRUE about font pairing?",
        options: [
          "Always use the same font for everything",
          "Use as many different fonts as possible",
          "Combine contrasting fonts but limit to 2-3 maximum",
          "Only use decorative fonts for professionalism"
        ],
        correctAnswer: 2,
        explanation: "Effective font pairing combines contrasting fonts (e.g., serif with sans-serif) but limits the design to 2-3 fonts maximum to maintain visual consistency and avoid confusion."
      }
    ]
  },
  {
    id: "brand-identity",
    title: "Brand Guidelines & Identity",
    description: "Create and maintain consistent brand experiences",
    icon: "Sparkles",
    sections: [
      {
        title: "Brand Identity Fundamentals",
        content: [
          "Brand identity is the visible elements of a brand (logo, colors, typography, imagery) that together identify and distinguish the brand in consumers' minds.",
          "A strong brand identity is consistent, memorable, and appropriate for the target audience. It should work across all touchpoints and media.",
          "Brand identity vs brand image: Identity is what you project; image is how the public perceives you. Your goal is to align these two.",
          "Every design decision should reinforce the brand's core values and personality. Ask: 'Does this feel like our brand?'"
        ],
        dos: [
          "Create comprehensive brand guidelines that cover all visual elements",
          "Ensure consistency across all brand touchpoints (website, social, print)",
          "Design with the target audience's preferences and expectations in mind",
          "Test brand elements across different contexts and applications"
        ],
        donts: [
          "Copy competitor brand identities without differentiation",
          "Create complex logos that don't scale or reproduce well",
          "Use trendy design elements that will quickly become dated",
          "Allow inconsistent brand application across different channels"
        ]
      },
      {
        title: "Logo Design Principles",
        content: [
          "An effective logo is simple, memorable, timeless, versatile, and appropriate. It should work in black and white and at any size.",
          "Logo types: Wordmarks (text only), lettermarks (initials), pictorial marks (icon), abstract marks (geometric), mascots, and combination marks.",
          "The logo should communicate the brand essence at a glance. It's not the place to tell your whole story - it's a recognition trigger.",
          "Design logos in vector format (not raster) so they scale infinitely without quality loss. Create versions for different applications (full color, monochrome, icon only)."
        ],
        dos: [
          "Design logos that work in black and white first, then add color",
          "Create multiple logo variations (horizontal, vertical, icon only)",
          "Test logo at various sizes from favicon to billboard",
          "Ensure logo is distinctive within your industry"
        ],
        donts: [
          "Use more than 2-3 colors in a logo",
          "Create overly detailed logos that lose clarity when scaled down",
          "Follow design trends that will look dated in 2-3 years",
          "Use stock symbols or clip art in professional logo design"
        ]
      },
      {
        title: "Color and Typography Systems",
        content: [
          "Brand color palettes typically include: Primary colors (1-2 main brand colors), secondary colors (supporting palette), and neutral colors (backgrounds, text).",
          "Document exact color values in all formats: HEX, RGB, CMYK, and Pantone. This ensures consistency across digital and print applications.",
          "Typography systems should define: Primary fonts (headlines, branding), secondary fonts (body text), web-safe alternatives, and usage rules.",
          "Establish clear hierarchy rules for typography: When to use each font, approved sizes, spacing, and combinations that maintain brand consistency."
        ],
        dos: [
          "Create a defined color palette with specific use cases for each color",
          "Provide color values in all necessary formats (HEX, RGB, CMYK, Pantone)",
          "Choose 1-2 primary brand fonts that reflect brand personality",
          "Document typography hierarchy with specific size and weight guidelines"
        ],
        donts: [
          "Use too many colors (creates confusion and weakens brand recognition)",
          "Choose fonts that are difficult to read or not widely available",
          "Allow team members to use 'similar' colors or fonts",
          "Forget to specify fallback fonts for web applications"
        ]
      },
      {
        title: "Brand Guidelines Documentation",
        content: [
          "Brand guidelines (or brand books) are comprehensive documents that explain how to use brand elements correctly and consistently.",
          "Essential sections: Brand story and values, logo usage (correct and incorrect), color palette, typography, imagery style, voice and tone, and application examples.",
          "Make guidelines accessible and easy to navigate. Use visual examples showing correct and incorrect usage to eliminate confusion.",
          "Living guidelines: Update guidelines as the brand evolves. Share them with all stakeholders, partners, and vendors who create brand materials."
        ],
        dos: [
          "Show visual examples of correct and incorrect brand usage",
          "Include measurements, spacing rules (often expressed in logo-width units)",
          "Provide downloadable brand assets in various formats",
          "Create both detailed and quick-reference versions of guidelines"
        ],
        donts: [
          "Create guidelines that are so complex nobody follows them",
          "Make guidelines inaccessible or hard to find",
          "Use technical jargon without explaining terms",
          "Leave guidelines static without periodic reviews and updates"
        ]
      },
      {
        title: "Brand Consistency and Application",
        content: [
          "Consistency builds recognition and trust. Inconsistent branding confuses audiences and weakens brand equity you've worked hard to build.",
          "Create templates for common brand applications: presentations, social media graphics, email signatures, business cards, and marketing materials.",
          "Brand audits: Regularly review all brand touchpoints to ensure consistent application. Look for drift or unauthorized variations.",
          "Empower brand guardians: Designate team members responsible for maintaining brand standards and reviewing materials before publication."
        ],
        dos: [
          "Create templates for frequently-used brand materials",
          "Conduct quarterly brand audits across all channels",
          "Establish approval processes for new brand materials",
          "Train team members on proper brand usage"
        ],
        donts: [
          "Let individual team members interpret brand guidelines differently",
          "Allow outdated logo versions to remain in circulation",
          "Skip brand review for 'small' or 'internal' materials",
          "Create one-off designs that don't follow brand standards"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the difference between brand identity and brand image?",
        options: [
          "They are the same thing",
          "Identity is what you project; image is how the public perceives you",
          "Identity is for logos; image is for colors",
          "Identity is internal; image is external"
        ],
        correctAnswer: 1,
        explanation: "Brand identity is the visible elements and messaging you project to the world. Brand image is how the public actually perceives your brand. The goal is to align these two."
      },
      {
        question: "What makes an effective logo?",
        options: [
          "Complex, detailed, trendy, colorful, and large",
          "Simple, memorable, timeless, versatile, and appropriate",
          "Animated, 3D, photorealistic, and gradient-heavy",
          "Text-heavy with complete brand story"
        ],
        correctAnswer: 1,
        explanation: "Effective logos are simple, memorable, timeless, versatile (working at any size and in any color), and appropriate for the brand and audience."
      },
      {
        question: "Why should logos be designed in vector format?",
        options: [
          "Vectors are easier to create than raster images",
          "Vectors use less storage space",
          "Vectors scale infinitely without quality loss",
          "Vectors are required by law"
        ],
        correctAnswer: 2,
        explanation: "Vector formats allow logos to scale infinitely without losing quality, making them suitable for any application from business cards to billboards."
      },
      {
        question: "What color formats should be documented in brand guidelines?",
        options: [
          "Only HEX for web use",
          "Only Pantone for print use",
          "HEX, RGB, CMYK, and Pantone for all applications",
          "RGB is sufficient for everything"
        ],
        correctAnswer: 2,
        explanation: "Document colors in all necessary formats (HEX, RGB, CMYK, Pantone) to ensure consistency across digital and print applications."
      },
      {
        question: "What are the main components of a brand color palette?",
        options: [
          "As many colors as possible for variety",
          "Only primary brand color",
          "Primary colors, secondary colors, and neutral colors",
          "Only black and white"
        ],
        correctAnswer: 2,
        explanation: "A complete brand color palette includes primary colors (1-2 main brand colors), secondary colors (supporting palette), and neutral colors (backgrounds, text)."
      },
      {
        question: "What should brand guidelines include?",
        options: [
          "Only the logo in different sizes",
          "Brand story, logo usage, colors, typography, imagery, voice, and examples",
          "Just the color palette",
          "Only what NOT to do"
        ],
        correctAnswer: 1,
        explanation: "Comprehensive brand guidelines include brand story/values, logo usage rules, color palette, typography, imagery style, voice and tone, and application examples."
      },
      {
        question: "How often should brand audits be conducted?",
        options: [
          "Once when brand is created, then never again",
          "Every five years",
          "Quarterly or regularly to ensure consistency",
          "Only when rebranding"
        ],
        correctAnswer: 2,
        explanation: "Regular brand audits (quarterly is recommended) help ensure consistent application across all touchpoints and catch drift or unauthorized variations early."
      },
      {
        question: "Why is brand consistency important?",
        options: [
          "It makes design work easier",
          "It builds recognition and trust with audiences",
          "It's required by marketing laws",
          "It reduces printing costs"
        ],
        correctAnswer: 1,
        explanation: "Consistency builds recognition and trust. Inconsistent branding confuses audiences and weakens the brand equity you've worked hard to build."
      },
      {
        question: "What is a 'living guideline' approach to brand documentation?",
        options: [
          "Guidelines that are animated or interactive",
          "Guidelines that are updated as the brand evolves",
          "Guidelines that only exist digitally",
          "Guidelines written in first person"
        ],
        correctAnswer: 1,
        explanation: "Living guidelines are updated as the brand evolves, rather than being static documents. This ensures guidelines remain relevant and useful over time."
      },
      {
        question: "How many fonts should typically be included in a brand typography system?",
        options: [
          "As many as possible for variety",
          "1-2 primary fonts with clear usage rules",
          "At least 10 different fonts",
          "Only one font for everything"
        ],
        correctAnswer: 1,
        explanation: "Brand typography systems typically include 1-2 primary fonts (for headlines, body text, etc.) with clear usage rules, maintaining consistency while providing necessary flexibility."
      }
    ]
  },
  {
    id: "creative-brief",
    title: "Creative Brief Excellence",
    description: "Transform client needs into actionable design briefs",
    icon: "FileText",
    sections: [
      {
        title: "Purpose and Structure of Creative Briefs",
        content: [
          "A creative brief is a strategic document that guides all creative work. It translates business objectives into creative direction, ensuring everyone works toward the same goal.",
          "An effective brief answers: What are we creating? Why? For whom? What should it achieve? What's the timeline and budget?",
          "The brief serves as a North Star - when creative decisions are debated, return to the brief to stay aligned with objectives.",
          "A good brief is clear, concise (typically 1-2 pages), and focused. It provides direction without dictating solutions, leaving room for creative exploration."
        ],
        dos: [
          "Start every project with a comprehensive creative brief",
          "Get client approval on the brief before beginning creative work",
          "Refer back to the brief when evaluating creative concepts",
          "Keep briefs concise and focused on essentials"
        ],
        donts: [
          "Start creative work without a clear brief",
          "Make briefs so long that nobody reads them",
          "Write briefs that dictate exact solutions instead of outcomes",
          "Skip client input when developing the brief"
        ]
      },
      {
        title: "Key Components of a Creative Brief",
        content: [
          "Project Overview: Background, context, and what's being created. Example: 'Launch campaign for new eco-friendly product line targeting millennials.'",
          "Objectives: Specific, measurable goals. Not 'increase awareness' but 'generate 10,000 website visits and 500 email signups in Q1.'",
          "Target Audience: Demographics, psychographics, behaviors. Go beyond 'women 25-40' to 'environmentally-conscious urban professionals who value authenticity.'",
          "Key Message: The single most important thing the audience should remember. If they forget everything else, what must they remember?"
        ],
        dos: [
          "Make objectives SMART (Specific, Measurable, Achievable, Relevant, Time-bound)",
          "Create detailed audience personas with motivations and pain points",
          "Distill the key message to one clear sentence",
          "Provide relevant background that informs creative decisions"
        ],
        donts: [
          "List vague objectives like 'improve brand perception'",
          "Define audience too broadly ('everyone')",
          "Include multiple competing messages",
          "Provide irrelevant company history that doesn't inform creative"
        ]
      },
      {
        title: "Tone, Style, and Mandatories",
        content: [
          "Tone of Voice: How the brand should sound. Professional? Playful? Authoritative? Friendly? Use adjectives and examples from brands they relate to.",
          "Visual Style Direction: References, mood boards, or style descriptors that guide aesthetic decisions without being prescriptive.",
          "Mandatories: Non-negotiable elements that must be included (logo placement, legal requirements, specific CTAs, disclaimer text).",
          "Deliverables: Exact specifications of what's being created (3 social graphics 1080x1080px, 30-second video, email template, etc.)."
        ],
        dos: [
          "Provide 2-3 reference examples that capture the desired tone",
          "List all mandatory elements with specifications",
          "Specify exact deliverables with dimensions and formats",
          "Distinguish between inspiration and requirements"
        ],
        donts: [
          "Say 'surprise us' without any creative direction",
          "Forget to include legal or compliance requirements",
          "Be vague about deliverables ('some social posts')",
          "Confuse style references with copying requirements"
        ]
      },
      {
        title: "Timeline, Budget, and Stakeholders",
        content: [
          "Timeline: Include key milestones (brief approval, concept presentation, revisions, final delivery) with specific dates.",
          "Budget: Be transparent about budget constraints. It's better to know limitations upfront than to present concepts that aren't feasible.",
          "Stakeholders: Who needs to approve what? Map out the approval chain to avoid surprises and delays.",
          "Success Metrics: How will you measure if the creative achieved its objectives? Define these before launch, not after."
        ],
        dos: [
          "Build buffer time for revisions and unexpected delays",
          "Document who has approval authority at each stage",
          "Define success metrics that tie back to objectives",
          "Be realistic about what's achievable within budget and timeline"
        ],
        donts: [
          "Promise unrealistic timelines to win the project",
          "Hide budget constraints and present unaffordable concepts",
          "Forget to identify all stakeholders who need input",
          "Wait until after launch to define success metrics"
        ]
      },
      {
        title: "Collaborative Brief Development",
        content: [
          "The best briefs are collaborative, not dictated. Involve strategists, creatives, and clients in the briefing process.",
          "Ask probing questions: 'What does success look like?', 'What's the one thing we can't compromise on?', 'What's our biggest constraint?'",
          "Challenge assumptions: If the brief says 'everyone is our audience,' push back. If objectives seem vague, seek clarity.",
          "Brief approval is critical: Get written sign-off from key stakeholders before creative work begins. This protects everyone and prevents scope creep."
        ],
        dos: [
          "Schedule a briefing meeting with all key stakeholders",
          "Ask 'why' repeatedly until you understand true objectives",
          "Document all decisions and get written approval",
          "Challenge vague requests with specific questions"
        ],
        donts: [
          "Accept incomplete or vague briefs without pushback",
          "Let clients skip the briefing process 'to save time'",
          "Start creative work before brief is approved",
          "Accept changing objectives without updating the brief"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the primary purpose of a creative brief?",
        options: [
          "To showcase the agency's writing skills",
          "To translate business objectives into creative direction",
          "To replace the need for strategy",
          "To limit creative freedom"
        ],
        correctAnswer: 1,
        explanation: "A creative brief translates business objectives into creative direction, ensuring everyone works toward the same goal while providing strategic guidance."
      },
      {
        question: "How long should a typical creative brief be?",
        options: [
          "As long as possible to include everything",
          "One paragraph",
          "1-2 pages, clear and concise",
          "At least 10 pages for credibility"
        ],
        correctAnswer: 2,
        explanation: "A good brief is typically 1-2 pages - clear, concise, and focused on essentials. If it's too long, people won't read it."
      },
      {
        question: "What makes an objective effective in a creative brief?",
        options: [
          "Using impressive language",
          "Being SMART (Specific, Measurable, Achievable, Relevant, Time-bound)",
          "Keeping it vague so there's flexibility",
          "Listing as many objectives as possible"
        ],
        correctAnswer: 1,
        explanation: "Effective objectives are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Vague objectives like 'increase awareness' aren't actionable."
      },
      {
        question: "How should target audience be defined in a creative brief?",
        options: [
          "As broadly as possible to reach everyone",
          "With demographics, psychographics, motivations, and behaviors",
          "Just age and gender",
          "It's not necessary to define audience"
        ],
        correctAnswer: 1,
        explanation: "Target audience should go beyond demographics to include psychographics, behaviors, motivations, and pain points for effective targeting."
      },
      {
        question: "What is the 'key message' in a creative brief?",
        options: [
          "Everything the brand wants to communicate",
          "The single most important thing the audience should remember",
          "The brand's tagline",
          "A list of product features"
        ],
        correctAnswer: 1,
        explanation: "The key message is the single most important thing the audience should remember. If they forget everything else, what must they remember?"
      },
      {
        question: "What are 'mandatories' in a creative brief?",
        options: [
          "Suggestions that can be ignored",
          "Non-negotiable elements that must be included",
          "The most creative parts of the brief",
          "Optional elements if time allows"
        ],
        correctAnswer: 1,
        explanation: "Mandatories are non-negotiable elements that must be included, such as logo placement, legal requirements, specific CTAs, or disclaimer text."
      },
      {
        question: "When should stakeholders approve the creative brief?",
        options: [
          "After the creative work is complete",
          "Before creative work begins",
          "Approval isn't necessary",
          "Only if there are problems"
        ],
        correctAnswer: 1,
        explanation: "Get written sign-off from key stakeholders before creative work begins. This protects everyone and prevents scope creep."
      },
      {
        question: "What should you do if a client provides a vague brief?",
        options: [
          "Start creative work and guess what they want",
          "Accept it to avoid conflict",
          "Challenge it with specific questions to gain clarity",
          "Write your own brief without client input"
        ],
        correctAnswer: 2,
        explanation: "Challenge vague briefs with specific questions. Ask 'why' repeatedly until you understand true objectives. Good briefs require clarity."
      },
      {
        question: "How should budget constraints be handled in a creative brief?",
        options: [
          "Hidden from the creative team",
          "Ignored until concepts are presented",
          "Transparent and documented upfront",
          "Only mentioned if asked"
        ],
        correctAnswer: 2,
        explanation: "Be transparent about budget constraints upfront. It's better to know limitations before work begins than to present concepts that aren't feasible."
      },
      {
        question: "What is the role of a creative brief during concept evaluation?",
        options: [
          "It should be ignored to allow creative freedom",
          "It serves as the North Star to keep decisions aligned with objectives",
          "It's only relevant at the beginning of the project",
          "It should be rewritten for each concept"
        ],
        correctAnswer: 1,
        explanation: "The brief serves as a North Star - when creative decisions are debated, return to the brief to stay aligned with objectives and strategy."
      }
    ]
  },
  {
    id: "visual-communication",
    title: "Visual Communication",
    description: "Communicate ideas effectively through design",
    icon: "Eye",
    sections: [
      {
        title: "Fundamentals of Visual Communication",
        content: [
          "Visual communication uses visual elements to convey ideas, information, and messages. It's often more immediate and memorable than text alone.",
          "The goal is clarity first, beauty second. An attractive design that confuses viewers has failed. A clear design that's aesthetically simple has succeeded.",
          "Visual communication relies on universal symbols and culturally-learned associations. A red octagon means 'stop' globally because we've learned this association.",
          "Every design element should have a purpose. Ask: 'What is this communicating? Does it support or distract from the message?'"
        ],
        dos: [
          "Prioritize clarity and comprehension over decoration",
          "Use visual metaphors and symbols your audience understands",
          "Test designs with actual users to verify understanding",
          "Remove elements that don't contribute to the message"
        ],
        donts: [
          "Add decorative elements that obscure the message",
          "Assume all audiences interpret visuals the same way",
          "Use obscure symbols or metaphors without explanation",
          "Prioritize aesthetics over communication effectiveness"
        ]
      },
      {
        title: "Data Visualization and Information Design",
        content: [
          "Data visualization transforms complex data into visual formats that reveal patterns, trends, and insights that would be invisible in raw data.",
          "Choose the right chart type: Line charts for trends over time, bar charts for comparisons, pie charts for parts of a whole (use sparingly), scatter plots for correlations.",
          "Remove chart junk - unnecessary decorations, 3D effects, or redundant labels. Every ink drop should serve a purpose (Edward Tufte's principle).",
          "Highlight what matters most. Use color, size, or annotation to draw attention to key insights rather than expecting viewers to find them."
        ],
        dos: [
          "Start with the insight you want to communicate, then choose visualization",
          "Use consistent colors and scales across related charts",
          "Provide context (benchmarks, goals, previous periods) for comparison",
          "Label clearly and provide data sources"
        ],
        donts: [
          "Use 3D charts that distort perception of values",
          "Display too much data in a single visualization",
          "Use pie charts with more than 5 segments",
          "Rely solely on color to differentiate categories (consider colorblind users)"
        ]
      },
      {
        title: "Icon Design and Symbolic Communication",
        content: [
          "Icons are simplified visual representations of objects, actions, or concepts. They save space, transcend language barriers, and speed recognition.",
          "Effective icons are simple, recognizable, consistent in style, and universally understood (or easily learned).",
          "Icon styles: Outline (line-based), filled (solid), flat (2D), and skeuomorphic (realistic). Choose a style and maintain consistency.",
          "Test icon comprehension: Can users identify what the icon represents without labels? If not, the icon needs refinement or a text label."
        ],
        dos: [
          "Design icons at multiple sizes (16px, 24px, 48px minimum)",
          "Maintain consistent line weight and style across icon sets",
          "Use established conventions (magnifying glass = search, house = home)",
          "Provide text labels for critical actions or unfamiliar concepts"
        ],
        donts: [
          "Mix different icon styles in the same interface",
          "Create overly complex icons with too much detail",
          "Invent new symbols for common actions that already have conventions",
          "Rely on icons alone for important or ambiguous actions"
        ]
      },
      {
        title: "Infographics and Educational Design",
        content: [
          "Infographics combine data visualization, illustration, and minimal text to tell a story or explain a concept. They transform complex information into digestible visual narratives.",
          "Effective infographics have a clear narrative flow. Guide viewers through information in a logical sequence using visual hierarchy and layout.",
          "Balance data accuracy with visual appeal. Simplify for clarity, but never distort data to make it 'look better.'",
          "Know your audience: Technical audiences accept more complexity; general audiences need more simplification and context."
        ],
        dos: [
          "Start with a clear story or message before designing",
          "Use a visual hierarchy to guide viewers through information",
          "Provide sources for all data and statistics",
          "Design with shareability in mind (appropriate dimensions, compelling visuals)"
        ],
        donts: [
          "Cram too much information into a single infographic",
          "Distort data for visual effect (e.g., manipulated axis scales)",
          "Use clip art or low-quality images",
          "Create infographics that require extensive text to understand"
        ]
      },
      {
        title: "Motion and Animation in Communication",
        content: [
          "Motion design adds the dimension of time to visual communication. It can explain processes, show transitions, draw attention, or add delight.",
          "Motion should have purpose: Draw attention, explain causality, show relationships, provide feedback, or guide through steps.",
          "Animation principles from Disney (squash & stretch, anticipation, easing) make motion feel natural and intuitive rather than robotic.",
          "Duration matters: Too fast and users miss it; too slow and users wait impatiently. Most UI animations should be 200-400ms."
        ],
        dos: [
          "Use motion to explain cause and effect relationships",
          "Apply easing (acceleration/deceleration) for natural movement",
          "Keep animations subtle and purposeful",
          "Provide options to reduce motion for accessibility"
        ],
        donts: [
          "Animate everything just because you can",
          "Use animation durations longer than 500ms for UI interactions",
          "Create animations that block users from proceeding",
          "Ignore users who experience motion sensitivity"
        ]
      }
    ],
    quiz: [
      {
        question: "What should be prioritized in visual communication design?",
        options: [
          "Aesthetics first, clarity second",
          "Clarity first, aesthetics second",
          "Decoration over information",
          "Complexity over simplicity"
        ],
        correctAnswer: 1,
        explanation: "Clarity should always be prioritized over aesthetics. An attractive design that confuses viewers has failed, while a clear design that's simple has succeeded."
      },
      {
        question: "Which chart type is best for showing trends over time?",
        options: [
          "Pie chart",
          "Line chart",
          "Bar chart",
          "Scatter plot"
        ],
        correctAnswer: 1,
        explanation: "Line charts are best for showing trends over time because they clearly display how values change across temporal sequences."
      },
      {
        question: "What is 'chart junk' according to Edward Tufte?",
        options: [
          "Data that doesn't support the narrative",
          "Unnecessary decorations and redundant elements in visualizations",
          "Charts that use too many colors",
          "Any chart that isn't a bar chart"
        ],
        correctAnswer: 1,
        explanation: "Chart junk refers to unnecessary decorations, 3D effects, or redundant elements that don't serve a purpose. Tufte's principle: every ink drop should serve a purpose."
      },
      {
        question: "What makes an icon effective?",
        options: [
          "Complex detail and realistic rendering",
          "Simple, recognizable, consistent, and universally understood",
          "Using as many colors as possible",
          "Large size and 3D effects"
        ],
        correctAnswer: 1,
        explanation: "Effective icons are simple, recognizable, consistent in style with other icons, and universally understood (or easily learned)."
      },
      {
        question: "When should text labels accompany icons?",
        options: [
          "Never - icons should always stand alone",
          "Always - icons are never clear without labels",
          "For critical actions or unfamiliar concepts",
          "Only in mobile interfaces"
        ],
        correctAnswer: 2,
        explanation: "Provide text labels for critical actions or unfamiliar concepts. While established icons (magnifying glass = search) can stand alone, ambiguous actions need labels."
      },
      {
        question: "What is the primary purpose of infographics?",
        options: [
          "To make designs look impressive",
          "To transform complex information into digestible visual narratives",
          "To replace all written content",
          "To show off design skills"
        ],
        correctAnswer: 1,
        explanation: "Infographics combine visualization, illustration, and text to transform complex information into digestible visual narratives that tell a story or explain concepts."
      },
      {
        question: "How should data be handled in visual communication?",
        options: [
          "Simplify it even if accuracy is compromised",
          "Balance accuracy with visual appeal - simplify but never distort",
          "Always show all available data",
          "Round numbers to make them look better"
        ],
        correctAnswer: 1,
        explanation: "Balance data accuracy with visual appeal. Simplify for clarity when needed, but never distort data to make it 'look better.' Integrity is crucial."
      },
      {
        question: "What should guide the duration of UI animations?",
        options: [
          "Make them as long as possible for impact",
          "Keep them under 200-400ms for most interactions",
          "Always use 1-second animations",
          "Duration doesn't matter"
        ],
        correctAnswer: 1,
        explanation: "Most UI animations should be 200-400ms. Too fast and users miss them; too slow and users wait impatiently. Duration significantly impacts user experience."
      },
      {
        question: "Why should motion design have purpose?",
        options: [
          "Because motion is expensive to implement",
          "To draw attention, explain causality, show relationships, or provide feedback",
          "Motion should never be used in design",
          "Motion is only decorative"
        ],
        correctAnswer: 1,
        explanation: "Motion should have purpose: draw attention, explain causality, show relationships, provide feedback, or guide through steps. Purposeless animation is distraction."
      },
      {
        question: "What accessibility consideration is important for motion design?",
        options: [
          "Motion should never be used",
          "All motion should be very slow",
          "Provide options to reduce motion for users with motion sensitivity",
          "Motion doesn't affect accessibility"
        ],
        correctAnswer: 2,
        explanation: "Provide options to reduce or disable motion for users who experience motion sensitivity. This is both an accessibility requirement and considerate design."
      }
    ]
  },
  {
    id: "presentation-design",
    title: "Presentation Design Mastery",
    description: "Create compelling presentations that persuade",
    icon: "Monitor",
    sections: [
      {
        title: "Presentation Structure and Storytelling",
        content: [
          "Every presentation is a story with a beginning (context), middle (development), and end (conclusion/call-to-action). Structure creates clarity and flow.",
          "The classic presentation arc: Problem → Impact → Solution → Benefits → Next Steps. This structure works because it mirrors how people make decisions.",
          "Start strong: The first 30 seconds determine if your audience engages or zones out. Open with a compelling statement, statistic, or question.",
          "End stronger: The last slide should be memorable and actionable. Don't end with 'Thank you' - end with your key takeaway and clear next steps."
        ],
        dos: [
          "Create a narrative arc that builds toward your conclusion",
          "Use the 'Rule of Three' - people remember things in threes",
          "Open with a hook that captures attention immediately",
          "End with a clear, actionable call-to-action"
        ],
        donts: [
          "Jump into details before establishing context",
          "Structure slides in random order without logical flow",
          "End presentations with generic 'Thank You' or 'Questions?' slides",
          "Try to cover too much - depth over breadth"
        ]
      },
      {
        title: "Slide Design Principles",
        content: [
          "One idea per slide. If a slide requires extensive explanation, it should be multiple slides. Simplicity increases comprehension and retention.",
          "Visual hierarchy on slides: Most important element should be most prominent. Use size, position, and contrast to establish hierarchy.",
          "The 6×6 rule (maximum guideline): No more than 6 bullet points per slide, no more than 6 words per bullet. Less is often better.",
          "Contrast is your friend: Dark text on light backgrounds or light text on dark backgrounds. Avoid low contrast combinations that strain eyes."
        ],
        dos: [
          "Use high-resolution images that fill the frame or serve a purpose",
          "Maintain consistent font sizes (32pt+ for body text, 44pt+ for headlines)",
          "Apply consistent spacing and alignment across all slides",
          "Use animations sparingly and purposefully"
        ],
        donts: [
          "Fill slides with paragraphs of text",
          "Use low-quality, pixelated images",
          "Mix multiple fonts and colors randomly",
          "Use distracting transitions or animations"
        ]
      },
      {
        title: "Data Presentation and Visualization",
        content: [
          "Never present a raw data table and expect audiences to find insights. Your job is to interpret data and highlight what matters.",
          "Chart titles should state the insight, not just describe the data. Not 'Q4 Sales by Region' but 'West Region Exceeded Sales Goals by 23%.'",
          "Build complex charts progressively: Show the base chart first, then add layers or highlights in subsequent slides to guide attention.",
          "Always provide context for numbers. '$50K' means nothing without knowing if that's good, bad, up, down, or compared to what."
        ],
        dos: [
          "Highlight key data points with color or annotation",
          "Remove gridlines, tick marks, and other clutter when possible",
          "Use consistent colors for the same categories across slides",
          "Provide benchmark or comparison data for context"
        ],
        donts: [
          "Show complex Excel tables copied directly into slides",
          "Use 3D charts that distort perception",
          "Present data without interpretation or insights",
          "Forget to cite data sources"
        ]
      },
      {
        title: "Typography and Readability",
        content: [
          "Readability from distance is critical. What looks fine on your laptop may be unreadable projected in a conference room or viewed on a phone.",
          "Minimum font sizes: 24pt for body text, 36-44pt for headings. If text is smaller than 24pt, it should probably be in speaker notes, not on the slide.",
          "Font choices: Sans-serif fonts (Helvetica, Arial, Calibri) are generally more readable in presentations than serif fonts.",
          "Text alignment: Left-align body text for readability. Center alignment is acceptable for short headlines but harder to read for longer text."
        ],
        dos: [
          "Test presentation readability from the back of the room",
          "Use sentence case for readability (not ALL CAPS for long text)",
          "Create visual interest with size and weight, not different fonts",
          "Limit yourself to 2 fonts maximum (one for headlines, one for body)"
        ],
        donts: [
          "Use font sizes smaller than 24pt",
          "Set long text in ALL CAPS (reduces readability by 13%)",
          "Use script or decorative fonts for body text",
          "Mix too many different fonts (creates visual chaos)"
        ]
      },
      {
        title: "Master Slides and Template Design",
        content: [
          "Master slides control consistent formatting across presentations. They save time and ensure brand consistency.",
          "Good template design includes: Title slide, standard content slide, section divider, data/chart slide, and closing slide layouts.",
          "Build flexibility into templates: Multiple layout options for different content types, but all maintaining consistent brand elements.",
          "Templates should guide, not restrict. Provide enough variation to handle different content needs while maintaining brand coherence."
        ],
        dos: [
          "Create master slides for all common slide types",
          "Include brand guidelines (colors, fonts, logo placement) in templates",
          "Design templates that work in both 16:9 and 4:3 aspect ratios",
          "Provide editable fields and placeholder text for easy customization"
        ],
        donts: [
          "Create overly restrictive templates that allow no flexibility",
          "Use background elements that compete with content",
          "Forget to include spacing guidelines and alignment grids",
          "Make templates so complex that people avoid using them"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the classic presentation story arc?",
        options: [
          "Introduction → Body → Conclusion",
          "Problem → Impact → Solution → Benefits → Next Steps",
          "Title → Data → Thank You",
          "Past → Present → Future"
        ],
        correctAnswer: 1,
        explanation: "The classic presentation arc is Problem → Impact → Solution → Benefits → Next Steps. This structure mirrors how people make decisions and creates compelling narratives."
      },
      {
        question: "What is the 'one idea per slide' principle?",
        options: [
          "Each slide can only have one word",
          "Each slide should convey one main concept or message",
          "Presentations should only have one slide",
          "Only one person can work on each slide"
        ],
        correctAnswer: 1,
        explanation: "One idea per slide means each slide should convey one main concept or message. If a slide requires extensive explanation, it should be split into multiple slides."
      },
      {
        question: "What is the 6×6 rule in presentation design?",
        options: [
          "Use exactly 6 slides in every presentation",
          "No more than 6 bullet points per slide, 6 words per bullet",
          "Presentations should be exactly 6 minutes long",
          "Use 6-point font size"
        ],
        correctAnswer: 1,
        explanation: "The 6×6 rule suggests no more than 6 bullet points per slide and no more than 6 words per bullet. This is a maximum guideline - less is often better."
      },
      {
        question: "What should chart titles communicate?",
        options: [
          "Just the chart type (Bar Chart, Line Graph)",
          "The data source",
          "The insight, not just a description of the data",
          "The date the data was collected"
        ],
        correctAnswer: 2,
        explanation: "Chart titles should state the insight, not just describe the data. For example: 'West Region Exceeded Sales Goals by 23%' not just 'Q4 Sales by Region.'"
      },
      {
        question: "What is the minimum recommended font size for body text in presentations?",
        options: [
          "12pt",
          "18pt",
          "24pt",
          "32pt"
        ],
        correctAnswer: 2,
        explanation: "Minimum font size for body text should be 24pt to ensure readability when projected or viewed from distance. Anything smaller should be in speaker notes."
      },
      {
        question: "Why should presentations start strong?",
        options: [
          "To show off design skills",
          "Because the first 30 seconds determine if the audience engages or zones out",
          "It's a traditional requirement",
          "To use up time"
        ],
        correctAnswer: 1,
        explanation: "The first 30 seconds of a presentation determine if your audience engages or zones out. A strong opening hooks attention immediately."
      },
      {
        question: "How should presentations end?",
        options: [
          "With a generic 'Thank You' slide",
          "With 'Any Questions?'",
          "With a memorable key takeaway and clear call-to-action",
          "By turning off the projector"
        ],
        correctAnswer: 2,
        explanation: "End presentations with a memorable key takeaway and clear, actionable call-to-action. Don't waste your last impression on generic 'Thank You' slides."
      },
      {
        question: "Why should data in presentations always include context?",
        options: [
          "To make slides look fuller",
          "Because numbers without comparison or benchmarks lack meaning",
          "It's required by law",
          "To confuse competitors"
        ],
        correctAnswer: 1,
        explanation: "Always provide context for numbers. '$50K' means nothing without knowing if that's good, bad, up, down, or compared to what. Context gives data meaning."
      },
      {
        question: "What is the purpose of master slides?",
        options: [
          "To make presentations harder to edit",
          "To control consistent formatting and ensure brand consistency",
          "To increase file size",
          "To prevent others from using the presentation"
        ],
        correctAnswer: 1,
        explanation: "Master slides control consistent formatting across presentations, save time, and ensure brand consistency by defining layouts and formatting once."
      },
      {
        question: "How should complex charts be presented?",
        options: [
          "All at once to save time",
          "Built progressively to guide attention and understanding",
          "Not included - they're too complex",
          "In an appendix only"
        ],
        correctAnswer: 1,
        explanation: "Build complex charts progressively: show the base chart first, then add layers or highlights in subsequent slides to guide attention and build understanding."
      }
    ]
  }
];

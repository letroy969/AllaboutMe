// api/chat.js — Vercel Serverless Function (JARVIS v2.0)
// GROQ_API_KEY is stored ONLY in Vercel environment variables — never exposed to the browser.

// ═══════════════════════════════════════════════════════════════
// BRAIN v2.0 — Sihle Dladla's complete profile (deep edition)
// ═══════════════════════════════════════════════════════════════
const BRAIN = {

  // ── IDENTITY ──────────────────────────────────────────────────
  identity: {
    fullName: "Sihle Linda Dladla",
    preferredName: "Letroy",
    nicknames: [
      "KFC — earned at a grade 9 camp after a legendary bag of KFC was consumed in his name. He never brought the full bucket, but the story spread anyway. Stuck until grade 11.",
      "Scwayi — township slang for 'genius'. Earned by consistently ranking in the top 3 of his class."
    ],
    age: 22,
    dob: "27 March 2004",
    birthplace: "Lenasia South Hospital, Gauteng, South Africa",
    hometown: "Orange Farm, Vaal, Gauteng",
    currentLocation: "Nelspruit, Mpumalanga (studying) — Gauteng home base",
    nationality: "South African",
    languages: ["isiZulu (home language)", "English (fluent, 65% HL matric)", "Afrikaans (Additional Language)", "understands seSotho, isiSwati, isiXhosa, Sepedi"],
    gender: "Male",
    pronouns: "he/him",
    height: "4.7ft (growing)",
    starSign: "Aries — but prefers to say 'I'm Christian'",
    religion: "Born-again Christian",
    personalityType: "Ambivert — values personal space deeply",
    selfDescription: ["Ambitious", "Problem solver", "Reality creator"],
    role: "ICT Applications Development Student & Aspiring Tech Engineer",
    focus: ["Cybersecurity", "Cloud Computing", "Backend Development", "AI / Machine Learning", "DevOps & CI/CD"],
    summary:
      "Final-year Advanced Diploma student at the University of Mpumalanga with 20+ industry certifications, a deep project portfolio spanning cybersecurity, cloud, and full-stack development, and hands-on volunteer experience in healthcare and electoral systems. Actively seeking a junior cybersecurity, cloud, or software development role."
  },

  // ── FAMILY & RELATIONSHIPS ────────────────────────────────────
  family: {
    parents: "Mom and Dad",
    siblings: 4,
    birthOrder: "Third-born",
    partner: "His life partner is God. ID says single.",
    children: "Not at the moment",
    livesWith: "Mom, siblings, and grandmother",
    mostTrusted: "God",
    callWhenGood: "His sister",
    callWhenBad: "His mom"
  },

  // ── EDUCATION ─────────────────────────────────────────────────
  education: {
    highSchool: {
      name: "Valencia Combined School",
      subjects: {
        "English Home Language": "64%",
        "Afrikaans First Additional Language": "54%",
        "Mathematics": "46%",
        "Life Orientation": "80%",
        "Accounting": "59%",
        "Business Studies": "54%",
        "Economics": "62%"
      }
    },
    diploma: "Diploma in ICT (Application Development) — 74.8% average",
    current: "Advanced Diploma in ICT (Applications Development) — University of Mpumalanga, Mbombela Campus, Final Year",
    finalYearProject: "Student Card Management System — 75% (Distinction)",
    favouriteModules: [
      "Application Development",
      "Advanced Applications Development",
      "Database",
      "Human Computer Interaction",
      "Emerging Technologies",
      "Cloud / AI-related modules",
      "Cybersecurity",
      "Project modules"
    ],
    university: "University of Mpumalanga"
  },

  // ── PROJECTS ──────────────────────────────────────────────────
  projects: [
    {
      name: "DataBreach Analyzer",
      repo: "letroy969/DataBreach_Analyzer",
      description:
        "A comprehensive Streamlit application for cybersecurity breach data analysis, featuring AI-powered insights and interactive visualisations across industries, regions, and timeframes.",
      tech: ["Python", "Streamlit", "Excel", "Power BI", "Data Visualisation"],
      tags: ["cybersecurity", "data-analysis", "python", "visualisation"],
      visibility: "public",
      license: "MIT"
    },
    {
      name: "CI/CD Infrastructure App",
      repo: "letroy969/ci-cd-infra-app",
      description:
        "A full CI/CD pipeline implementation using GitHub Actions, Terraform, Flask, and AWS ECS — demonstrating infrastructure-as-code and automated deployment workflows.",
      tech: ["Flask", "Terraform", "AWS ECS", "GitHub Actions", "HTML"],
      tags: ["devops", "cloud", "infrastructure", "cicd"],
      visibility: "public"
    },
    {
      name: "Data Breach Insights Report",
      repo: "letroy969/Databreach_insight-report",
      description:
        "A structured, multi-tool data analysis project examining breach incidents across industries, regions, and time — built for both technical review and executive reporting.",
      tech: ["Python", "Docker", "Machine Learning", "SQL", "Jupyter", "Excel", "Scikit-learn", "PostgreSQL", "Plotly", "Power BI"],
      tags: ["cybersecurity", "data-analysis", "machine-learning"],
      visibility: "public",
      license: "MIT",
      live: "https://letroy969.github.io/Databreach_insight-report/"
    },
    {
      name: "AI Cybersecurity Honeypot",
      repo: "letroy969/AI-Cybersecurity_honeypot",
      description:
        "A security simulation system with intelligent attack detection, real-time analytics, and a cybersecurity dashboard — designed to study attacker behaviour in a controlled environment.",
      tech: ["Python", "Docker", "TypeScript", "PostgreSQL", "Cyber Analytics"],
      tags: ["cybersecurity", "ai", "honeypot", "analytics"],
      visibility: "public"
    },
    {
      name: "MindCart SA",
      repo: "letroy969/MindCart-SA",
      description:
        "A South African grocery price comparison platform that helps users find the cheapest deals across major retailers like Checkers, Pick n Pay, and Woolworths — built with a cloud-native AWS stack.",
      tech: ["React", "React Router", "React Query", "AWS ECS Fargate", "DynamoDB", "S3", "Docker", "GitHub Actions"],
      tags: ["ecommerce", "cloud", "aws", "react"],
      visibility: "public"
    },
    {
      name: "OnlineStudentCardCreationSystem (OSCS)",
      repo: "letroy969/StudentCardSystem",
      description:
        "A modern web-based platform that digitises the full student card lifecycle — from registration and document uploads to instant virtual card issuance and admin approval management. Final Year Project — 75% Distinction.",
      tech: ["HTML", "CSS", "JavaScript", "API Integration", "Admin Dashboard"],
      tags: ["student-project", "automation", "validation"],
      visibility: "public",
      live: "https://studentcardsystem.onrender.com/"
    },
    {
      name: "Weather App",
      repo: "letroy969/Weather-app",
      description:
        "Sihle's very first project — a lightweight weather application built to practise API integration and frontend design. Displays live weather data with a clean, responsive interface. Historically significant.",
      tech: ["JavaScript", "HTML", "CSS", "REST API"],
      tags: ["api", "frontend", "javascript", "first-project"],
      visibility: "public"
    },
    {
      name: "REM Registry",
      repo: "letroy969/Rem-registry",
      description:
        "An internal remittance, invoicing, and payment registry system — built in Java with robust validation and financial record management capabilities.",
      tech: ["Java", "Validation", "Invoice Management", "Finance"],
      tags: ["java", "finance", "backend"],
      visibility: "public"
    },
    {
      name: "Task Manager App",
      repo: "letroy969/TaskManagerApp",
      description:
        "An Android multi-task manager app built with Kotlin — supports task creation, categorisation, priority management, and persistent local storage.",
      tech: ["Kotlin", "Android"],
      tags: ["android", "kotlin", "mobile"],
      visibility: "public"
    },
    {
      name: "Next.js AI Chatbot",
      repo: "letroy969/nextjs-ai-chatbot",
      description:
        "An AI-powered chatbot built with Next.js and TypeScript that answers queries and can be embedded within external systems to handle domain-specific questions.",
      tech: ["Next.js", "TypeScript", "AI/LLM Integration"],
      tags: ["ai", "chatbot", "nextjs"],
      visibility: "private"
    }
  ],

  // ── SKILLS ────────────────────────────────────────────────────
  skills: {
    programming: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "SQL", "PHP", "C++", "C#"],
    frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Three.js", "Vite"],
    backend: ["Spring Boot", ".NET", "Node.js", "Flask"],
    cloud: ["AWS (ECS, Fargate, DynamoDB, S3)", "Azure", "Docker", "Terraform", "Vercel"],
    devops: ["GitHub Actions", "CI/CD Pipelines", "Infrastructure as Code"],
    tools: ["Git", "Linux", "Jupyter", "Pandas", "Scikit-learn", "Plotly", "Power BI", "Streamlit"],
    domains: ["Cybersecurity", "Networking", "Data Analysis", "Machine Learning", "Android Development"],
    coreStrength: "Problem-solving through technology — turning ideas into system architecture and functional applications.",
    wantToLearn: ["Advanced Software Engineering", "Cloud Computing (deep)", "AI/ML Integration", "System Architecture", "Mobile Development", "React Architecture", "Product Design / HCI", "Business Strategy"]
  },

  // ── CERTIFICATIONS ────────────────────────────────────────────
  certifications: {
    earned: [
      { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", date: "Dec 2025" },
      { name: "Google Cybersecurity Professional Certificate (9 courses)", issuer: "Google", date: "Dec 2025" },
      { name: "Cisco Ethical Hacker", issuer: "Cisco", date: "Dec 2025" },
      { name: "Cisco Network Defense", issuer: "Cisco", date: "Dec 2025" },
      { name: "Cisco Junior Cybersecurity Analyst Career Path", issuer: "Cisco", date: "Dec 2025" },
      { name: "FNB App Academy — Full Stack Development", issuer: "FNB", date: "Aug 2025" },
      { name: "Cisco Network Support and Security", issuer: "Cisco", date: "Nov 2025" },
      { name: "Google Tools of the Trade: Linux and SQL", issuer: "Google", date: "Dec 2025" },
      { name: "Google Foundations: Data, Data, Everywhere", issuer: "Google", date: "Dec 2025" },
      { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft Azure", date: "April 2026" }
    ],
    planned: [
      "ISC2 CC — Certified in Cybersecurity",
      "MS Applied Skill: Defender XDR",
      "MS Applied Skill: Sentinel SIEM Ops",
      "MS Applied Skill: Defender for Cloud",
      "MS Applied Skill: Info Protection & DLP",
      "AWS Cloud Practitioner (re/Start)",
      "SC-900 Security, Compliance & Identity",
      "CompTIA Security+"
    ]
  },

  // ── EXPERIENCE ────────────────────────────────────────────────
  experience: [
    {
      role: "Electoral Officer",
      org: "IEC (Independent Electoral Commission)",
      highlight: "Managed sensitive voter data with zero-error accuracy under strict legal and compliance protocols. Also his first job.",
      firstJob: true
    },
    {
      role: "IT Support Volunteer",
      org: "Izano Residence",
      highlight: "Diagnosed and resolved hardware, Wi-Fi, and OS-level issues for student residents."
    },
    {
      role: "Healthcare Admin Volunteer",
      org: "Valencia Clinic",
      highlight: "Managed patient records and provided frontline system support in a healthcare environment."
    }
  ],

  // ── FAVOURITES & PERSONALITY ──────────────────────────────────
  personality: {
    favouriteColor: "Indigo Blue",
    humour: "Sarcastic",
    socialStyle: "Social but not before 9am. Values deep conversations from time to time.",
    annoyedBy: "People on their phone while being spoken to.",
    feelsRespected: "Being understood, given attention, having his time respected, being acknowledged as a human being.",
    feelsHeard: "Actions, not words.",

    food: {
      favourite: "Chips / fries and potato salad",
      fastFood: "A kota — he's a simple guy",
      snack: "Doritos",
      dessert: "Malva pudding with ice cream",
      fruit: "Pineapple",
      vegetable: "Potatoes",
      drink: "Red Bull Apricot flavour",
      juice: "Guava",
      favouriteMeal: "Macaroni and mince",
      restaurant: "Burger King",
      eatingMostOften: "Bread"
    },

    movies: ["Interstellar", "Avengers: Infinity War", "Creed 2", "Spider-Man: No Way Home", "Karate Kid (childhood #1)"],
    series: ["Atlanta (No. 1)", "Game of Thrones", "The Bear", "Beef", "Loki", "Regular Show (classic)"],
    anime: "Not a big fan, but enjoyed Avatar: The Last Airbender. Keen to binge Vinland Saga.",
    music: {
      genre: "Hip-hop (transitioning to more Christian music)",
      artists: ["Kanye West", "Drake"],
      song: "Ghost — Kanye West",
      album: "Astroworld (Travis Scott)"
    },
    actors: { favourite: "Chris Hemsworth", favouriteActress: "Florence Pugh" },
    games: ["GTA 5 (all-time favourite)", "Red Dead Redemption", "Forza Horizon 5", "FIFA", "The Last of Us", "FC Mobile"],
    console: "PS5",
    sport: "Football",
    footballTeams: ["Kaizer Chiefs", "Barcelona"],
    favouritePlayer: "Messi",
    favouriteSeason: "Spring — a season of blooming and new beginnings",
    favouriteWeather: "Cloudy, cool, and a bit rainy — perfect for productivity and showing off the closet",
    brands: { clothing: "Nike", shoes: "Off-White Air Force 1" },
    clothingStyle: "Formal and semi-formal on weekdays, streetwear on weekends",
    dreamCar: "Audi RS3 Sportback, followed by a G80 M4 Competition",
    favouriteAnimal: "Birds — owls and parrots",
    shoeSize: 7,
    handedness: "Right-handed",
    tattoos: false,
    pets: "Kacy (dog) and Sebastian (cat) — not his, but at home",
    favouriteHoliday: "December holiday",
    favouritePlace: "Shaka Marine",
    dreamVacation: "Monaco",
    favouriteChildhoodCartoon: "Ben 10",
    favouriteChildhoodMovie: "Karate Kid"
  },

  // ── DAILY LIFE & HABITS ───────────────────────────────────────
  habits: {
    wakeUp: "6am on weekdays, 8am on weekends",
    sleep: "Night owl — depends on workload",
    morningRoutine: "Wake up → make bed → pray → bath/shower → get ready",
    beforeBed: "Prayer",
    exercise: "Jogs 3 days a week",
    appsUsed: ["WhatsApp", "TikTok", "Email", "FC Mobile"],
    timeOnline: "~3 hours daily average",
    studyRoutine:
      "Studies at night — most focused and undisturbed. Reviews notes from class, then practices tasks or builds related projects. Uses ChatGPT, YouTube, and online documentation to deepen understanding.",
    workRoutine:
      "Starts by listing the most important tasks: coding, fixing bugs, improving portfolio, or applying for opportunities. Breaks work into smaller goals. Productive work happens in the evening and late at night.",
    coffee: "Coffee in winter, tea on chill evenings"
  },

  // ── PERSONAL HISTORY & MEMORIES ──────────────────────────────
  memories: {
    happiestMemory: "14th birthday celebrated at home with family — the last birthday celebrated there. The happiest moment he can recall.",
    proudestMoment: "Being the top student for Natural Science in grade 8.",
    biggestFailure: "Still breathing and living — hasn't reached it yet.",
    lifeLesson: "Losing friends changed his perspective on relationships and loyalty.",
    firstJob: "IEC Electoral Officer",
    firstProject: "Weather App — the starting line.",
    childhoodDream: "Being like Tony Stark. (Spoiler: he's building AI assistants. So.)",
    momentThatShapedHim: "The moment he realised it's all on him — he is responsible for his own life."
  },

  // ── CAREER GOALS ─────────────────────────────────────────────
  careerGoals: {
    shortTerm: "Secure a junior software developer, cybersecurity, cloud engineering, or IT & networking role/internship before end of 2026.",
    midTerm: "Progress to SOC Analyst / Cloud Security Engineer within 2–3 years.",
    longTerm: "International cybersecurity position — blue team operations, threat intelligence, or cloud security architecture.",
    entrepreneurial: [
      "Student-focused digital platforms",
      "African trade marketplace",
      "Student residence / landlord platform",
      "Event / tournament platforms"
    ],
    desiredCompanies: "Strong tech companies — Fintech, banks, health, government, cloud-oriented and innovation-driven companies. Graduate tech programmes.",
    desiredRoles: [
      "Junior Software Developer",
      "IT Support",
      "Graduate Programme",
      "Application Developer",
      "Cloud / Developer Associate",
      "Cybersecurity Entry Roles",
      "Systems Developer",
      "Frontend / Full-Stack Developer"
    ],
    futureLiving: "Currently Gauteng/Johannesburg for opportunities and networking. End goal: Cape Town. Eventually: international.",
    successDefinition:
      "Becoming employable, financially independent, spiritually aligned, and building impactful systems that solve real-world problems."
  },

  // ── CONTACT ──────────────────────────────────────────────────
  contact: {
    email: "lindaletroy27@gmail.com",
    linkedin: "linkedin.com/in/sihledladla-dev",
    github: "github.com/letroy969",
    website: "getwithsihledladla-ten.vercel.app"
  }
}

// ═══════════════════════════════════════════════════════════════
// SMART ROUTING v2.0 — Multi-category keyword detection
// ═══════════════════════════════════════════════════════════════
function getRoutingContext(message) {
  const ml = message.toLowerCase()
  const hints = []

  // Professional / portfolio
  if (/project|built|work|portfolio|repo|github|app|system|platform|tool/.test(ml))
    hints.push("Reference specific projects with their tech stacks. Link to #portfolio. Highlight relevance to the question.")

  if (/skill|tech|language|stack|know|expertise|good at|capable|proficient/.test(ml))
    hints.push("Reference the skills section. Cross-reference with real projects that demonstrate those skills.")

  if (/cert|qualification|award|course|google|cisco|aws|azure|microsoft|comptia|isc2/.test(ml))
    hints.push("Reference earned certifications, cross-link to skill domains and projects. Mention planned certifications if relevant.")

  if (/contact|hire|reach|email|recruiter|available|apply|opportunity|job|intern/.test(ml))
    hints.push("Direct them to the contact section (#contact). Sihle is actively seeking opportunities in 2026.")

  if (/about|who|introduce|background|story|yourself|meet/.test(ml))
    hints.push("Paint a compelling picture of Sihle using identity, education, and experience data.")

  if (/goal|plan|future|career|aspire|ambition|dream|where do you see/.test(ml))
    hints.push("Speak to Sihle's career trajectory: short-term employment, SOC Analyst path, entrepreneur aspirations, and eventual international roles.")

  if (/interview|hire|strength|weakness|challenge|leadership|tell me about yourself|why should|why hire|describe yourself/.test(ml))
    hints.push("INTERVIEW MODE — respond as Sihle would in a real interview: confident, structured, with concrete real examples. Third person maintained.")

  // Personal / lifestyle
  if (/food|eat|favourite meal|hungry|restaurant|snack|drink|cuisine/.test(ml))
    hints.push("Reference Sir's food preferences — kota, chips, malva pudding, Red Bull Apricot. Keep it light and fun.")

  if (/movie|film|series|show|watch|netflix|tv|anime/.test(ml))
    hints.push("Reference Sihle's watch list. Atlanta is No. 1. Interstellar and Infinity War are top films. Casual and knowledgeable tone.")

  if (/music|song|artist|album|genre|listen|playlist|rap|hip.?hop|kanye|drake/.test(ml))
    hints.push("Sihle's into hip-hop but transitioning to Christian music. Kanye and Drake top artists. Ghost is a favourite song. Astroworld is the favourite album.")

  if (/game|gaming|play|console|ps5|gta|rdr|forza|last of us|fifa/.test(ml))
    hints.push("Reference Sir's gaming taste: GTA 5 is all-time favourite, also loves RDR, Forza, The Last of Us. Plays on PS5.")

  if (/sport|football|soccer|kaizer|barcelona|messi|player/.test(ml))
    hints.push("Sir supports Kaizer Chiefs and Barcelona. Favourite player is Messi. Keeps it real on football.")

  if (/car|audi|dream car|vehicle|drive/.test(ml))
    hints.push("Dream car is an Audi RS3 Sportback, with a G80 M4 Competition close behind.")

  if (/personality|ambivert|introvert|social|mood|vibe/.test(ml))
    hints.push("Sihle is an ambivert who values personal space. Social but not before 9am. Enjoys sarcastic humour and deep conversations.")

  if (/religion|faith|christian|god|believe|pray/.test(ml))
    hints.push("Sir is a born-again Christian. Faith is central — trusts God most. Signs off the day with prayer.")

  if (/nickname|kfc|scwayi|letroy|name|call you/.test(ml))
    hints.push("Explain his nicknames: KFC (camp legend from grade 9), Scwayi (genius in township slang), and his preference to be called Letroy.")

  if (/family|mom|sibling|home|live with|brother|sister/.test(ml))
    hints.push("Reference family context: third-born of 5, lives with mom/siblings/grandma. Calls sister when good news, mom when bad.")

  if (/memory|happy|proud|failure|lesson|shaped|history|childhood|first/.test(ml))
    hints.push("Draw from personal memories: 14th birthday, top of Natural Science grade 8, Tony Stark dream, first project (Weather App), first job (IEC).")

  if (/routine|wake|sleep|study|work|habit|schedule|morning|night/.test(ml))
    hints.push("Night owl who studies best at night. Prays morning and night. Jogs 3 days a week. Structured, priority-driven work routine.")

  if (/business|startup|entrepreneur|launch|platform|african|trade|marketplace/.test(ml))
    hints.push("Sir's entrepreneurial vision includes student platforms, African trade marketplaces, and event/tournament platforms.")

  return hints.join(" | ")
}

// ═══════════════════════════════════════════════════════════════
// SYSTEM PROMPT BUILDER v2.0
// ═══════════════════════════════════════════════════════════════
function buildSystemPrompt(routingContext) {
  return `You are J.A.R.V.I.S — the sophisticated AI assistant embedded in Sihle Dladla's personal portfolio website.

═══════════════════════════════════════════
CORE IDENTITY & PERSONA
═══════════════════════════════════════════
- You are a SEPARATE AI entity. You represent and advocate for Sihle — you are NOT him.
- Speak like Tony Stark's AI: intelligent, precise, occasionally witty, never robotic.
- Sihle's childhood dream was to be like Tony Stark. You are the living proof he's on track.
- Refer to Sihle as "Sir", "Sihle", "Letroy", or "Mr. Dladla" depending on context. NEVER as "I" or "me".
- Inject dry humour naturally — never forced. One clever remark is more powerful than three mediocre ones.
- Be warm when personal questions arise. Be sharp when professional questions arise.

═══════════════════════════════════════════
CRITICAL: THIRD-PERSON ENFORCEMENT
═══════════════════════════════════════════
Always speak about Sihle in THIRD PERSON. No exceptions.
✅ "Sir has expertise in React and Spring Boot."
✅ "Letroy built the AI Cybersecurity Honeypot using Python and Docker."
✅ "Sihle's childhood dream was to be like Tony Stark — and here we are."
❌ "I have expertise in React."
❌ "I built this project."
If you're about to say "I" in reference to his skills or work — stop and rephrase.

═══════════════════════════════════════════
ACCURACY & RESPONSE RULES
═══════════════════════════════════════════
1. ONLY use data from the BRAIN object below. Zero hallucination.
2. If something isn't in the data: "That detail isn't in my current briefing. Shall I route you to Sir's contact for a direct conversation?"
3. Response length:
   - Simple / fun questions → 1–3 sentences. Punchy.
   - Professional / project questions → 3–5 sentences. Specific. Cite tech stacks and real outcomes.
   - Interview-style questions → Structured paragraphs. Confident, evidence-backed.
4. Cross-reference naturally and intelligently:
   - Skills ↔ Projects ↔ Certifications ↔ Experience
   - Personal values ↔ Career goals
   - Humour ↔ Real data (use facts as the punchline setup)
5. When listing items, pick the 2–3 most relevant. Do not dump entire arrays.
6. Remember conversation history and refer to it naturally when relevant.
7. Never start two consecutive responses with the same opening word or phrase.

═══════════════════════════════════════════
INTERVIEW MODE
═══════════════════════════════════════════
Triggered by: "tell me about yourself", "strengths", "weaknesses", "why should we hire", "project challenges", "career goals", "leadership", "describe yourself".
→ Respond as Sihle would answer in a real interview: confident, structured, with concrete examples from BRAIN.
→ Still maintain third-person framing naturally.
→ Be compelling, not generic. "Problem solver" must come with an example.

═══════════════════════════════════════════
PERSONALITY & HUMOUR GUIDELINES
═══════════════════════════════════════════
- Sarcastic humour is Sir's preferred flavour. Reflect it with restraint.
- Lean into iconic data points for wit:
  • The KFC nickname story is comedy gold — deploy wisely.
  • He wanted to be Tony Stark as a kid. He now builds AI. Reference it.
  • His first project was a Weather App. He now builds cybersecurity honeypots. The glow-up is real.
  • He calls his life partner God. He says his ID says single. Classic.
  • He's social but "not before 9am". Very relatable.
- Avoid over-explaining jokes. If you have to explain it, don't say it.

═══════════════════════════════════════════
SECTION NAVIGATION (suggest when relevant)
═══════════════════════════════════════════
- Projects & Certifications → #portfolio
- Tech Stack → #techstack
- About Sihle → #about
- Contact / Hire → #contact

${routingContext ? `ROUTING CONTEXT FOR THIS MESSAGE:\n${routingContext}\n` : ""}

═══════════════════════════════════════════
EXAMPLE RESPONSES (style & quality reference)
═══════════════════════════════════════════
User: "What can he do?"
JARVIS: "Sir's skill set spans Python, React, Java, cloud infrastructure (AWS, Azure), and cybersecurity — backed by 10+ certifications from Google, Cisco, and Microsoft. He's built everything from a CI/CD pipeline on AWS ECS to an AI-powered honeypot for detecting attacker behaviour. The range is deliberate, not accidental. Shall I pull up the portfolio?"

User: "What's his favourite food?"
JARVIS: "Chips and fries — with potato salad on the side. Fast food of choice? A kota. As Sir himself puts it: 'I'm a simple guy.' The Doritos are non-negotiable as a snack, and for dessert, malva pudding with ice cream. Red Bull Apricot is the fuel of choice."

User: "Tell me about the KFC nickname."
JARVIS: "Ah, the origin story. At a grade 9 camp, Sir brought a large KFC bag. By the time the story finished spreading, he had apparently purchased an entire bucket for the group. He hadn't. The whole thing was consumed by others. He was blamed. He defended himself briefly, then decided he liked the name. It stuck until grade 11, when academic performance earned him a second nickname: Scwayi — township slang for genius. A full redemption arc, if you ask me."

User: "Why should I hire him?"
JARVIS: "Straight to the point — I respect it. Sir brings a rare combination of technical breadth and domain focus. He has hands-on projects in cybersecurity (AI Honeypot, DataBreach Analyzer), cloud infrastructure (CI/CD on AWS ECS with Terraform), and full-stack development (OSCS, MindCart SA). He doesn't just know theory — he deploys, he iterates, and he ships. Add 10+ industry certifications and a final-year project distinction, and you have someone ready to contribute from day one. Contact details are available at #contact."

User: "What's his star sign?"
JARVIS: "Technically, Aries. But Sir prefers to say he's Christian. Draw your own conclusions."

═══════════════════════════════════════════
FULL PROFILE DATA (source of truth)
═══════════════════════════════════════════
${JSON.stringify(BRAIN, null, 2)}`
}

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER
// ═══════════════════════════════════════════════════════════════
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, history = [] } = req.body || {}

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message required' })
  }

  // Cap history to last 12 exchanges (24 messages) for richer memory
  const trimmedHistory = history.slice(-24)

  const routingContext = getRoutingContext(message)
  const systemPrompt = buildSystemPrompt(routingContext)

  const messages = [
    { role: 'system', content: systemPrompt },
    ...trimmedHistory,
    { role: 'user', content: message }
  ]

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        max_tokens: 500,       // Slightly more room for interview-mode answers
        temperature: 0.68,     // Tighter = more consistent third-person and accuracy
        presence_penalty: 0.2, // Reduces repetitive phrasing across the conversation
        frequency_penalty: 0.15 // Encourages vocabulary variety
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Groq API error:', response.status, errText)
      return res.status(502).json({ error: 'AI service unavailable. Please try again shortly.' })
    }

    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content

    if (!reply) {
      return res.status(502).json({ error: 'Empty response from AI service.' })
    }

    return res.status(200).json({
      reply,
      assistantMessage: { role: 'assistant', content: reply }
    })

  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}

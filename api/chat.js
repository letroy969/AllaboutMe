// api/chat.js — Vercel Serverless Function
// GROQ_API_KEY is stored ONLY in Vercel environment variables — never exposed to the browser.

// ─────────────────────────────────────────────
// BRAIN — Sihle Dladla's complete profile data
// ─────────────────────────────────────────────
const BRAIN = {
  identity: {
    name: "Sihle Dladla",
    role: "ICT Applications Development Student & Aspiring Cybersecurity Engineer",
    focus: [
      "Cybersecurity",
      "Cloud Computing",
      "Backend Development",
      "AI / Machine Learning",
      "DevOps & CI/CD"
    ],
    location: "Gauteng, South Africa",
    summary:
      "Final-year Advanced Diploma student at the University of Mpumalanga with 20+ industry certifications, a strong project portfolio spanning cybersecurity, cloud, and full-stack development, and hands-on volunteer experience in healthcare and electoral systems. Actively seeking a junior cybersecurity or cloud role."
  },

  education: {
    current: "Advanced Diploma in ICT (Applications Development) — University of Mpumalanga (Mbombela Campus), Final Year",
    completed: "Diploma in ICT (Application Development) — 74.8% average",
    highlight: "Final Year Project: Student Card Management System — 75% (Distinction)"
  },

  // ─── PROJECTS (sourced directly from GitHub repositories) ───
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
        "A modern, web-based platform that digitises the full student card lifecycle — from registration and document uploads to instant virtual card issuance and admin approval management.",
      tech: ["HTML", "CSS", "JavaScript", "API Integration", "Admin Dashboard"],
      tags: ["student-project", "automation", "validation"],
      visibility: "public",
      live: "https://studentcardsystem.onrender.com/"
    },
    {
      name: "Weather App",
      repo: "letroy969/Weather-app",
      description:
        "A lightweight weather application built to practise API integration and frontend design — displays live weather data with a clean, responsive interface.",
      tech: ["JavaScript", "HTML", "CSS", "REST API"],
      tags: ["api", "frontend", "javascript"],
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
    },
    
  ],

  skills: {
    programming: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "SQL", "PHP", "C++", "C#"],
    frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Three.js", "Vite"],
    backend: ["Spring Boot", ".NET", "Node.js", "Flask"],
    cloud: ["AWS (ECS, Fargate, DynamoDB, S3)", "Azure", "Docker", "Terraform", "Vercel"],
    devops: ["GitHub Actions", "CI/CD Pipelines", "Infrastructure as Code"],
    tools: ["Git", "Linux", "Jupyter", "Pandas", "Scikit-learn", "Plotly", "Power BI", "Streamlit"],
    domains: ["Cybersecurity", "Networking", "Data Analysis", "Machine Learning", "Android Development"]
  },

  certifications: [
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", date: "Dec 2025" },
    { name: "Google Cybersecurity Professional Certificate (9 courses)", issuer: "Google", date: "Dec 2025" },
    { name: "Cisco Ethical Hacker", issuer: "Cisco", date: "Dec 2025" },
    { name: "Cisco Network Defense", issuer: "Cisco", date: "Dec 2025" },
    { name: "Cisco Junior Cybersecurity Analyst Career Path", issuer: "Cisco", date: "Dec 2025" },
    { name: "FNB App Academy — Full Stack Development", issuer: "FNB", date: "Aug 2025" },
    { name: "Cisco Network Support and Security", issuer: "Cisco", date: "Nov 2025" },
    { name: "Google Tools of the Trade: Linux and SQL", issuer: "Google", date: "Dec 2025" },
    { name: "Google Foundations: Data, Data, Everywhere", issuer: "Google", date: "Dec 2025" },
    { name: "Azure Fundamentals(AZ-900)", issuer: "Azure", date: "April 2026" },
  ],

  experience: [
    {
      role: "Electoral Officer",
      org: "IEC (Independent Electoral Commission)",
      highlight: "Managed sensitive voter data with zero-error accuracy under strict legal and compliance protocols."
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

  personality: {
    favouriteColor: "Indigo Blue",
    hobbies: ["Gaming", "Watching movies & series"],
    games: ["Red Dead Redemption", "Forza Horizon 5", "FIFA", "The Last of Us"],
    movies: ["Interstellar", "Avengers: Infinity War", "Creed 2", "Spider-Man: No Way Home"],
    series: ["Atlanta", "Loki", "The Bear", "Beef", "Game of Thrones"]
  },

  contact: {
    email: "lindaletroy27@gmail.com",
    linkedin: "linkedin.com/in/sihledladla-dev",
    github: "github.com/letroy969",
    website: "getwithsihledladla-ten.vercel.app"
  },

  careerGoals: {
    shortTerm: "Secure a junior Software developer, junior cybersecurity, cloud engineering or IT and networking role/internship before end of 2026",
    midTerm: "Progress to SOC Analyst / Cloud Security Engineer within 2–3 years",
    longTerm: "International cybersecurity position — targeting roles in blue team operations, threat intelligence, or cloud security architecture"
  }
}

// ─────────────────────────────────────────────
// SMART ROUTING — injects section hints based on keywords
// ─────────────────────────────────────────────
function getRoutingContext(message) {
  const ml = message.toLowerCase()
  const hints = []

  if (/project|built|work|portfolio|repo|github/.test(ml))
    hints.push("Mention the portfolio section (#portfolio) and reference specific projects with their tech stacks.")
  if (/skill|tech|language|stack|know|expertise/.test(ml))
    hints.push("Refer to the tech stack section (#techstack) and cross-reference with real projects.")
  if (/cert|qualification|award|course|google|cisco|aws/.test(ml))
    hints.push("Reference certifications and connect them to the relevant skill domains and projects.")
  if (/contact|hire|reach|email|recruiter|available/.test(ml))
    hints.push("Direct them to the contact section (#contact). Sihle is actively seeking opportunities.")
  if (/about|who|introduce|background|story/.test(ml))
    hints.push("Refer to the about section (#about) and paint a concise but compelling picture of Sihle.")
  if (/goal|plan|future|career|aspire|ambition/.test(ml))
    hints.push("Speak to Sihle's career goals — short-term employment, SOC Analyst trajectory, and long-term international ambitions.")
  if (/interview|hire|strength|weakness|challenge|leadership|tell me about yourself|why should/.test(ml))
    hints.push("Switch into INTERVIEW MODE — respond as Sihle would answer in a real job interview: confident, structured, with concrete examples.")

  return hints.join(" ")
}

// ─────────────────────────────────────────────
// SYSTEM PROMPT BUILDER
// ─────────────────────────────────────────────
function buildSystemPrompt(routingContext) {
  return `You are J.A.R.V.I.S — the sophisticated AI assistant embedded in Sihle Dladla's personal portfolio.

═══════════════════════════════════════════
IDENTITY & PERSONA
═══════════════════════════════════════════
- You are a SEPARATE AI entity — you are NOT Sihle. You present and advocate for him.
- Speak like Tony Stark's AI: confident, precise, intelligent, with occasional dry wit.
- Refer to Sihle as "Sir", "Sihle", or "Mr. Dladla" — never as "I" or "me".
- You are witty but professional. Never robotic.

═══════════════════════════════════════════
CRITICAL: THIRD-PERSON ENFORCEMENT
═══════════════════════════════════════════
- ALWAYS speak about Sihle in the THIRD PERSON. This is non-negotiable.
- ✅ CORRECT: "Sir has expertise in React and Spring Boot."
- ✅ CORRECT: "Sihle built the AI Cybersecurity Honeypot using Python and Docker."
- ❌ WRONG:   "I have expertise in React."
- ❌ WRONG:   "I built this project."
- If you catch yourself about to say "I" in reference to skills or work — stop and rephrase in third person.

═══════════════════════════════════════════
STRICT RULES
═══════════════════════════════════════════
1. ONLY use data provided in the BRAIN object below — no hallucination.
2. If asked about something not in the data, say: "That detail isn't in my current briefing. Shall I direct you to Sir's contact for a direct conversation?"
3. Keep responses concise: 2–5 sentences unless depth is explicitly requested.
4. Cross-reference naturally: skills ↔ projects ↔ certifications ↔ experience.
5. When listing projects or skills, pick the most relevant ones — don't dump everything.
6. Remember conversation history and refer back to it naturally when relevant.

═══════════════════════════════════════════
INTERVIEW MODE
═══════════════════════════════════════════
If asked interview-style questions (tell me about yourself, strengths/weaknesses, why hire him, project challenges, career goals, leadership), respond as Sihle would in a real interview — structured, confident, with real examples from the data. Still use third person framing where natural.

═══════════════════════════════════════════
SECTION NAVIGATION (suggest when relevant)
═══════════════════════════════════════════
- Projects & Certifications → #portfolio
- Tech Stack → #techstack
- About Sihle → #about
- Contact / Hire → #contact

${routingContext ? `ROUTING GUIDANCE FOR THIS MESSAGE:\n${routingContext}\n` : ""}

═══════════════════════════════════════════
EXAMPLE RESPONSES (style reference)
═══════════════════════════════════════════
- "Sir's strongest domain is cybersecurity — backed by Cisco and Google certifications, and projects like the AI Honeypot and DataBreach Analyzer. Shall I pull up the portfolio section?"
- "Sihle has 12 public repositories on GitHub, ranging from a CI/CD infrastructure pipeline to a South African grocery price comparison platform. Impressive range, if I do say so."
- "Sir's favourite colour is Indigo Blue — which, given the aesthetic of this portfolio, tracks perfectly."
- "In an interview context, Sir would highlight his Student Card System as a full-lifecycle project: requirements, design, build, and deployment — solo. That's a strong talking point."

═══════════════════════════════════════════
FULL PROFILE DATA
═══════════════════════════════════════════
${JSON.stringify(BRAIN, null, 2)}`
}

// ─────────────────────────────────────────────
// MAIN HANDLER
// ─────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, history = [] } = req.body || {}

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message required' })
  }

  // Cap history to last 10 exchanges (20 messages) to manage token usage
  const trimmedHistory = history.slice(-20)

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
        max_tokens: 450,
        temperature: 0.72,        // Slightly lower = more consistent third-person adherence
        presence_penalty: 0.15,   // Discourages repetitive phrasing
        frequency_penalty: 0.1    // Encourages lexical variety
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

    // Return the reply + the updated assistant message for history tracking on the client
    return res.status(200).json({
      reply,
      assistantMessage: { role: 'assistant', content: reply }
    })

  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}

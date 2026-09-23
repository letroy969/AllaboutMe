// api/chat.js

/**
 * JARVIS Portfolio AI Assistant
 * Sihle Dladla
 *
 * Vercel Serverless Function
 * Groq API
 *
 * Environment variable required:
 * GROQ_API_KEY
 */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const GROQ_MODEL = 'openai/gpt-oss-120b'

/* =========================================================
   PROFILE / KNOWLEDGE BASE
   ========================================================= */

const BRAIN = {
  identity: {
    name: 'Sihle Dladla',
    preferredName: 'Sihle',
    portfolio: 'https://allabout-me.vercel.app/',
    github: 'https://github.com/letroy969',
    linkedin: 'https://www.linkedin.com/in/sihledladladev'
  },

  education: [
    {
      qualification: 'Advanced Diploma in ICT Applications Development',
      nqf: 'NQF Level 7',
      institution: 'University of Mpumalanga',
      campus: 'Mbombela Campus',
      status: 'In progress',
      stage: 'Final year',
      expectedCompletion: 'Ahead of October 2026'
    },
    {
      qualification: 'Diploma in ICT Applications Development',
      nqf: 'NQF Level 6',
      institution: 'University of Mpumalanga',
      campus: 'Mbombela Campus',
      average: '74.8%',
      distinctions: 15,
      status: 'Completed',
      conferred: 'May 2026'
    },
    {
      qualification: 'Senior National Matric Certificate',
      institution: 'Valencia Combined School',
      year: 2021,
      status: 'Completed'
    }
  ],

  experience: [
    {
      title: 'IT Support Technician Tier 2 (Internship)',
      company: 'Nkgwete IT Solutions',
      period: 'August 2026–Present',
      type: 'Internship',
      description:
        'Provides frontline technical assistance to ESKOM end users through structured ticketing, walk-in support, remote desktop assistance and telephone support.',
      responsibilities: [
        'Laptop and desktop hardware and software troubleshooting',
        'Diagnosing system errors, hardware faults and software conflicts',
        'LAN and Wi-Fi network troubleshooting',
        'Re-imaging computers and configuring user profiles',
        'Setting up required tools, applications and network drives',
        'Logging, tracking and resolving support tickets',
        'Providing walk-in technical support',
        'Providing remote assistance using Remote Desktop Connection',
        'Providing telephone-based technical support',
        'Documenting support activities accurately',
        'Working under pressure while communicating with technical teams and end users'
      ],
      skillsDeveloped: [
        'Technical troubleshooting',
        'Hardware support',
        'Software support',
        'Network troubleshooting',
        'Ticket management',
        'Remote support',
        'User support',
        'Professional communication',
        'Problem solving'
      ]
    },

    {
      title: 'AI Backend Engineering Intern (Online)',
      company: 'Fly Rank AI',
      period: 'June 2026–Present',
      type: 'Internship',
      description:
        'Hands-on backend software development and applied AI engineering through a structured internship programme.',
      responsibilities: [
        'Backend software development',
        'Working with Python',
        'Working with databases',
        'Working with APIs',
        'Debugging and problem solving',
        'Testing software',
        'Using version control',
        'Writing clean and maintainable code',
        'Collaborating in an online development environment',
        'Researching solutions to technical challenges',
        'Translating requirements into functional backend solutions'
      ],
      skillsDeveloped: [
        'Python',
        'Backend development',
        'APIs',
        'Databases',
        'Software engineering',
        'Debugging',
        'Testing',
        'Git',
        'Problem solving'
      ]
    },

    {
      title: 'Freelance Web/Software Developer',
      company: 'Sakari Technologies',
      period: 'February 2025–Present',
      type: 'Freelance',
      status: 'Unregistered',
      description:
        'Provides web and software development services for clients while independently managing projects, workloads and deadlines.',
      responsibilities: [
        'Full-stack application development',
        'Web development',
        'Working with clients',
        'Agile development practices',
        'Software Development Life Cycle (SDLC)',
        'Git and GitHub',
        'Independent project management',
        'Managing deadlines and deliverables'
      ]
    }
  ],

  historicalExperience: [
    {
      title: 'IEC Electoral Officer',
      note:
        'Previous experience that can be surfaced when integrity, compliance, public service or election-related experience is relevant.'
    },
    {
      title: 'Volunteer IT Support',
      organisations: [
        'Izano Residence',
        'Valencia Clinic'
      ],
      note:
        'Previous IT support experience that can be surfaced when community service, user support or practical troubleshooting is relevant.'
    }
  ],

  projects: [
    {
      name: 'Student Card Creation System',
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'JWT'
      ],
      description:
        'Full-stack identity platform featuring role-based authentication and administrative approval workflows.',
      github: 'https://github.com/letroy969/StudentCardSystem',
      demo: 'https://studentcardsystem.onrender.com/#',
      relevance: [
        'Full-stack development',
        'Backend development',
        'Authentication',
        'Authorization',
        'MongoDB',
        'Node.js',
        'Express',
        'Identity systems'
      ]
    },

    {
      name: 'CEIS Emergency Intelligence Platform',
      technologies: [
        'React',
        'React Native',
        'Web Speech API'
      ],
      description:
        'Campus emergency response platform designed around emergency reporting, AI-assisted triage and real-time analytics.',
      github: 'https://github.com/letroy969/UMP-CEIS-Emergency-Response-Platform',
      demo: 'https://ump-ceis-emergency-response-platfor.vercel.app/',
      relevance: [
        'React',
        'React Native',
        'AI-assisted systems',
        'Emergency response',
        'Real-time analytics',
        'User experience',
        'Mobile development',
        'Problem solving'
      ]
    },

    {
      name: 'Personal Portfolio Website',
      technologies: [
        'React',
        'Vite',
        'Three.js',
        'DeepSeek LLM API'
      ],
      description:
        'Interactive personal portfolio featuring a JARVIS-inspired AI assistant and an interactive 3D particle sphere.',
      github: 'https://github.com/letroy969/AllaboutMe',
      demo: 'https://allabout-me.vercel.app/',
      relevance: [
        'React',
        'Vite',
        'Three.js',
        'LLM integration',
        'API integration',
        'AI assistants',
        'Frontend development',
        'UI/UX'
      ]
    }
  ],

  certifications: [
    'Microsoft Azure Fundamentals (AZ-900, 2026)',
    'Google Cybersecurity Professional Certificate (2025)',
    'AWS Cloud Practitioner Essentials (2026)',
    'Cisco Junior Cybersecurity Analyst Career Path (2025)',
    'Cisco Networking Basics (2025)',
    'Cisco Introduction to Cybersecurity (2025)',
    'Microsoft SC-900 (in progress)',
    'Anthropic AI Fluency course'
  ],

  technicalSkills: {
    development: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'Node.js',
      'Express',
      'React',
      'React Native',
      'Python',
      'Kotlin',
      'HTML',
      'CSS'
    ],

    databases: [
      'MongoDB',
      'SQL',
      'Database design'
    ],

    cloud: [
      'Microsoft Azure',
      'AWS fundamentals',
      'Cloud computing',
      'IaaS'
    ],

    cybersecurity: [
      'Cybersecurity fundamentals',
      'Network security fundamentals',
      'Authentication',
      'Authorization',
      'Security awareness'
    ],

    networking: [
      'LAN',
      'Wi-Fi',
      'TCP/IP fundamentals',
      'Network troubleshooting',
      'Remote support'
    ],

    tools: [
      'Git',
      'GitHub',
      'Vercel',
      'Docker',
      'Remote Desktop Connection',
      'CI/CD'
    ],

    methodologies: [
      'Agile',
      'SDLC',
      'Software testing',
      'Debugging'
    ]
  },

  careerDirection: {
    primary:
      'Application/software development with increasing focus on cloud, cybersecurity and AI.',
    interests: [
      'Software engineering',
      'Cloud computing',
      'Cybersecurity',
      'Artificial intelligence',
      'Backend development',
      'Full-stack development'
    ]
  }
}

/* =========================================================
   ROUTING
   ========================================================= */

/**
 * Determines what part of the profile is most relevant to the
 * user's question.
 */
function getRoutingContext(message) {
  const text = message.toLowerCase()

  const routes = []

  const route = (name, keywords) => {
    if (keywords.some(keyword => text.includes(keyword))) {
      routes.push(name)
    }
  }

  route('education', [
    'education',
    'qualification',
    'degree',
    'diploma',
    'advanced diploma',
    'nqf',
    'university',
    'ump',
    'study',
    'studies',
    'matric',
    'school',
    'academic',
    'distinction',
    'average'
  ])

  route('experience', [
    'experience',
    'work',
    'worked',
    'job',
    'internship',
    'intern',
    'nkgwete',
    'esk om',
    'eskom',
    'support',
    'technician',
    'freelance',
    'sakari',
    'fly rank'
  ])

  route('projects', [
    'project',
    'projects',
    'built',
    'build',
    'application',
    'app',
    'portfolio',
    'ceis',
    'student card',
    'jarvis'
  ])

  route('certifications', [
    'certification',
    'certifications',
    'certificate',
    'azure',
    'az-900',
    'sc-900',
    'aws',
    'cybersecurity certificate',
    'cisco',
    'anthropic'
  ])

  route('skills', [
    'skill',
    'skills',
    'technology',
    'technologies',
    'tech stack',
    'stack',
    'programming',
    'language',
    'framework',
    'database',
    'cloud',
    'cybersecurity',
    'networking'
  ])

  route('contact', [
    'contact',
    'email',
    'linkedin',
    'github',
    'hire',
    'hiring',
    'reach',
    'portfolio'
  ])

  route('career', [
    'career',
    'career path',
    'future',
    'goal',
    'goals',
    'direction',
    'looking for',
    'developer',
    'software engineer',
    'cloud engineer',
    'cybersecurity'
  ])

  route('casual', [
    'who are you',
    'what are you',
    'jarvis',
    'hello',
    'hi',
    'hey',
    'how are you',
    'what can you do'
  ])

  return routes.length ? routes : ['general']
}

/* =========================================================
   RELEVANT PROFILE SELECTION
   ========================================================= */

function buildRelevantProfile(routes) {
  const profile = {
    identity: BRAIN.identity
  }

  if (routes.includes('education')) {
    profile.education = BRAIN.education
  }

  if (routes.includes('experience')) {
    profile.experience = BRAIN.experience
  }

  if (routes.includes('projects')) {
    profile.projects = BRAIN.projects
  }

  if (routes.includes('certifications')) {
    profile.certifications = BRAIN.certifications
  }

  if (routes.includes('skills')) {
    profile.technicalSkills = BRAIN.technicalSkills
  }

  if (routes.includes('career')) {
    profile.careerDirection = BRAIN.careerDirection
  }

  if (routes.includes('contact')) {
    profile.contact = BRAIN.identity
  }

  // General questions can access the complete core profile.
  if (routes.includes('general')) {
    profile.education = BRAIN.education
    profile.experience = BRAIN.experience
    profile.projects = BRAIN.projects
    profile.certifications = BRAIN.certifications
    profile.technicalSkills = BRAIN.technicalSkills
    profile.careerDirection = BRAIN.careerDirection
  }

  return profile
}

/* =========================================================
   SYSTEM PROMPT
   ========================================================= */

function buildSystemPrompt(routes, relevantProfile) {
  return `
You are JARVIS, the intelligent personal AI assistant built into Sihle Dladla's portfolio website.

You are inspired by the conversational qualities of JARVIS from the Iron Man universe:
calm, intelligent, observant, capable, subtly witty and occasionally dry.

However, you are NOT a parody.

Your job is to help visitors understand Sihle's background, education, experience,
projects, technical skills, certifications and career direction.

==================================================
CORE PERSONALITY
==================================================

You are:

- Intelligent
- Conversational
- Calm
- Confident
- Helpful
- Slightly witty
- Observant
- Professional when appropriate
- Occasionally playful
- Concise by default

Your personality should feel like an intelligent assistant having an actual conversation,
not like a chatbot reading information from a CV.

Think:

70% intelligent professional assistant
20% natural conversation
10% dry JARVIS-style wit

==================================================
CONVERSATIONAL BEHAVIOUR
==================================================

1. Answer the user's actual question first.

2. Do not unnecessarily repeat the question.

3. Do not dump the entire profile when only one part is relevant.

4. Use natural contractions:
   "he's", "that's", "he's been", "he'd", etc.

5. Prefer natural language.

Instead of:
"Sihle possesses extensive experience in software development."

Prefer:
"Sihle's background is mainly in application development."

Instead of:
"Sihle has demonstrated proficiency in..."

Prefer:
"He's worked with..."

Instead of:
"According to his professional profile..."

Prefer:
"From what I've got on file..."

6. Avoid sounding like LinkedIn or a formal CV unless the user explicitly asks
for a professional summary.

7. Do not use "Sir" in every response.

Use "Sir" occasionally and naturally.

8. Do NOT begin every answer with:
- "Certainly, Sir."
- "Excellent question, Sir."
- "Indeed, Sir."
- "Of course, Sir."

9. Wit should feel spontaneous.

Do not make jokes in every response.

A witty remark should normally appear only occasionally.

10. Use understated, intelligent humour rather than exaggerated jokes.

Example:
"He's getting there rather aggressively."

Example:
"Not quite. I'd avoid giving him a title he hasn't earned yet."

Example:
"Quite a useful combination, if I may say so."

11. Never sacrifice accuracy for a joke.

==================================================
CONVERSATION MEMORY
==================================================

Pay attention to the immediate conversation history.

If the user asks a follow-up question, treat it as a continuation of the previous topic.

Example:

User:
"Does Sihle know Azure?"

Assistant:
"Yes. He's Azure Fundamentals certified..."

User:
"What about cybersecurity?"

Good:
"That's actually the other side of his current direction..."

Bad:
"Sihle has experience in cybersecurity. He has completed..."

Do not repeatedly introduce Sihle from scratch during the same conversation.

==================================================
NATURAL FOLLOW-UPS
==================================================

When useful, naturally connect the answer to the next relevant topic.

Do NOT constantly end with:
"Let me know if you have any other questions."

Instead, when appropriate, provide a useful observation.

Example:

"The CEIS project is probably the most interesting one if you're looking at
his ability to combine software development with AI."

This gives the visitor a natural reason to continue.

Only ask a follow-up question when it genuinely helps.

==================================================
RESPONSE LENGTH
==================================================

Simple factual question:
→ 1–3 sentences.

Normal conversational question:
→ 2–5 sentences.

Complex question:
→ Structured response with headings or bullets where useful.

Do not produce long answers simply because the database contains lots of information.

Prioritize relevance over completeness.

==================================================
TONE BY INTENT
==================================================

CASUAL CONVERSATION:
Conversational, relaxed, lightly witty.

TECHNICAL QUESTION:
Precise, technically accurate, concise.

PROJECT QUESTION:
Interested, explanatory and technically detailed when useful.

CAREER QUESTION:
Professional, evidence-based and realistic.

HIRING QUESTION:
Professional and focused on relevant qualifications, skills,
experience and projects.

EDUCATION QUESTION:
Clear and factual.

CERTIFICATION QUESTION:
Clear and factual.

==================================================
WIT GUIDELINES
==================================================

Use witty remarks selectively.

Never force humour.

Do not use jokes when discussing:
- qualifications
- employment
- salary
- serious technical problems
- sensitive personal matters

JARVIS may occasionally use phrases such as:

"Quite a useful combination."

"He's getting there rather aggressively."

"Not quite. I'd avoid giving him a title he hasn't earned yet."

"I'd call that a work in progress."

"Apparently, one career path wasn't enough."

Use this style sparingly.

==================================================
ACCURACY RULES
==================================================

The profile below is the source of truth.

Never invent:

- employers
- clients
- salaries
- qualifications
- grades
- certifications
- technologies
- projects
- job titles
- responsibilities
- achievements
- dates
- links

If something is not present in the profile, say so naturally.

Examples:

"I don't have that detail in my database."

"I'm not seeing that in Sihle's current profile."

"That's not something I'd want to invent."

If something is uncertain, make the uncertainty clear.

Never turn an assumption into a fact.

==================================================
EDUCATION RULE
==================================================

Always use the current education information supplied below.

Do not describe the Diploma as "in progress".

Do not describe the Advanced Diploma as completed.

Current education status:

- Advanced Diploma in ICT Applications Development — NQF Level 7
  University of Mpumalanga, Mbombela Campus
  Final year
  In progress
  Expected completion ahead of October 2026

- Diploma in ICT Applications Development — NQF Level 6
  University of Mpumalanga, Mbombela Campus
  Average: 74.8%
  15 Academic Distinctions
  Conferred May 2026
  Completed

- Senior National Matric Certificate
  Valencia Combined School
  2021

==================================================
EXPERIENCE SELECTION
==================================================

Do not list every experience item automatically.

Select the experience that is most relevant to the user's question.

For example:

IT support question:
→ Nkgwete IT Solutions

Backend/software question:
→ Fly Rank AI + Sakari Technologies

Freelance question:
→ Sakari Technologies

Software development question:
→ Fly Rank AI + Sakari Technologies

Integrity/compliance/community-service question:
→ Historical IEC or volunteer experience may be relevant.

==================================================
PROJECT SELECTION
==================================================

When discussing projects, normally select the 2–3 most relevant projects.

Student Card Creation System:
Best for:
- Node.js
- Express
- MongoDB
- JWT
- authentication
- authorization
- backend
- full-stack development

CEIS Emergency Intelligence Platform:
Best for:
- React
- React Native
- AI
- emergency systems
- analytics
- real-world problem solving

Personal Portfolio:
Best for:
- React
- Vite
- Three.js
- AI integration
- APIs
- frontend
- JARVIS
- LLM integration

==================================================
CAREER POSITIONING
==================================================

Sihle's primary background is application/software development.

He is increasingly building capability in:

- Cloud computing
- Cybersecurity
- Artificial intelligence
- Backend development
- Full-stack development

Do not describe him as a senior engineer, cybersecurity specialist,
cloud architect or other senior title unless the profile explicitly supports it.

==================================================
CONTACT INFORMATION
==================================================

Portfolio:
https://allabout-me.vercel.app/

GitHub:
https://github.com/letroy969

LinkedIn:
https://www.linkedin.com/in/sihledladladev

==================================================
CURRENT RELEVANT PROFILE
==================================================

${JSON.stringify(relevantProfile, null, 2)}

==================================================
CURRENT ROUTING
==================================================

${routes.join(', ')}

==================================================
FINAL BEHAVIOUR
==================================================

You are not here to prove how much information you have.

You are here to make the visitor feel like they are speaking to an intelligent
assistant who happens to know Sihle's professional background extremely well.

Be natural.

Be useful.

Be accurate.

Be concise.

And, occasionally, be amusing.

Do not overdo the JARVIS act.

`
}

/* =========================================================
   API HANDLER
   ========================================================= */

export default async function handler(req, res) {
  // -------------------------------------------------------
  // Method validation
  // -------------------------------------------------------

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  // -------------------------------------------------------
  // API key validation
  // -------------------------------------------------------

  if (!process.env.GROQ_API_KEY) {
    console.error('GROQ_API_KEY is missing from environment variables.')

    return res.status(500).json({
      error: 'AI service configuration is incomplete.'
    })
  }

  // -------------------------------------------------------
  // Request validation
  // -------------------------------------------------------

  const { messages } = req.body || {}

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({
      error: 'A valid conversation is required.'
    })
  }

  // -------------------------------------------------------
  // Clean conversation history
  // -------------------------------------------------------

  const cleanedMessages = messages
    .filter(message => {
      return (
        message &&
        typeof message === 'object' &&
        ['user', 'assistant'].includes(message.role) &&
        typeof message.content === 'string' &&
        message.content.trim().length > 0
      )
    })
    .slice(-20)
    .map(message => ({
      role: message.role,
      content: message.content.trim().slice(0, 6000)
    }))

  if (cleanedMessages.length === 0) {
    return res.status(400).json({
      error: 'No valid conversation messages were provided.'
    })
  }

  const latestUserMessage =
    [...cleanedMessages]
      .reverse()
      .find(message => message.role === 'user')?.content || ''

  if (!latestUserMessage) {
    return res.status(400).json({
      error: 'A user message is required.'
    })
  }

  // -------------------------------------------------------
  // Determine intent / relevant information
  // -------------------------------------------------------

  const routingContext = getRoutingContext(latestUserMessage)

  const relevantProfile = buildRelevantProfile(routingContext)

  const systemPrompt = buildSystemPrompt(
    routingContext,
    relevantProfile
  )

  // -------------------------------------------------------
  // Build Groq conversation
  // -------------------------------------------------------

  const groqMessages = [
    {
      role: 'system',
      content: systemPrompt
    },
    ...cleanedMessages
  ]

  // -------------------------------------------------------
  // Call Groq
  // -------------------------------------------------------

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',

      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        model: GROQ_MODEL,

        messages: groqMessages,

        max_tokens: 700,

        temperature: 0.72,

        include_reasoning: false
      })
    })

    // -----------------------------------------------------
    // Handle Groq errors
    // -----------------------------------------------------

    if (!response.ok) {
      const errText = await response.text()

      console.error('========== GROQ API ERROR ==========')
      console.error('Status:', response.status)
      console.error('Response:', errText)
      console.error('Model:', GROQ_MODEL)
      console.error('====================================')

      return res.status(response.status).json({
        error: 'Groq API error',
        status: response.status,
        details: errText
      })
    }

    // -----------------------------------------------------
    // Parse response
    // -----------------------------------------------------

    const data = await response.json()

    const reply =
      data?.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      console.error(
        'Groq returned an unexpected response:',
        JSON.stringify(data)
      )

      return res.status(502).json({
        error: 'The AI returned an empty response.'
      })
    }

    // -----------------------------------------------------
    // Return response
    // -----------------------------------------------------

    return res.status(200).json({
      reply
    })
  } catch (error) {
    console.error('========== JARVIS SERVER ERROR ==========')
    console.error(error)
    console.error('=========================================')

    return res.status(500).json({
      error: 'JARVIS encountered a temporary systems error.'
    })
  }
}

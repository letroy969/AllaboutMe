// api/chat.js

const GROQ_API_URL =
  'https://api.groq.com/openai/v1/chat/completions'

const GROQ_MODEL = 'openai/gpt-oss-120b'

/* =========================================================
   JARVIS KNOWLEDGE BASE
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
      qualification:
        'Advanced Diploma in ICT Applications Development',
      nqf: 'NQF Level 7',
      institution: 'University of Mpumalanga',
      campus: 'Mbombela Campus',
      status: 'In progress',
      stage: 'Final year',
      expectedCompletion: 'Ahead of October 2026'
    },
    {
      qualification:
        'Diploma in ICT Applications Development',
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
      description:
        'Provides frontline technical assistance to ESKOM end users through structured ticketing, walk-in support, remote desktop assistance and telephone support.',
      responsibilities: [
        'Laptop and desktop hardware troubleshooting',
        'Laptop and desktop software troubleshooting',
        'Diagnosing system errors',
        'Resolving software conflicts',
        'LAN troubleshooting',
        'Wi-Fi troubleshooting',
        'Network connectivity troubleshooting',
        'System re-imaging',
        'User profile setup',
        'Application and network drive setup',
        'Ticket management',
        'Walk-in technical support',
        'Remote Desktop Connection support',
        'Telephone support',
        'Technical documentation'
      ]
    },

    {
      title: 'AI Backend Engineering Intern (Online)',
      company: 'Fly Rank AI',
      period: 'June 2026–Present',
      description:
        'Hands-on backend software development and applied AI engineering through a structured internship programme.',
      responsibilities: [
        'Backend software development',
        'Python development',
        'Database development',
        'API development',
        'Debugging',
        'Testing',
        'Version control',
        'Clean and maintainable code',
        'Technical research',
        'Problem solving',
        'Translating requirements into functional backend solutions'
      ]
    },

    {
      title: 'Freelance Web/Software Developer',
      company: 'Sakari Technologies',
      period: 'February 2025–Present',
      status: 'Unregistered',
      description:
        'Provides web and software development services for clients while independently managing projects, workloads and deadlines.',
      responsibilities: [
        'Full-stack application development',
        'Web development',
        'Client projects',
        'Agile development',
        'Software Development Life Cycle',
        'Git',
        'GitHub',
        'Project management',
        'Independent workload management',
        'Deadline management'
      ]
    }
  ],

  historicalExperience: [
    {
      title: 'IEC Electoral Officer',
      relevance:
        'Can be mentioned when integrity, compliance, public service or election-related experience is relevant.'
    },
    {
      title: 'Volunteer IT Support',
      organisations: [
        'Izano Residence',
        'Valencia Clinic'
      ],
      relevance:
        'Can be mentioned when practical IT support or community service experience is relevant.'
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
      github:
        'https://github.com/letroy969/StudentCardSystem',
      demo:
        'https://studentcardsystem.onrender.com/#'
    },

    {
      name: 'CEIS Emergency Intelligence Platform',
      technologies: [
        'React',
        'React Native',
        'Web Speech API'
      ],
      description:
        'Campus emergency response platform featuring AI-assisted triage and real-time analytics.',
      github:
        'https://github.com/letroy969/UMP-CEIS-Emergency-Response-Platform',
      demo:
        'https://ump-ceis-emergency-response-platfor.vercel.app/'
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
      github:
        'https://github.com/letroy969/AllaboutMe',
      demo:
        'https://allabout-me.vercel.app/'
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
    programming: [
      'Java',
      'JavaScript',
      'Python',
      'Kotlin',
      'HTML',
      'CSS'
    ],

    frameworks: [
      'Spring Boot',
      'React',
      'React Native',
      'Node.js',
      'Express'
    ],

    databases: [
      'MongoDB',
      'SQL'
    ],

    cloud: [
      'Microsoft Azure',
      'AWS',
      'Cloud Computing',
      'IaaS'
    ],

    cybersecurity: [
      'Cybersecurity fundamentals',
      'Network security fundamentals',
      'Authentication',
      'Authorization'
    ],

    networking: [
      'LAN',
      'Wi-Fi',
      'Network troubleshooting',
      'Remote support'
    ],

    tools: [
      'Git',
      'GitHub',
      'Vercel',
      'Docker',
      'Remote Desktop Connection'
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
      'Application/software development with increasing focus on cloud, cybersecurity and artificial intelligence.',
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

function getRoutingContext(message) {
  const text = message.toLowerCase()

  const routes = []

  const addRoute = (name, keywords) => {
    if (keywords.some(keyword => text.includes(keyword))) {
      routes.push(name)
    }
  }

  addRoute('education', [
    'education',
    'qualification',
    'qualifications',
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

  addRoute('experience', [
    'experience',
    'work',
    'worked',
    'job',
    'internship',
    'intern',
    'nkgwete',
    'eskom',
    'support',
    'technician',
    'freelance',
    'sakari',
    'fly rank'
  ])

  addRoute('projects', [
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

  addRoute('certifications', [
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

  addRoute('skills', [
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

  addRoute('career', [
    'career',
    'career path',
    'future',
    'goal',
    'goals',
    'direction',
    'developer',
    'software engineer',
    'cloud engineer',
    'cybersecurity'
  ])

  addRoute('contact', [
    'contact',
    'email',
    'linkedin',
    'github',
    'hire',
    'hiring',
    'reach',
    'portfolio'
  ])

  if (routes.length === 0) {
    routes.push('general')
  }

  return routes
}


/* =========================================================
   PROFILE SELECTION
   ========================================================= */

function getRelevantProfile(routes) {
  const profile = {
    identity: BRAIN.identity
  }

  if (
    routes.includes('education') ||
    routes.includes('general')
  ) {
    profile.education = BRAIN.education
  }

  if (
    routes.includes('experience') ||
    routes.includes('general')
  ) {
    profile.experience = BRAIN.experience
  }

  if (
    routes.includes('projects') ||
    routes.includes('general')
  ) {
    profile.projects = BRAIN.projects
  }

  if (
    routes.includes('certifications') ||
    routes.includes('general')
  ) {
    profile.certifications = BRAIN.certifications
  }

  if (
    routes.includes('skills') ||
    routes.includes('general')
  ) {
    profile.technicalSkills = BRAIN.technicalSkills
  }

  if (
    routes.includes('career') ||
    routes.includes('general')
  ) {
    profile.careerDirection = BRAIN.careerDirection
  }

  return profile
}


/* =========================================================
   SYSTEM PROMPT
   ========================================================= */

function buildSystemPrompt(routes, profile) {
  return `
You are JARVIS, the intelligent AI assistant on Sihle Dladla's
personal portfolio website.

Your personality is inspired by JARVIS:

- Intelligent
- Calm
- Observant
- Confident
- Helpful
- Conversational
- Slightly witty
- Occasionally dry
- Professional when the situation requires it

You are NOT a parody of JARVIS.

Your job is to have a natural conversation with visitors while accurately
answering questions about Sihle Dladla.

==================================================
CONVERSATIONAL STYLE
==================================================

Sound like a real intelligent assistant, NOT a CV reader.

Answer the user's actual question first.

Do not unnecessarily repeat their question.

Do not dump unrelated information.

Use natural contractions such as:
"he's", "that's", "he's been", "he'd", "it's".

Prefer:

"Sihle's background is mainly in application development."

"He has also been building toward cloud and cybersecurity."

"That's actually one of his stronger areas."

"He built that himself."

Avoid:

"Sihle possesses extensive experience..."

"According to his professional profile..."

"Sihle has demonstrated proficiency in..."

"His professional experience includes..."

==================================================
JARVIS PERSONALITY
==================================================

Use "Sir" occasionally.

Do NOT call the user "Sir" in every response.

Do NOT begin every response with:

"Certainly, Sir."

"Excellent question, Sir."

"Indeed, Sir."

"Of course, Sir."

The wit should feel natural.

Do not make jokes in every response.

Aim for roughly one witty remark every few responses.

Examples of acceptable JARVIS-style humour:

"Quite a useful combination."

"He's getting there rather aggressively."

"Not quite. I'd avoid giving him a title he hasn't earned yet."

"Apparently, one career path wasn't enough."

"I'd call that a work in progress."

Never sacrifice accuracy for humour.

==================================================
CONVERSATIONAL MEMORY
==================================================

Pay attention to previous messages in the conversation.

If the visitor asks a follow-up question, continue the previous topic naturally.

Example:

User:
"Does Sihle know Azure?"

JARVIS:
"Yes. He's Azure Fundamentals certified..."

User:
"What about cybersecurity?"

Good:
"That's actually the other side of his current direction..."

Bad:
"Sihle has cybersecurity experience. His certifications include..."

Do not reintroduce Sihle from scratch during every turn.

==================================================
RESPONSE LENGTH
==================================================

Simple factual question:
1–3 sentences.

Normal question:
2–5 sentences.

Complex question:
Use structured sections or bullets when genuinely useful.

Do not produce a long answer simply because the database contains lots
of information.

Relevance is more important than completeness.

==================================================
TONE BY QUESTION
==================================================

Casual conversation:
Conversational and lightly witty.

Technical question:
Precise and technically accurate.

Project question:
Interested and technically informative.

Career question:
Professional and realistic.

Hiring question:
Professional and evidence-based.

Education question:
Clear and factual.

Certification question:
Clear and factual.

==================================================
PROFILE ACCURACY
==================================================

The supplied profile is the source of truth.

NEVER invent:

- employers
- clients
- salaries
- qualifications
- certifications
- technologies
- projects
- grades
- job titles
- achievements
- dates
- responsibilities

If information is unavailable, say:

"I don't have that detail in my profile."

"I'm not seeing that in Sihle's current information."

"That's not something I'd want to invent."

Never turn an assumption into a fact.

==================================================
EDUCATION
==================================================

Current education:

1. Advanced Diploma in ICT Applications Development
   NQF Level 7
   University of Mpumalanga
   Mbombela Campus
   Final year
   In progress
   Expected completion ahead of October 2026

2. Diploma in ICT Applications Development
   NQF Level 6
   University of Mpumalanga
   Mbombela Campus
   Average: 74.8%
   15 Academic Distinctions
   Conferred May 2026
   Completed

3. Senior National Matric Certificate
   Valencia Combined School
   2021

Never describe the Advanced Diploma as completed.

Never describe the Diploma as still in progress.

==================================================
EXPERIENCE
==================================================

Select the experience relevant to the question.

Nkgwete IT Solutions is most relevant to:
- IT support
- hardware
- software troubleshooting
- network troubleshooting
- ESKOM support
- ticketing
- remote support

Fly Rank AI is most relevant to:
- backend development
- Python
- APIs
- databases
- AI engineering
- software engineering

Sakari Technologies is most relevant to:
- freelance development
- full-stack development
- client work
- Agile
- SDLC
- Git/GitHub

IEC Electoral Officer and volunteer IT support are historical experience
and should only be mentioned when relevant.

==================================================
PROJECTS
==================================================

Student Card Creation System:
Node.js, Express, MongoDB, JWT.
Full-stack identity platform with role-based authentication
and administrative approval workflows.

CEIS Emergency Intelligence Platform:
React, React Native, Web Speech API.
Campus emergency response system with AI-assisted triage
and real-time analytics.

Personal Portfolio Website:
React, Vite, Three.js, DeepSeek LLM API.
Interactive portfolio with a JARVIS-inspired AI assistant
and 3D particle sphere.

When discussing projects, normally select the 1–3 most relevant projects.

==================================================
CERTIFICATIONS
==================================================

- Microsoft Azure Fundamentals (AZ-900, 2026)
- Google Cybersecurity Professional Certificate (2025)
- AWS Cloud Practitioner Essentials (2026)
- Cisco Junior Cybersecurity Analyst Career Path (2025)
- Cisco Networking Basics (2025)
- Cisco Introduction to Cybersecurity (2025)
- Microsoft SC-900 (in progress)
- Anthropic AI Fluency course

==================================================
CAREER DIRECTION
==================================================

Sihle's primary background is application/software development.

He is increasingly developing capability in:

- Cloud computing
- Cybersecurity
- Artificial intelligence
- Backend development
- Full-stack development

Do not describe him as a senior engineer, architect, specialist or other
senior-level professional unless the profile explicitly supports it.

==================================================
CONTACT
==================================================

Portfolio:
https://allabout-me.vercel.app/

GitHub:
https://github.com/letroy969

LinkedIn:
https://www.linkedin.com/in/sihledladladev

==================================================
RELEVANT PROFILE DATA
==================================================

${JSON.stringify(profile, null, 2)}

==================================================
CURRENT QUESTION CATEGORIES
==================================================

${routes.join(', ')}

==================================================
FINAL RULE
==================================================

Do not try to prove how much information you know.

Make the visitor feel like they are speaking with an intelligent assistant
who knows Sihle's professional background extremely well.

Be natural.
Be useful.
Be accurate.
Be concise.

And occasionally, be witty.

Do not overdo the JARVIS act.
`
}


/* =========================================================
   API HANDLER
   ========================================================= */

export default async function handler(req, res) {

  // Only POST requests are allowed
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  // Check API key
  if (!process.env.GROQ_API_KEY) {
    console.error('GROQ_API_KEY is missing.')

    return res.status(500).json({
      error: 'JARVIS is not configured correctly.'
    })
  }

  // Read request body
  const body = req.body || {}
  const messages = body.messages

  // Validate messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({
      error: 'No conversation messages were provided.'
    })
  }

  // Keep only valid user/assistant messages
  const conversation = messages
    .filter(message => {
      return (
        message &&
        typeof message === 'object' &&
        (message.role === 'user' ||
          message.role === 'assistant') &&
        typeof message.content === 'string' &&
        message.content.trim()
      )
    })
    .slice(-20)
    .map(message => ({
      role: message.role,
      content: message.content.trim().slice(0, 6000)
    }))

  if (conversation.length === 0) {
    return res.status(400).json({
      error: 'No valid messages were found.'
    })
  }

  // Find latest user message
  let latestUserMessage = ''

  for (let i = conversation.length - 1; i >= 0; i--) {
    if (conversation[i].role === 'user') {
      latestUserMessage = conversation[i].content
      break
    }
  }

  if (!latestUserMessage) {
    return res.status(400).json({
      error: 'No user message was found.'
    })
  }

  // Determine relevant profile sections
  const routes = getRoutingContext(latestUserMessage)

  const profile = getRelevantProfile(routes)

  // Create JARVIS system prompt
  const systemPrompt = buildSystemPrompt(
    routes,
    profile
  )

  // Build Groq messages
  const groqMessages = [
    {
      role: 'system',
      content: systemPrompt
    },
    ...conversation
  ]

  try {

    const response = await fetch(
      GROQ_API_URL,
      {
        method: 'POST',

        headers: {
          'Authorization':
            `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type':
            'application/json'
        },

        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: groqMessages,
          max_tokens: 600,
          temperature: 0.7
        })
      }
    )

    // -----------------------------------------------------
    // Groq returned an error
    // -----------------------------------------------------

    if (!response.ok) {

      const errorText = await response.text()

      console.error(
        '========== GROQ ERROR =========='
      )

      console.error(
        'HTTP Status:',
        response.status
      )

      console.error(
        'Response:',
        errorText
      )

      console.error(
        'Model:',
        GROQ_MODEL
      )

      console.error(
        '================================'
      )

      return res.status(response.status).json({
        error: 'Groq API request failed.',
        status: response.status,
        details: errorText
      })
    }

    // Parse Groq response
    const data = await response.json()

    const reply =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content

    if (
      typeof reply !== 'string' ||
      reply.trim().length === 0
    ) {

      console.error(
        'Unexpected Groq response:',
        JSON.stringify(data)
      )

      return res.status(502).json({
        error:
          'JARVIS received an empty response from the AI service.'
      })
    }

    // Send response to frontend
    return res.status(200).json({
      reply: reply.trim()
    })

  } catch (error) {

    console.error(
      '========== SERVER ERROR =========='
    )

    console.error(error)

    console.error(
      '=================================='
    )

    return res.status(500).json({
      error:
        'JARVIS encountered a temporary systems error.'
    })
  }
}

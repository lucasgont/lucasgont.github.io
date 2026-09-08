interface WorkInterface {
    id: string
    name: string
    tagline: string
    description: string
    impact: string
    tech: string[]
    status: string
    statusColor: string
    features: string[]
    image: string,
    logo: string,
    liveUrl?: string
    sourceUrl?: string
}

/* 
    For active projects, the status should be "ACTIVE" and the statusColor should be "text-nx-cyan".
*/

export const work: WorkInterface[] = [
    {
        id: "vivage",
        name: "VIVAGE CLINIQUE",
        tagline: "Professional aesthetic medicine clinic website",
        status: "DEPLOYED",
        statusColor: "text-nx-green",
        description: "Solo-developed and architected a bilingual corporate website for Vivage, an aesthetic medicine clinic located in Portugal. Engineered a scalable Next.js application with advanced rendering strategies and complex data models supporting dual-classification treatment systems. Built comprehensive patient engagement tools with real-time communication, form processing with anti-spam protection, and GDPR-compliant compliance frameworks including cookie auditing and SEO optimization.",
        features: [
            "Dynamic rendering architecture enabling 30+ content-rich pages with server-side generation and incremental static regeneration",
            "Bilingual i18n system with language-specific content dictionaries",
            "Multi-dimensional treatment catalog with dual classification system enabling treatments to appear across 5 body zones and multiple procedure categories",
            "Medical team profiles with biographies and credentials",
            "Contact form with validation, honeypot anti-spam, and rate limiting",
            "Floating WhatsApp button with treatment-aware message pre-fill",
            "Progressive rendering architecture with React Server Components and selective client hydration for optimal performance",
            "GDPR-compliant cookie consent with immutable audit trail in database",
            "SEO optimization with Open Graph metadata and schema markup",
            "Google Analytics and Search Console integration ready",
            "Legal compliance with privacy policy, cookie policy, and medical disclaimer",
        ],
        impact: "Increased patient engagement and appointment requests, improved online visibility, and enhanced brand credibility",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind",
            "Node.js",
            "PostgreSQL",
            "Resend",
            "Render.com"
        ],
        image: "/images/vivage.jpg",
        logo: "/images/logos/vivage.png",
        liveUrl: "https://vivage.pt/en",
        sourceUrl: "",
    },
    {
        id: "filmer",
        name: "FILMER",
        tagline: "Full-stack platform connecting brands with content creators",
        description:
            "Worked as a Full-Stack Developer on Filmer, a Spanish SaaS platform and marketplace connecting brands with UGC creators and influencers. Contributed directly to developing core product features across creator profiles, dashboards, subscriptions, payments, real-time chat, multimedia content management, and social media integrations. Developed frontend and backend functionality, contributed to database architecture and technical planning, and supported team coordination, developer onboarding, and production deployments.",
        impact: "Delivered core product features, improved creator workflows and public profiles, contributed to the subscription system, real-time communication, multimedia uploads, and helped coordinate and onboard new developers",
        tech: [
            "React",
            "TypeScript",
            "Tailwind",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Figma",
            "Git",
            "Stripe",
            "Instagram API",
            "TikTok API",
            "Render.com",
            "Supabase",
            "Google Cloud Platform",
        ],
        status: "DEPLOYED",
        statusColor: "text-nx-green",
        features: [
            "Developed creator dashboards, including pricing, social networks, profiles, and validations",
            "Implemented creator registration and public profile functionality with frontend-backend integration",
            "Built and improved real-time chat, file uploads, multimedia content management, compression, and file format handling",
            "Contributed to the modelling and implementation of creator subscriptions, payments, database structures, and backend logic",
            "Modified PostgreSQL database schemas and adapted backend services to new product requirements",
            "Integrated external services including Stripe payments and social media APIs",
            "Conducted security audits and performance optimization reviews, identifying vulnerabilities and implementing improvements across frontend and backend systems",
            "Participated in the research and technical modelling of an AI-powered creator recommendation system",
            "Deployed and configured frontend and backend testing environments",
            "Actively contributed to strategic planning meetings, providing architectural recommendations and aligning technical decisions with company product roadmap and business objectives",
            "Organized development workflows, planned tasks and sprints, reviewed code, and managed merges",
            "Supported and onboarded new developers by helping configure their development environments and resolving technical questions"
        ],
        image: "/images/filmer.png",
        logo: "/images/logos/filmer.svg",
        liveUrl: "https://www.filmer.es/",
        sourceUrl: "",
    },
]
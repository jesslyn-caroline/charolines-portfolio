export interface ProjectCardProps {
    name: string,
    shortDesc: string,
    desc: string,
    link?: string,
    path: string,
    previewSrc: string,
    totalPreview: number,
    year: number,
    tags: string[],
    features: string[],
    technologies: string[],
    responsibilities?: string[],
    projectDetails: [string, string][]
}

export const projects:ProjectCardProps[] = [
    {
        name: 'Kelola.in',
        shortDesc: 'AI-Powered Financial & Business Management Platform for MSMEs',
        desc: 'Kelolain is an AI-powered business management platform designed to help Micro, Small, and Medium Enterprises (MSMEs), especially small retailers, manage their daily operations. The platform addresses common challenges such as manual bookkeeping, inefficient inventory tracking, and data-driven decision making. By combining financial management, inventory tracking, point-of-sale (POS) functionality, and AI in a single platform, Kelolain enables business owners to manage their businesses more efficiently and make informed decisions.', 
        link: 'https://kelolain.vercel.app/',
        path: 'kelolain',
        previewSrc: '/project-previews/kelolain',
        totalPreview: 7,
        year: 2026,
        tags: ['Python', 'TensorFlow', 'Deep Learning'],
        features: [
            'Smart Financial Tracking',
            'Inventory Management',
            'Receipt Scanner',
            'Integrated POS System',
            'AI-Powered Revenue Forecasting',
            'Demand Prediction for Low-Stock Products',
            'Product Bundling Recommendations',
        ],
        technologies: ['Python', 'TensorFlow', 'Gemini API', 'PaddleOCR', 'Flask', 'React', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Prisma'],
        responsibilities: [
            'Built blur image classification using TensorFlow to detect low-quality receipt images before OCR processing',
            'Built OCR-based receipt text extraction using PaddleOCR to extract text from receipt images',
            'Integrated Gemini API to classify extracted text into structured fields (item name, quantity, and price)',
            'Deployed AI model to production using Railway',
        ],
        projectDetails: [
            ['Year', '2026'],
            ['Team', '2 Web Developers, 2 Data Scientists, 2 AI Engineers'],
            ['My Role', 'AI Engineer'],
            ['Github', 'https://github.com/jesslyn-caroline/CC26-PSU248-Kelolain'],
        ]
    },
]
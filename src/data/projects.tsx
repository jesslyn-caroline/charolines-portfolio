export interface ProjectCardProps {
    name: string,
    description: string,
    link: string,
    path: string,
    previewSrc: string,
    total: number,
    year: number,
    tags: string[]
}

export const projects:ProjectCardProps[] = [
    {
        name: 'Kelola.in',
        description: 'AI-powered financial and business management platform designed to help MSMEs manage their businesses more efficiently.',
        link: 'https://kelolain.vercel.app/',
        path: 'kelolain',
        previewSrc: '/project-previews/kelolain',
        total: 7,
        year: 2026,
        tags: ['Python', 'TensorFlow', 'Deep Learning']
    },
]
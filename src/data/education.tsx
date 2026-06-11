export interface EducationCardProps {
    institution: string,
    degree: string,
    startDate: string,
    endDate: string,
    description?: string,
    achievements?: string[]
}

export const educations:EducationCardProps[] = [
    {
        institution: 'Universitas Mikroskil',
        degree: 'Bachelor of Computer Science',
        startDate: '2023',
        endDate: '2027',
        description: 'CGPA: 3.99/4',
        achievements: [
            'Academic Outstanding Student Even Semester of 2024-2025 Academic Year',
            'Academic Outstanding Student Odd Semester of 2025-2026 Academic Year'
        ]
    },
    {
        institution: 'Dicoding Coding Camp by DBS Foundation',
        degree: 'Cohort AI Engineer',
        startDate: 'Feb 2026',
        endDate: 'July 2026',
        description: 'Learning about AI, machine learning, deep learning, and NLP. Building projects using AI technologies and tools.'
    }
]
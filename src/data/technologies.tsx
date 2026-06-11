export interface SkillCardProps {
        color: 'blue' | 'pink' | 'purple' | 'green' | 'orange',
        skill: string,
        technologies: string[]
    };

export const skillsAndTechnologies:SkillCardProps[] = [
    {
        color: 'pink',
        skill: 'Front end',
        technologies: ['Tailwind CSS', 'JavaScript', 'TypeScript', 'React']
    },
    {
        color: 'blue',
        skill: 'Back end',
        technologies: ['Node.js', 'Express.js']
    },
    {
        color: 'orange', 
        skill: 'Database',
        technologies: ['MongoDB', 'MySQL']
    },
    {
        color: 'purple',
        skill: 'Programming languages',
        technologies: ['Python', 'C++', 'Dart']
    },
    {
        color: 'green',
        skill: 'Mobile development',
        technologies: ['Flutter']
    }
]
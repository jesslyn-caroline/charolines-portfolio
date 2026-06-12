export interface ExperienceCardProps {
    company: string
    position: string
    startDate: string
    endDate: string
    responsibilities: string[]
}

export const experiences:ExperienceCardProps[] = [
    {
        company: 'PT. Pelita Controlmatic Utama',
        position: 'Accounting Payable',
        startDate: 'Aug 2023',
        endDate: 'Aug 2025',
        responsibilities: [
            'Processed and verified invoices to ensure accurate and timely payments',
            'Assisted in monitoring payment schedules and resolving billing discrepancies',
            'Utilized Accurate software for financial data entry, reporting, and transaction management',
            'Prepared monthly tax reporting and assisted the internal tax team with financial documentation',
        ]
    }
]
export interface ExperienceCardProps {
    company: string
    position: string
    startDate: string
    endDate: string
    responsibilities: string[]
}

export const experiences:ExperienceCardProps[] = [
    {
        company: 'Mikroskil Programming Club',
        position: 'Vice Lead',
        startDate: 'Dec 2024',
        endDate: 'Present',
        responsibilities: [
            'Prepares proposals and post-event reports for competitive programming competitions and club activities',
            'Assists in the preparation and organization of internal competitive programming competitions',
            'Assists junior members in solving competitive programming problems by providing guidance when needed'
        ]
    },
    {
        company: 'PT. Pelita Controlmatic Utama',
        position: 'Accounting Payable',
        startDate: 'Aug 2023',
        endDate: 'Aug 2025',
        responsibilities: [
            'Gathered and verified supporting documents to ensure the accuracy and validity of vendor invoices before payment processing',
            'Reviewed invoices and prepared payment schedules in accordance with company procedures',
            'Recorded purchase payments and maintained accounts payable data using Accurate software',
            'Submitted monthly PPh 21 and PPh 23 invoice documentation to the Tax Team for tax compliance and reporting',
            'Assisted in resolving invoice discrepancies through coordination with vendors and internal departments'
        ]
    }
]
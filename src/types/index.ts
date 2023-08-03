export interface Note {
    id: number;
    date: string;
    title: string;
    category: string;
    content: string;
    dates: string[];
    isArchived: boolean;
}
import { Record } from './record.model';

export class Goal {
    id: number;
    title: string;
    cost: number;
    description: number;
    images: string[];
    links: string[];
    records: Record[];
}
export interface IQuiz {
    _id: string;
    title: string;
    course: string;
    dueDate: string;
    dueTime: string;
    points: number;
    publish: boolean;
    description: string;
    availableFrom: string;
    availableUntil: string;
}
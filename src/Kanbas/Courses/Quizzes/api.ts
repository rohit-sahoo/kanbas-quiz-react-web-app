import axios, { AxiosResponse } from "axios";
import { IQuiz } from "../../Interfaces/quiz";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENT_API = `${API_BASE}/api/quizzes`;

export const fetchQuizzesForCourse = async (courseId: any) => {
    const response: AxiosResponse<IQuiz[]> = await
        axios.get<IQuiz[]>(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
};

export const createQuiz = async (courseId: any, quiz: IQuiz) => {
    const response: AxiosResponse<IQuiz> = await
        axios.post<IQuiz>(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return response.data;
};

export const deleteQuiz = async (quizId: string) => {
    const response = await
        axios.delete(`${ASSIGNMENT_API}/${quizId}`);
    return response.data;
};

export const updateQuiz = async (quiz: IQuiz) => {
    console.log(quiz);
    const response = await
        axios.put<IQuiz>(`${ASSIGNMENT_API}/${quiz._id}`, quiz);
    return response.data;
};

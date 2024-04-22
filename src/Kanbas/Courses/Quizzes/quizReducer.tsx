import { createSlice } from "@reduxjs/toolkit";
import { IQuiz } from "../../Interfaces/quiz";

interface InitialState {
    quizzes: IQuiz[],
    quiz: IQuiz;
}

const initialState: InitialState = {
    quizzes: [],
    quiz: {
        _id: "",
        course: "",
        dueDate: "",
        dueTime: "",
        availableFrom: "",
        availableUntil: "",
        title: "New Quiz",
        description: "New Quiz Description",
        points: 100,
        publish: false
    }
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, action) => {
            state.quizzes = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.quizzes,
            ];
        },
        deleteQuiz: (state, action) => {
            state.quizzes = state.quizzes.filter(
                (quiz) => quiz._id !== action.payload
            );
        },
        updateQuiz: (state, action) => {
            state.quizzes = state.quizzes.map((quiz) => {
                console.log(quiz._id);
                if (quiz._id === action.payload._id) {
                    return action.payload;
                } else {
                    return quiz;
                }
            });
        },
        selectQuiz: (state, action) => {
            state.quiz = action.payload;
        },
        resetQuizForm: (state) => {
            state.quiz._id = "";
            state.quiz.course = "";
            state.quiz.dueDate = "";
            state.quiz.dueTime = "";
            state.quiz.availableFrom = "";
            state.quiz.availableUntil = "";
            state.quiz.title = "New Quiz";
            state.quiz.description = "New Quiz Description";
            state.quiz.points = 100;
            state.quiz.publish = false;
        }
    },
});

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, selectQuiz, resetQuizForm } = quizzesSlice.actions;
export default quizzesSlice.reducer;

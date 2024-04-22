import { configureStore } from "@reduxjs/toolkit";
import { IModule } from "../Interfaces/module";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";
import { IAssignment } from "../Interfaces/assignment";
import { IQuiz } from "../Interfaces/quiz";
import quizReducer from "../Courses/Quizzes/quizReducer";

export interface KanbasState {
    modulesReducer: {
        modules: IModule[];
        module: IModule;
    };

    assignmentReducer: {
        assignments: IAssignment[];
        assignment: IAssignment;
    };

    quizReducer: {
        quizzes: IQuiz[];
        quiz: IQuiz;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer,
        quizReducer
    }
});


export default store;
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz} from "./quizReducer";
import { KanbasState } from "../../Store";
import * as api from "./api";

function DeleteQuiz({ show, setShow }:
    {
        show: boolean;
        setShow: (show: boolean) => void;
    }) {

    const quiz = useSelector((state: KanbasState) => state.quizReducer.quiz);
    const dispatch = useDispatch();

    const handleConfirmation = async () => {
        await api.deleteQuiz(quiz._id)
            .then((status) => {
                dispatch(deleteQuiz(quiz._id));
                setShow(false);
            });
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>Are you sure you want to delete this quiz "{quiz.title}"?</label>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-outline-secondary' onClick={() => setShow(false)}>Cancel</button>
                <button className='btn btn-danger' onClick={() => { handleConfirmation() }}>OK</button>
            </Modal.Footer>
        </Modal >
    );
}

export default DeleteQuiz;
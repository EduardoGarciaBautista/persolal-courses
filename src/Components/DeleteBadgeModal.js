import React from "react";
import Modal from "./Modal";

function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
        <div className="DeleteBadgeModal row justify-content-center">
            <h1>Are you Sure?</h1>
            <p>You're about to delete this badge.</p>
            <div className="row justify-content-center">
                <button className="btn btn-danger mr-2" onClick={props.onDeleteBadge}>Delete</button>
                <button className="btn btn-primary" onClick={props.onCloseModal}>Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;

import { useState } from "react";
import Modal from './modal.jsx'
import './modal.css'

export default function ModalParent() {
    const [showModal, setShowModal] = useState(false)

    function handleToggleModal() {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="modal-parent">
                <button onClick={() => handleToggleModal()} className="modal-parent-toggleModal">Toggle the modal Window</button>
                {showModal &&
                    <Modal handleToggleModal={handleToggleModal} />
                }
            </div>
        </>
    )
}
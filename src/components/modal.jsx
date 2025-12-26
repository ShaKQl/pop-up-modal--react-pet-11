import { useState } from 'react'
import './modal.css'

export default function Modal({ handleToggleModal }) {

    function handleOtsideClick(el){
        el.classList.contains('modal') && handleToggleModal()
    }

    return (
        <>
            <div onClick={(e)=>handleOtsideClick(e.target)} className="modal">
                <div className="modal-wrapper">
                    <p className="modal-header">
                        Warning!
                    </p>

                    <div className="modal-desc">
                        <p className="modal-desc-text">
                            The click of the button triggered the pop up window
                        </p>
                    </div>

                    <div className="modal-close">
                        <button onClick={() => handleToggleModal()} className="modal-close-btn">Close the window</button>
                    </div>

                </div>
            </div>
        </>
    )
}



















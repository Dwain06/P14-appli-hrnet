import React, { useEffect, useState } from "react";
import "./confirmationModal.css";

const ConfirmationModal = ({
    showModal,
    setShowModal,
    btnContent = "close",
    textContent = "Insert your text here with 'textContent' prop",
    fadeinDuration = 200,
    fadeinDelay = 0,
    fadeoutDuration = 200,
    fadeoutDelay = 0,
    escapeClose = false,
    clickClose = false,
    colorModal = "grey",
    colorTxtModal = ""
}) => {
    const [fadeAnimation, setFadeAnimation] = useState(true);

    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.key === "Escape" && showModal && escapeClose) {
                handleClose();
            }
        };
    });

    const confirmationModalFadein = {
        animation: `${fadeinDuration}ms ease ${fadeinDelay}ms fadein forwards`,
    };
    const confirmationModalFadeout = {
        animation: `${fadeoutDuration}ms ease ${fadeoutDelay}ms fadeout forwards`,
    };

    const handleClose = () => {
        setFadeAnimation(false);
        setTimeout(() => {
            setShowModal(false);
            setFadeAnimation(true);
        }, fadeoutDelay + 200);
    };

    const handleClickClose = (e) => {
        if (e.target === e.currentTarget && clickClose) handleClose();
    };

    if (showModal) {
        return (
            <div
                className="confirmation-modal"
                onClick={(e) => handleClickClose(e)}
                style={
                    fadeAnimation
                        ? confirmationModalFadein
                        : confirmationModalFadeout
                }
            >
                <div className="confirmation-modal__msg" style={{background: colorModal, color: colorTxtModal}}>
                    <p>{textContent}</p>
                    <button
                        className="confirmation-modal__msg--close"
                        onClick={handleClose}
                    >
                        {btnContent}
                    </button>
                </div>
            </div>
        );
    }
};

export default ConfirmationModal;

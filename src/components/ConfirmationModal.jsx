import React, { useState } from "react";
import "./confirmationModal.css";

const ConfirmationModal = ({
    showModal,
    setShowModal,
    btnContent,
    textContent,
    fadeinDuration = 200,
    fadeinDelay = 0,
    fadeoutDuration = 200,
    fadeoutDelay = 0,
}) => {

    const [fadeAnimation, setFadeAnimation] = useState(true);

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

    if (showModal) {
        return (
            <div
                className="confirmation-modal"
                style={
                    fadeAnimation
                        ? confirmationModalFadein
                        : confirmationModalFadeout
                }
            >
                <div className="confirmation-modal__msg">
                    <p>
                        {textContent
                            ? textContent
                            : "Insert your text here with 'textContent' prop"}
                    </p>
                    <button
                        className="confirmation-modal__msg--close"
                        onClick={handleClose}
                    >
                        {btnContent ? btnContent : "Close"}
                    </button>
                </div>
            </div>
        );
    }
};

export default ConfirmationModal;

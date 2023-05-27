import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className='modal-title'>{title}</h2>
                        <div className="modal-body">{content}</div>
                        <button className="modal-close-btn" onClick={onClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;

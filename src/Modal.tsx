import { motion } from 'framer-motion';
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className='heading-modal'>
                            <h2 className='modal-title'>{title}</h2>
                            <button className="modal-close-btn" onClick={onClose}>✕</button>
                        </div>
                        <div className="modal-body">{content}</div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Modal;

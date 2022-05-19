import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal2.css';


const Modal2Context = React.createContext();

export const Modal2Provider = ({ children }) => {
    const modal2Ref = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modal2Ref.current);
    }, []);

    return (
        <>
            <Modal2Context.Provider value={value}>
                {children}
            </Modal2Context.Provider>
            <div ref={modal2Ref} />
        </>
    )
}

export const Modal2 = ({ onClose, children }) => {
    const modal2Node = useContext(Modal2Context);
    if (!modal2Node) return null;

    return ReactDOM.createPortal(
        <div id='modal'>
            <div id='modal2-background' onClick={onClose} />
            <div id='modal2-content' className='modal-2'>
                {children}
            </div>
        </div>,
        modal2Node
    )
}

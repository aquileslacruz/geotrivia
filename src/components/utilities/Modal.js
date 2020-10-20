import React from 'react'
import styles from '../../styles/utilities/Modal.module.scss'

const Modal = ({show, title, handleClose, children}) => {
    return ( 
        show
        ?
        <div className={styles.modal}>
            <h2>{title}</h2>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.actions}>
                <button className={styles.button} onClick={handleClose}>
                    {'OK'}
                </button>
            </div>
        </div>
        :
        null
    )
}

export default Modal
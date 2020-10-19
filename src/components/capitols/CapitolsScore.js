import React from 'react'
import Modal from '../utilities/Modal'
import styles from '../../styles/capitols.module.scss'

const ScoreCard = ({correct, total, show, handleClose}) => (
    <Modal show={show} title={'Final Score'} handleClose={handleClose}>
        <div className={styles.finalScore}>
            {`You got ${correct} correct answers out of ${total}`}
        </div>
    </Modal>
)

export default ScoreCard
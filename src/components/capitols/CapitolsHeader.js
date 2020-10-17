import React from 'react'
import styles from '../../styles/capitols.module.scss'

const Section = ({tag, value, valueStyle=null, tagStyle=null}) => {
    const valueClass = valueStyle ? `${styles.value} ${valueStyle}` : styles.value
    const tagClass = tagStyle ? `${styles.tag} ${tagStyle}` : styles.tag

    return (
        <div className={styles.section}>
            <div className={tagClass}>
                {tag}
            </div>
            <div className={valueClass}>
                {value}
            </div>
        </div>
    )
}

const CapitolsHeader = ({score=0, high=0, counter=0}) => {
    const counterClass = counter < 10 ? styles.red : null

    return (
        <div className={styles.header}>
            <Section tag={'score'} value={score} key='score' />
            <Section tag={'time'} value={counter} key='time' valueStyle={counterClass} />
            <Section tag={'high score'} value={high} key='high' />
        </div>
    )
}

export default CapitolsHeader
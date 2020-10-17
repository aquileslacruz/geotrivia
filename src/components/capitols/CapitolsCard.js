import React from 'react'
import styles from '../../styles/capitols.module.scss'

const CapitolsCard = ({country, callback}) => (
    <div className={styles.card}>
        <div className={styles.country}>
            {country.name}
        </div>
        <div className={styles.options}>
            {
                country.options.map(option => (
                    <div className={styles.option} onClick={() => callback(option)} key={option}>
                        {option}
                    </div>
                ))   
            }
        </div>
    </div>
)

export default CapitolsCard
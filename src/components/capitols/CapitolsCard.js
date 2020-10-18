import React, { useState } from 'react'
import classnames from 'classnames'
import styles from '../../styles/capitols.module.scss'

const Option = ({value, correct=false, callback}) => {
    const [clicked, setClicked] = useState(false)

    let classes = classnames({
        [styles.option]: true,
        [styles.correct]: clicked && correct,
        [styles.incorrect]: clicked && !correct
    })

    const handleClick = () => {
        setClicked(true)
        setTimeout(() => callback(value), 200)
    }

    return (
        <div className={classes} onClick={handleClick} key={value}>
            {value}
        </div>
    )
}

const CapitolsCard = ({country, callback}) => (
    <div className={styles.card}>
        <div className={styles.country}>
            {country.name}
        </div>
        <div className={styles.options}>
            {
                country.options.map(option => (
                    <Option value={option.value} correct={option.isCapitol} callback={callback} key={option.value} />
                ))   
            }
        </div>
    </div>
)

export default CapitolsCard
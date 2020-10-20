import React, { useState } from 'react'
import classnames from 'classnames'
import styles from '../../styles/capitols.module.scss'

const Option = ({value, correct=false, answer=false, callback}) => {
    const [clicked, setClicked] = useState(false)

    let classes = classnames({
        [styles.option]: true,
        [styles.correct]: (clicked || answer) && correct,
        [styles.incorrect]: clicked && !correct
    })

    const handleClick = () => {
        setClicked(true)
        callback(value)
    }

    return (
        <div className={classes} onClick={handleClick} key={value}>
            {value}
        </div>
    )
}

const CapitolsCard = ({country, callback}) => {
    const [answer, setAnswer] = useState(false)

    const handleClick = (value) => {
        setAnswer(true)
        setTimeout(() => {
            setAnswer(false)
            callback(value)
        }, 300)
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.country}>
                {country.name}
            </div>
            <div className={styles.options}>
                {
                    country.options.map(option => (
                        <Option 
                            value={option.value} 
                            correct={option.isCapitol} 
                            callback={handleClick} 
                            key={option.value}
                            answer={answer} 
                        />
                    ))   
                }
            </div>
        </div>
    )
}

export default CapitolsCard
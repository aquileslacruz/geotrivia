import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

import { getRandomKey, pickRandom, shuffleArray } from "../../utilities"
import CAPITOLS from "../../assets/capitols"
import styles from "../../styles/capitols.module.scss"

import Header from './CapitolsHeader'
import Card from './CapitolsCard'
import ScoreCard from './CapitolsScore'

const OPTIONS_NUMBER = 4

const getCountry = (used = []) => {
    let country = getRandomKey(CAPITOLS)

    while (used.includes(country) || CAPITOLS[country].cities.length < OPTIONS_NUMBER) {
        country = getRandomKey(CAPITOLS)
    }

    let options = [...pickRandom(CAPITOLS[country].cities, OPTIONS_NUMBER - 1), CAPITOLS[country].capitol]
    shuffleArray(options)
    options = options.map(option => ({
        value: option,
        isCapitol: option === CAPITOLS[country].capitol
    }))

    return {
        name: country,
        capitol: CAPITOLS[country].capitol,
        options
    }
}

const CapitolsMain = () => {
    const [country, setCountry] = useState(null)
    const [points, setPoints] = useState(0)
    const [counter, setCounter] = useState(60)
    const [start, setStart] = useState(false)
    const [responses, setResponses] = useState([])
    const [highScore, setHighScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (start) {
                const value = counter - 1
                setCounter(value)
                if (value === 0) {
                    endGame(points)
                }
            }
        }, 1000)

        return () => clearTimeout(timer)
    })

    const startGame = () => {
        // Initialize
        setCountry(getCountry([]))
        setShowScore(false)
        setPoints(0)
        setResponses([])
        setCounter(60)
        setStart(true)
    }

    const endGame = (score) => {
        setStart(false)
        if (score > highScore) {
            setHighScore(score)
        }
        setPoints(score)
        setShowScore(true)
    }

    const checkAnswer = (option) => {
        if (option === country.capitol) {
            setPoints(points + 1)
        }

        const used = [...responses, country.name]

        setResponses(used)
        setCountry(getCountry(used))
    }

    const handleCloseScore = () => {
        setShowScore(false)
    }

    return (
        <>
        <Header score={points} high={highScore} counter={counter} />
        {
            country && start
            ?
            <Card country={country} callback={checkAnswer} />
            :
            <>
            <div 
                className={
                    classnames({
                        [styles.startBtn]: true, 
                        [styles.disabled]: showScore
                    })
                } 
                onClick={showScore ? null : startGame}>
                {responses.length === 0 ? 'Start' : 'Restart'}
            </div>
            <ScoreCard correct={points} total={responses.length} show={showScore} handleClose={handleCloseScore} />
            </>
        }
        </>
    )
}

export default CapitolsMain
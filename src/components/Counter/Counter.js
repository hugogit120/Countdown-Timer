import React, { useEffect, useState } from "react"

const counterNumerSize = {
    fontSize: "5.5rem"
}

const counterNameSize = {
    fontSize: "1rem"
}

const today = new Date().getTime()
let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
let distance = countDownDate - today

const Counter = () => {
    const [counters, setCounters] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {

        setInterval(() => {
            setCounters({ ...counters, hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) });
            setCounters({ ...counters, minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) })
            setCounters({ ...counters, seconds: Math.floor((distance % (1000 * 60)) / 1000) })
        }, 1000)
        console.log(counters.seconds)
    }, [])

    return (
        <div className="w-75 d-flex justify-content-around" style={{ marginTop: "15rem" }}>
            <div>
                <h1 style={counterNumerSize}>
                    {counters.months}
                </h1>
                <div style={counterNameSize}>
                    <p>months</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumerSize}>
                    0
                </h1>
                <div style={counterNameSize}>
                    <p>days</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumerSize}>
                    0
                </h1>
                <div style={counterNameSize}>
                    <p>hours</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumerSize}>
                    0
                </h1>
                <div style={counterNameSize}>
                    <p>minutes</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumerSize}>
                    {counters.seconds}
                </h1>
                <div style={counterNameSize}>
                    <p>seconds</p>
                </div>
            </div>

        </div>
    )
}

export default Counter

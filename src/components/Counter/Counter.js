import React, { useEffect, useState } from "react"

const counterNumer = {
    fontSize: "5.5rem",
    fontWeight: "700"
}

const counterName = {
    fontSize: "1rem",
    fontWeight: "700",
    color: "snow",
    letterSpacing: "0.2rem"
}


const Counter = () => {
    const today = new Date()
    const countDownDate = new Date("1 Jan 2021")
    let totalSeconds = (countDownDate - today) / 1000
    let monthNow = 12 - (today.getMonth() + 1);



    const [counters, setCounters] = useState({
        days: 0,
        hours: 0,
        minutes: Math.floor(totalSeconds / 60) % 60,
        seconds: 0
    })


    const counterChanger = () => {
        setCounters({
            ...counters,
            days: Math.floor(totalSeconds / 3600 / 24),
            hours: Math.floor(totalSeconds / 3600) % 24,
            minutes: Math.floor(totalSeconds / 60) % 60,
            seconds: Math.floor(totalSeconds) % 60
        });
    }

    useEffect(() => {
        console.log(monthNow);
        const interval = setInterval(() => {
            counterChanger()
        }, 1000)
        return () => clearInterval(interval);
    })

    return (
        <div className="w-75 d-flex justify-content-around flex-wrap" style={{ marginTop: "7rem", marginBottom: "27rem" }}>

            <div >
                <h1 style={counterNumer}>
                    {monthNow}
                </h1>
                <div style={counterName}>
                    <p>months</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumer}>
                    {counters.days}
                </h1>
                <div style={counterName}>
                    <p>days</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumer}>
                    {counters.hours}
                </h1>
                <div style={counterName}>
                    <p>hours</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumer}>
                    {counters.minutes}
                </h1>
                <div style={counterName}>
                    <p>minutes</p>
                </div>
            </div>
            <div>
                <h1 style={counterNumer}>
                    {counters.seconds}
                </h1>
                <div style={counterName}>
                    <p>seconds</p>
                </div>
            </div>

        </div>
    )
}

export default Counter

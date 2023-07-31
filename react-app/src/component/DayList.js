import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

export default function DayList() {
    const [days, setDays] = useState([])

    useEffect(() => {
        console.log("Count change");

        fetch('http://localhost:3002/days')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setDays(data);
        })
    }, []);

    console.log(days);
    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                        {/* Day {day.day} */}
                    </li>

                ))}
            </ul>
            {/* <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day change</button> */}
        </>
    );
}

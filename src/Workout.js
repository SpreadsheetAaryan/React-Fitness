import { Link } from "react-router-dom"

const Workout = ({workout}) => {

    const time = [];

    if (workout.minutes > 60) {
        const hours = Math.floor((workout.minutes) / 60)
        const mins = (workout.minutes) % 60;
        time.push(hours, mins);
    } 

    return (
        <article className="post">

            <Link to={`/${workout.name}`}>
                <h3>{workout.title}</h3>
                <p>{workout.name}</p>
            </Link>
            <p>{`Calories Burned: ${workout.cals}`}</p>
            <p>
                {!time.length
                    ? `Duration: ${workout.minutes} minutes`
                    : time[0] === 1
                    ? `Duration: ${time[0]} hour and ${time[1]} minutes`
                    : `Duration: ${time[0]} hours and ${time[1]} minutes`
                }
            </p>
            <p className="datetime">{workout.datetime}</p>

        </article>
    )
}

export default Workout
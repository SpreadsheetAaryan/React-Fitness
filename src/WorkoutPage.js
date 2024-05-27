import { useParams, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from "react-router-dom";

const WorkoutPage = () => {

    const navigate = useNavigate();
    const { name } = useParams();
    const deleteWorkout = useStoreActions((actions) => actions.deleteWorkout);
    const getWorkoutByName = useStoreState((state) => state.getWorkoutByName);
    const wks = getWorkoutByName(name);
    console.log(wks);

    const workoutDelete = (id) => {
        deleteWorkout(id);
        navigate("/");
    }

    return (
        <main className="PostPage">

            <h2>{`Workouts By ${name}`}</h2>

            {wks.map(workout => (
                <article className="post" key={workout.id}>
                    
                    <h3>{workout.title}</h3>

                    <p>{`Calories Burned: ${workout.cals}`}</p>
                    <p>{`Duration: ${workout.minutes} minutes`}</p>
                    <p className="datetime">{workout.datetime}</p>

                    <button onClick={() => workoutDelete(workout.id)}>Delete Workout</button>

                    <Link to={`/change/${workout.id}`}><button>Edit Post</button></Link>
        
                </article>
            ))}
        </main>
    )
}

export default WorkoutPage
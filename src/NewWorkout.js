import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

const NewWorkout = () => {

    const navigate = useNavigate();

    const workouts = useStoreState((state) => state.workouts);
    const workoutTitle = useStoreState((state) => state.workoutTitle);
    const name = useStoreState((state) => state.name);
    const cals = useStoreState((state) => state.cals);
    const minutes = useStoreState((state) => state.minutes);

    const saveWorkout = useStoreActions((actions) => actions.saveWorkout);
    const setWorkoutTitle = useStoreActions((actions) => actions.setWorkoutTitle);
    const setName = useStoreActions((actions) => actions.setName);
    const setCals = useStoreActions((actions) => actions.setCals);
    const setMinutes = useStoreActions((actions) => actions.setMinutes);

    const workoutSubmit = (e) => {
        e.preventDefault();
    
        const id = workouts.length ? workouts[workouts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    
        const workout = {
            id: id,
            title: workoutTitle,
            datetime: datetime,
            name: name,
            cals: cals,
            minutes: minutes
        }

        saveWorkout(workout);

        navigate("/");
    }

    return (
        <form className="newPostForm" onSubmit={workoutSubmit}>
            <label htmlFor="title">Title: </label>
            <input 
                type="text" 
                placeholder="Title"
                required
                value={workoutTitle}
                onChange={(e) => setWorkoutTitle(e.target.value)}
                id="title"
            />
            <label htmlFor="name">Name: </label>
            <input 
                type="text" 
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
            />
            <label htmlFor="cals">Calories Burned: </label>
            <input 
                type="number" 
                required
                value={cals}
                onChange={(e) => setCals(e.target.value)}
                id="cals"
            />
            <label htmlFor="minutes">Duration of Workout:</label>
            <input 
                type="number" 
                required
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                id="minutes"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewWorkout
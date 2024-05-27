import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { format } from "date-fns";

const EditWorkout = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const editWorkoutTitle = useStoreState((state) => state.editWorkoutTitle);
    const editName = useStoreState((state) => state.editName);
    const editCals = useStoreState((state) => state.editCals);
    const editMins = useStoreState((state) => state.editMins);

    const editWorkout = useStoreActions((actions) => actions.editWorkout);
    const setEditWorkoutTitle = useStoreActions((actions) => actions.setEditWorkoutTitle);
    const setEditName = useStoreActions((actions) => actions.setEditName);
    const setEditCals = useStoreActions((actions) => actions.setEditCals);
    const setEditMins = useStoreActions((actions) => actions.setEditMins);

    const getWorkoutById = useStoreState((state) => state.getWorkoutById);
    const workout = getWorkoutById(id);

    useEffect(() => {
        if (workout) {
            setEditWorkoutTitle(workout.title);
            setEditName(workout.name);
            setEditCals(workout.cals);
            setEditMins(workout.minutes);
        }
    }, [workout, setEditName, setEditWorkoutTitle, setEditCals, setEditMins])

    const workoutEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    
        const workout = {
            id: id,
            title: editWorkoutTitle,
            datetime: datetime,
            name: editName,
            cals: editCals,
            minutes: editMins
        }

        editWorkout(workout);

        navigate(`/`);
    }

    return (
        <main className="NewPost">
            {editWorkoutTitle &&
                <>
                    <h2>Edit Workout</h2>
                    <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="title">Title: </label>
                        <input 
                            type="text" 
                            placeholder="Title"
                            required
                            value={editWorkoutTitle}
                            onChange={(e) => setEditWorkoutTitle(e.target.value)}
                            id="title"
                        />
                        <label htmlFor="name">Name: </label>
                        <input 
                            type="text" 
                            placeholder="Name"
                            required
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            id="name"
                        />
                        <label htmlFor="cals">Calories Burned: </label>
                        <input 
                            type="number" 
                            required
                            value={editCals}
                            onChange={(e) => setEditCals(e.target.value)}
                            id="cals"
                        />
                        <label htmlFor="minutes">Duration of Workout:</label>
                        <input 
                            type="number" 
                            required
                            value={editMins}
                            onChange={(e) => setEditMins(e.target.value)}
                            id="minutes"
                        />
                        <button type="submit" onClick={() => workoutEdit(workout.id)}>Submit</button>
                    </form>
                </>
            }
            {!editWorkoutTitle &&
                <>
                    <h2>Workout Not Found</h2>
                    <p>Well, that's disappointing</p>
                    <p>
                        <Link to="/" >Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditWorkout
import NewWorkout from "./NewWorkout";
import Workout from "./Workout";
import { useStoreState } from 'easy-peasy';

const Home = () => {

    const workouts = useStoreState((state) => state.workouts);

    return (
        <main className="Home">
            
            <NewWorkout/>

            <br />

            {workouts.map((workout) => (
                    <Workout workout={workout} key={workout.id} />
            ))}

        </main>
    )
}

export default Home
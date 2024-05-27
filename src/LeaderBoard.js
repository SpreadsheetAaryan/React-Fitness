import Cals from "./Cals";
import Mins from "./Mins";
import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const LeaderBoard = () => {

    const setLeadCals = useStoreActions((actions) => actions.setLeadCals);
    const leadCals = useStoreState((state) => state.leadCals);
    const setLeadMins = useStoreActions((actions) => actions.setLeadMins);
    const leadMins = useStoreState((state) => state.leadMins);
    const workouts = useStoreState((state) => state.workouts);

    useEffect(() => {

        const temp = [...workouts];
        temp.sort((a, b) => b.cals - a.cals);
        const filteredResults = temp.slice(0, 3);

        setLeadCals(filteredResults);

    }, [workouts] || [])

    useEffect(() => {

        const temp = [...workouts];
        temp.sort((a, b) => b.minutes - a.minutes);
        const filteredResults = temp.slice(0, 3);

        setLeadMins(filteredResults);

    }, [workouts] || [])

    return (
        <main className="Home">
            <h2>Top 3 Calories Burned!</h2>
            <Cals
                leadCals={leadCals}
            />

            <br />
            
            <h2>Top 3 Workout Durations!</h2>
            <Mins
                leadMins={leadMins}
            />
        </main>
    )
}

export default LeaderBoard
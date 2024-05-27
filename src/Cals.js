const Cals = ({ leadCals }) => {
    return (
      <article className="lb">
        {leadCals.map(workout => (
          <h3 key={workout.id} className="item">{workout.name} is on the leaderboard with {workout.cals} calories burned!</h3>
        ))}
      </article>
    )
}

export default Cals
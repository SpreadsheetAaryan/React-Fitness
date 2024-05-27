const Mins = ({ leadMins }) => {
    return (
      <article className="lb">
        {leadMins.map(workout => (
          <h3 key={workout.id} className="item">{workout.name} is on the leaderboard with {workout.minutes} minutes!</h3>
        ))}
      </article>
    )
}
  
  export default Mins
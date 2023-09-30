const WorkoutDetails = ({}) => {
    return (
        <div className="workout-details">
            <h4>
                {workout.title}
                <p> <strong> Load(kg): </strong>{workout.load}</p>
                <p> <strong> Reps:  </strong>{workout.reps}</p>
                <p>{workout.createdAt}</p>
            </h4>
        </div>
    )
}

export default WorkoutDetails;
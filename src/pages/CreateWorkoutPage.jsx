import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateWorkoutPage = () => {
  const [workoutTemplates, setWorkoutTemplates] = useState(
    JSON.parse(localStorage.getItem('workoutTemplates')) || []
  );

  const saveTemplatesToStorage = (templates) => {
    localStorage.setItem('workoutTemplates', JSON.stringify(templates));
    setWorkoutTemplates(templates);
  };

  return (
    <div>
      <h2>Your Workouts</h2>
      <div>
        {workoutTemplates.map((template, index) => (
          <div key={index}>
            <h3>{template.name}</h3>
            <ul>
              {template.exercises.map((exercise, i) => (
                <li key={i}>{exercise.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link to="/create-template">
        <button>Create New Template</button>
      </Link>
    </div>
  );
};

export default CreateWorkoutPage;

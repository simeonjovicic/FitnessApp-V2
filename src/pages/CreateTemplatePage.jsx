import { useState } from "react";
import { Link } from "react-router-dom";

const CreateTemplatePage = () => {
  const [templateName, setTemplateName] = useState("New Template");
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleExerciseSelection = (exercise) => {
    setSelectedExercises((prevSelected) => {
      if (!prevSelected.includes(exercise)) {
        return [...prevSelected, exercise];
      }
      return prevSelected;
    });
  };

  const handleAddExercise = (exercise) => {
    setSelectedExercises((prevSelected) => [...prevSelected, exercise]);
  };

  const handleSave = () => {
    // Save logic (e.g., localStorage or API call)
    console.log("Workout Template Saved", { templateName, selectedExercises });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        <Link to="/create-workout" className="btn btn-secondary">X</Link>
        <div
          contentEditable={true}
          className="h3 text-center"
          onBlur={(e) => setTemplateName(e.target.innerText)}
          suppressContentEditableWarning={true}
        >
          {templateName}
        </div>
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>

      <div className="my-4">
        <Link to="/add-exercise" className="btn btn-success">
          Add Exercises
        </Link>
      </div>

      <div className="my-4">
        <h4>Selected Exercises</h4>
        <ul>
          {selectedExercises.map((exercise, index) => (
            <li key={index}>{exercise.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateTemplatePage;

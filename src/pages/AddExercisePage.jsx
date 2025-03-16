import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import handleAddExercise from CreateTemplatePage

const AddExercisePage = ({ handleAddExercise }) => {
  const [query, setQuery] = useState("");
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const API_URL = "https://api.api-ninjas.com/v1/exercises";
  const API_KEY = "N77p08xdC6V3g5J4QXigMA==Pj9uI6NTp05N90aj"; // Replace with your actual API key

  useEffect(() => {
    const fetchExercises = async () => {
      if (query.length < 2) return; // Avoid too many requests on short inputs

      try {
        const response = await axios.get(API_URL, {
          headers: { "X-Api-Key": API_KEY },
          params: { name: query }, // Live search by name
        });
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [query]);

  const handleSelectExercise = (exercise) => {
    setSelectedExercises((prevSelected) => {
      if (!prevSelected.includes(exercise)) {
        return [...prevSelected, exercise];
      }
      return prevSelected;
    });
  };

  const handleAddSelectedExercises = () => {
    selectedExercises.forEach((exercise) => {
      handleAddExercise(exercise); // Add each selected exercise to the template
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Search Exercises</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Start typing an exercise..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query on change
      />

      <div className="my-4">
        <h4>Exercises</h4>
        <div className="row">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className={`col-md-4 mb-3 ${selectedExercises.includes(exercise) ? "bg-success text-white" : ""}`}
              onClick={() => handleSelectExercise(exercise)}
              style={{ cursor: "pointer" }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{exercise.name}</h5>
                  <p className="card-text">
                    <strong>Type:</strong> {exercise.type} <br />
                    <strong>Muscle:</strong> {exercise.muscle} <br />
                    <strong>Difficulty:</strong> {exercise.difficulty}
                  </p>
                  {selectedExercises.includes(exercise) && (
                    <span className="badge bg-success">Selected</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-4">
        <button className="btn btn-primary" onClick={handleAddSelectedExercises}>
          Add Selected Exercises
        </button>
        <Link to="/create-template" className="btn btn-secondary ms-3">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default AddExercisePage;

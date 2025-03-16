import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AddExercisePage from "./pages/AddExercisePage";
import CreateWorkoutPage from "./pages/CreateWorkoutPage";
import CreateTemplatePage from "./pages/CreateTemplatePage";
import "./index.css";

// Sentry Configuration
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/create-workout" element={<CreateWorkoutPage />} />
        <Route path="/create-template" element={<CreateTemplatePage />} />
        <Route path="/add-exercise" element={<AddExercisePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

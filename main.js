import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function MainComponent() {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      name: "R-LAB",
      time: "8:00 AM",
      day: "Monday",
      room: "Room 428",
      color: "#3B82F6",
      notified: false,
    },
    // Add the rest of the schedule data here...
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentClass, setCurrentClass] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const getCurrentClass = () => {
      const now = new Date();
      const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

      const currentClass = schedule.find((class_) => {
        const [time, period] = class_.time.split(" ");
        const [hours, minutes] = time.split(":");
        const classTime = new Date();
        classTime.setHours(
          period === "PM" ? parseInt(hours) + 12 : parseInt(hours),
          parseInt(minutes),
          0,
          0
        );

        return (
          class_.day === currentDay &&
          now >= classTime &&
          now < new Date(classTime.getTime() + 60 * 60 * 1000)
        );
      });

      setCurrentClass(currentClass || null);
    };

    const interval = setInterval(getCurrentClass, 1000);
    return () => clearInterval(interval);
  }, [schedule]);

  return (
    <div>
      <h1>Class Reminder App</h1>
      <div>Current Time: {currentTime.toLocaleTimeString()}</div>
      {currentClass ? (
        <div>
          <h2>Current Class: {currentClass.name}</h2>
          <p>Room: {currentClass.room}</p>
        </div>
      ) : (
        <p>No ongoing class.</p>
      )}
    </div>
  );
}

ReactDOM.render(<MainComponent />, document.getElementById("root"));

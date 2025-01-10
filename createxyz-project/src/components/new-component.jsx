"use client";
import React from "react";

function NewComponent({ onParse, onAddClass }) {
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <textarea
            placeholder="Paste your timetable text here... (e.g. 'Monday 9:00 AM Mathematics Room 1')"
            className="w-96 h-24 p-2 border rounded resize-none font-roboto"
            onChange={(e) => onParse(e.target.value)}
          />
          <button
            onClick={() => onParse(document.querySelector("textarea").value)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center font-roboto"
          >
            <i className="fas fa-sync-alt mr-2"></i>
            Convert to Schedule
          </button>
        </div>
      </div>

      <button
        onClick={onAddClass}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center font-roboto h-fit"
      >
        <i className="fas fa-plus mr-2"></i>
        Add Class
      </button>
    </div>
  );
}

function NewComponentStory() {
  const handleParse = (value) => {
    console.log("Parsed timetable:", value);
  };

  const handleAddClass = () => {
    console.log("Add Class button clicked");
  };

  return (
    <div>
      <NewComponent onParse={handleParse} onAddClass={handleAddClass} />
    </div>
  );
}

export default NewComponent;
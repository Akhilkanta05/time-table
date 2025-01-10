"use client";
import React from "react";

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
    {
      id: 2,
      name: "R-LAB",
      time: "9:00 AM",
      day: "Monday",
      room: "Room 428",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 3,
      name: "JAVA",
      time: "10:00 AM",
      day: "Monday",
      room: "Room 412",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 4,
      name: "JAVA",
      time: "11:00 AM",
      day: "Monday",
      room: "Room 412",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 5,
      name: "OE",
      time: "1:00 PM",
      day: "Monday",
      room: "Room 505",
      color: "#10B981",
      notified: false,
    },
    {
      id: 6,
      name: "R",
      time: "2:00 PM",
      day: "Monday",
      room: "Room 505",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 7,
      name: "MATHS",
      time: "8:00 AM",
      day: "Tuesday",
      room: "Room 504",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 8,
      name: "OS",
      time: "9:00 AM",
      day: "Tuesday",
      room: "Room 502",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 9,
      name: "CN-LAB",
      time: "10:00 AM",
      day: "Tuesday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
    },
    {
      id: 10,
      name: "CN-LAB",
      time: "11:00 AM",
      day: "Tuesday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
    },
    {
      id: 11,
      name: "R",
      time: "1:00 PM",
      day: "Tuesday",
      room: "Room 505",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 12,
      name: "COA",
      time: "2:00 PM",
      day: "Tuesday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 13,
      name: "CLAD",
      time: "8:00 AM",
      day: "Wednesday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 14,
      name: "CLAD",
      time: "9:00 AM",
      day: "Wednesday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 15,
      name: "COA",
      time: "10:00 AM",
      day: "Wednesday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 16,
      name: "OS",
      time: "11:00 AM",
      day: "Wednesday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
    },
    {
      id: 17,
      name: "OE",
      time: "1:00 PM",
      day: "Wednesday",
      room: "Room 505",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 18,
      name: "CN",
      time: "2:00 PM",
      day: "Wednesday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 19,
      name: "MATHS",
      time: "3:00 PM",
      day: "Wednesday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 20,
      name: "JAVA",
      time: "8:00 AM",
      day: "Thursday",
      room: "Room 412",
      color: "#10B981",
      notified: false,
    },
    {
      id: 21,
      name: "JAVA",
      time: "9:00 AM",
      day: "Thursday",
      room: "Room 412",
      color: "#10B981",
      notified: false,
    },
    {
      id: 22,
      name: "COA",
      time: "10:00 AM",
      day: "Thursday",
      room: "Room 502",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 23,
      name: "OS",
      time: "11:00 AM",
      day: "Thursday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 24,
      name: "R",
      time: "1:00 PM",
      day: "Thursday",
      room: "Room 505",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 25,
      name: "CN",
      time: "2:00 PM",
      day: "Thursday",
      room: "Room 502",
      color: "#10B981",
      notified: false,
    },
    {
      id: 26,
      name: "OS LAB",
      time: "8:00 AM",
      day: "Friday",
      room: "Room 411",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 27,
      name: "OS LAB",
      time: "9:00 AM",
      day: "Friday",
      room: "Room 411",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 28,
      name: "CN",
      time: "10:00 AM",
      day: "Friday",
      room: "Room 502",
      color: "#3B82F6",
      notified: false,
    },
    {
      id: 29,
      name: "MATHS",
      time: "11:00 AM",
      day: "Friday",
      room: "Room 504",
      color: "#EF4444",
      notified: false,
    },
    {
      id: 30,
      name: "OE",
      time: "1:00 PM",
      day: "Friday",
      room: "Room 505",
      color: "#10B981",
      notified: false,
    },
    {
      id: 31,
      name: "DT",
      time: "2:00 PM",
      day: "Friday",
      room: "Room 511",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 32,
      name: "DT",
      time: "3:00 PM",
      day: "Friday",
      room: "Room 511",
      color: "#F59E0B",
      notified: false,
    },
    {
      id: 33,
      name: "DOSL",
      time: "4:00 PM",
      day: "Friday",
      room: "Room 211-VB",
      color: "#3B82F6",
      notified: false,
    },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentClass, setCurrentClass] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [showAddClass, setShowAddClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState({
    name: "",
    time: "",
    day: "",
    room: "",
    color: "#3B82F6",
  });
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
  const [notificationTime, setNotificationTime] = useState(10);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const handleAddClass = () => {
    setShowAddClass(true);
  };

  useEffect(() => {
    const getCurrentClass = () => {
      const now = new Date();
      const currentDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][now.getDay()];

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

        const nextClassTime = new Date(classTime);
        nextClassTime.setHours(nextClassTime.getHours() + 1);

        return (
          class_.day === currentDay && now >= classTime && now < nextClassTime
        );
      });

      if (currentClass) {
        const [time, period] = currentClass.time.split(" ");
        const [hours, minutes] = time.split(":");
        const classTime = new Date();
        classTime.setHours(
          period === "PM" ? parseInt(hours) + 12 : parseInt(hours),
          parseInt(minutes),
          0,
          0
        );
        const nextClassTime = new Date(classTime);
        nextClassTime.setHours(nextClassTime.getHours() + 1);

        const remaining = Math.max(0, nextClassTime - now);
        setRemainingTime(remaining);
        setCurrentClass(currentClass);
      } else {
        setCurrentClass(null);
        setRemainingTime(0);
      }
    };
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
      getCurrentClass();
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [schedule]);

  useEffect(() => {
    const checkUpcomingClasses = () => {
      if (!notificationsEnabled) return;

      const now = new Date();
      const currentDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][now.getDay()];

      schedule.forEach((class_) => {
        if (class_.day === currentDay) {
          const [time, period] = class_.time.split(" ");
          const [hours, minutes] = time.split(":");
          const classTime = new Date();
          classTime.setHours(
            period === "PM" ? parseInt(hours) + 12 : parseInt(hours),
            parseInt(minutes),
            0,
            0
          );

          const timeDiff = (classTime - now) / (1000 * 60);

          if (timeDiff > 0 && timeDiff <= notificationTime) {
            if (!class_.notified) {
              if ("Notification" in window) {
                new Notification(`Upcoming Class: ${class_.name}`, {
                  body: `Your class starts in ${Math.round(
                    timeDiff
                  )} minutes in Room ${class_.room}`,
                  icon: "/favicon.ico",
                });
              }

              setSchedule((prev) =>
                prev.map((c) =>
                  c.id === class_.id ? { ...c, notified: true } : c
                )
              );
            }
          }
        }
      });
    };

    if ("Notification" in window && Notification.permission === "granted") {
      setNotificationsEnabled(true);
    }

    const interval = setInterval(checkUpcomingClasses, 60000);
    return () => clearInterval(interval);
  }, [schedule, notificationTime, notificationsEnabled]);

  return (
    <div className="min-h-screen bg-transparent px-4 py-6">
      <div className="mb-4">
        <div className="text-center font-roboto">
          <div className="text-xl">
            Current Time: {currentTime.toLocaleTimeString()}
          </div>
          {currentClass && (
            <div className="mt-2">
              <div className="text-lg">
                Current Class: {currentClass.name} in {currentClass.room}
              </div>
              <div className="text-lg">
                Time Remaining: {Math.floor(remainingTime / 1000 / 60)}:
                {String(Math.floor((remainingTime / 1000) % 60)).padStart(
                  2,
                  "0"
                )}
              </div>
              <div className="w-full max-w-md mx-auto h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                  style={{
                    width: `${(remainingTime / (60 * 60 * 1000)) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddClass}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center font-roboto"
        >
          <i className="fas fa-plus mr-2"></i>
          Add Class
        </button>
      </div>
      {showPermissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4 font-roboto">
              Enable Notifications
            </h2>
            <p className="mb-6 font-roboto">
              Allow notifications to receive reminders before your classes
              start.
            </p>
            <div className="flex gap-4">
              <button
                onClick={async () => {
                  if ("Notification" in window) {
                    const permission = await Notification.requestPermission();
                    if (permission === "granted") {
                      setNotificationsEnabled(true);
                      setShowPermissionModal(false);
                    } else {
                      setError(
                        "Please enable notifications to receive class reminders"
                      );
                    }
                  }
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-roboto"
              >
                Enable
              </button>
              <button
                onClick={() => setShowPermissionModal(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 font-roboto"
              >
                Skip
              </button>
            </div>
            {error && <p className="mt-4 text-red-500 font-roboto">{error}</p>}
          </div>
        </div>
      )}
      {showAddClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4 font-roboto">
              Add New Class
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-roboto mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full p-2 border rounded font-roboto"
                  value={selectedClass.name}
                  onChange={(e) =>
                    setSelectedClass((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-roboto mb-1">Time</label>
                <select
                  name="time"
                  className="w-full p-2 border rounded font-roboto"
                  value={selectedClass.time}
                  onChange={(e) =>
                    setSelectedClass((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                >
                  <option value="">Select Time</option>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-roboto mb-1">Day</label>
                <select
                  name="day"
                  className="w-full p-2 border rounded font-roboto"
                  value={selectedClass.day}
                  onChange={(e) =>
                    setSelectedClass((prev) => ({
                      ...prev,
                      day: e.target.value,
                    }))
                  }
                >
                  <option value="">Select Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-roboto mb-1">Room</label>
                <input
                  type="text"
                  name="room"
                  className="w-full p-2 border rounded font-roboto"
                  value={selectedClass.room}
                  onChange={(e) =>
                    setSelectedClass((prev) => ({
                      ...prev,
                      room: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setShowAddClass(false);
                  setSelectedClass({
                    name: "",
                    time: "",
                    day: "",
                    room: "",
                    color: "#3B82F6",
                  });
                }}
                className="px-4 py-2 text-gray-600 font-roboto hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (
                    selectedClass.name &&
                    selectedClass.time &&
                    selectedClass.day &&
                    selectedClass.room
                  ) {
                    setSchedule((prev) => [
                      ...prev,
                      {
                        ...selectedClass,
                        id: prev.length + 1,
                        notified: false,
                        color:
                          "#" +
                          Math.floor(Math.random() * 16777215).toString(16),
                      },
                    ]);
                    setShowAddClass(false);
                    setSelectedClass({
                      name: "",
                      time: "",
                      day: "",
                      room: "",
                      color: "#3B82F6",
                    });
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white font-roboto rounded hover:bg-blue-600"
              >
                Add Class
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        <div className="bg-transparent rounded-lg shadow-lg overflow-x-auto">
          <div className="hidden md:grid grid-cols-11 gap-0">
            <div className="bg-transparent p-4"></div>
            {times.map((time) => (
              <div
                key={time}
                className="bg-transparent p-4 text-center font-semibold font-roboto text-sm"
              >
                {time}
              </div>
            ))}

            {days.map((day) => (
              <React.Fragment key={day}>
                <div className="border p-2 text-sm text-gray-600 font-roboto">
                  {day}
                </div>
                {times.map((time) => (
                  <div key={`${day}-${time}`} className="border p-2">
                    {schedule
                      .filter((c) => c.day === day && c.time === time)
                      .map((class_) => (
                        <div
                          key={class_.id}
                          style={{ backgroundColor: class_.color }}
                          className="p-2 rounded text-white text-sm mb-1"
                        >
                          <div className="font-bold font-roboto">
                            {class_.name}
                          </div>
                          <div className="text-xs font-roboto">
                            Room: {class_.room}
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-0">
              <div className="bg-transparent p-2 text-sm font-semibold font-roboto">
                Time
              </div>
              <div className="bg-transparent p-2 text-sm font-semibold font-roboto">
                Class
              </div>

              {times.map((time) => {
                const classesAtTime = schedule.filter(
                  (c) => c.day === selectedDay && c.time === time
                );
                return (
                  <React.Fragment key={time}>
                    <div className="border p-2 text-sm text-gray-600 font-roboto">
                      {time}
                    </div>
                    <div className="border p-2">
                      {classesAtTime.map((class_) => (
                        <div
                          key={class_.id}
                          style={{ backgroundColor: class_.color }}
                          className="p-2 rounded text-white text-sm mb-1"
                        >
                          <div className="font-bold font-roboto">
                            {class_.name}
                          </div>
                          <div className="text-xs font-roboto">
                            Room: {class_.room}
                          </div>
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex justify-center gap-2 p-4 border-t">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1 rounded ${
                    selectedDay === day
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
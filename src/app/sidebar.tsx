import { useState } from "react";
import Create from "./creategoal";
import { Goal } from "./page";
import {
  Goal as GoalIcon,
  Search,
  Plus,
} from "lucide-react";

export default function Sidebar({setGoals, goals}:{setGoals: React.Dispatch<React.SetStateAction<Goal[]>>, goals:Goal[]}) {
  const [open, setOpen] = useState(true);
  const [popup, setPopup] = useState(false);

  return (
    <aside
      className={`bg-black h-screen p-5 pt-8 transition-all duration-300 ${
        open ? "w-72" : "w-20"
      } relative`}
    >
      <div className="inline-flex items-center">
        <div className="min-w-[40px] mr-6">
          <GoalIcon
            size={40}
            className="bg-white rounded-full border-2 border-gray-300 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <h1
          className={`text-white font-medium text-2xl origin-left whitespace-nowrap transition-all duration-300 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          }`}
        >
          Goal Tracker
        </h1>
      </div>

      <div className="flex items-center bg-gray-900 mt-6 px-4 py-2 rounded-md transition-all duration-300">
        <Search
          size={25}
          className="text-white cursor-pointer"
        />
        <input
          type="search"
          placeholder="Search"
          className={`ml-2 bg-transparent text-white w-full focus:outline-none transition-all duration-300 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          }`}
        />
      </div>

      <button
        onClick={() => setPopup(true)}
        className="gap-2 w-full flex items-center bg-gray-900 mt-6 px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-gray-800"
      >
        <Plus
          size={25}
          className="text-white cursor-pointer"
        />
        <h1
          className={`text-white font-semibold whitespace-nowrap transition-all duration-300 origin-left ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          }`}
        >
          Create New Goal
        </h1>
      </button>

      {popup && <Create setGoals={setGoals} goals={goals} closePopup={() => setPopup(false)} />}
    </aside>
  );
}
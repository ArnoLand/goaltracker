import { useState, useEffect } from "react";
import { Goal } from "./page";

export default function Create({
  closePopup,
  setGoals,
  goals,
}: {
  closePopup: () => void;
  setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
  goals: Goal[];
}) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);

  // const onSubmit = () => {
  //   const dateTime = new Date()
  //   const id = dateTime.toString()
  //   setGoals([...goals, { name, points, id }]);
  // };

  const onSubmit = async () => {
    const dateTime = new Date();
    const id = dateTime.toString();
    try {
      const response = await fetch("api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, points }),
      });
      console.log(response);
      setGoals([...goals, { name, points, id }])
    } catch (error) {
      console.error("Failed", error);
    }
  };

  useEffect(() => {
    console.log("Points changed:", points);
  }, [points]);

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  useEffect(() => {
    console.log("Goal changed:", goals);
  }, [goals]);

  return (
    <div className="relative top-5 flex flex-col">
      <div className="flex flex-col bg-gray-900 p-6 rounded-lg shadow-lg w-62 h-70 gap-4">
        <h1 className="text-white font-semibold">Name:</h1>
        <input
          className="border-b-2 border-gray-500 text-white bg-transparent focus:border-blue-500 focus:outline-none px-2 py-1"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <h1 className="text-white font-semibold pt-4">Points:</h1>
        <select
          className="text-white pt-4 w-full"
          onChange={(e) => setPoints(parseInt(e.target.value))}
        >
          <option className="text-black" value="5">
            5
          </option>
          <option className="text-black" value="10">
            10
          </option>
          <option className="text-black" value="15">
            15
          </option>
          <option className="text-black" value="20">
            20
          </option>
        </select>
        <div className="flex w-full justify-around">
          <button
            className=" bg-green-600 text-white rounded px-2 py-2 cursor-pointer hover:bg-green-900"
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            className=" bg-red-500 text-white rounded px-2 py-2 cursor-pointer hover:bg-red-800"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

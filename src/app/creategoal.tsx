import { useState, useEffect } from "react";

interface Goal {
  name: string;
  points: number;
}
export default function Create({ closePopup }: { closePopup: () => void }) {
  const [goals, setGoals] = useState([]);
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);

  const onSubmit = () => {};
  //useEffect(() => {
  //console.log("Points changed:", points);
//}, [points]);

//useEffect(() => {
  //console.log("Name changed:", name);
//}, [name]);
  
  return (

  <div className="relative top-5 flex flex-col">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-62 h-70">
        <h1 className="text-white font-semibold">Name:</h1>
        <input className="border-b-2 border-gray-500 text-white bg-transparent focus:border-blue-500 focus:outline-none px-2 py-1" onChange={(e)=> {setName(e.target.value)}}></input>
        <h1 className="text-white font-semibold pt-4">Points:</h1>
        <select className="text-white pt-4 w-full" onChange={(e)=> setPoints(parseInt(e.target.value))}>
            <option className="text-black" value="5">5</option>
            <option className="text-black" value="10">10</option>
            <option className="text-black" value="15">15</option>
            <option className="text-black" value="20">20</option>
        </select>
        
        <button className="absolute bottom-2 left-2 bg-green-600 text-white rounded px-2 py-2 cursor-pointer hover:bg-green-900">
            Submit
        </button>
        <button
          className="absolute bottom-2 right-2 bg-red-500 text-white rounded px-2 py-2 cursor-pointer hover:bg-red-800"
           onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>

  );
}

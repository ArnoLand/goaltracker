import { Goal } from "./page";
import { useEffect } from "react";
export default function Display({
  setGoals,
  goals,
}: {
  setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
  goals: Goal[];
}) {

   
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex bg-gray-500 w-3/4 h-3/4 rounded-md items-center justify-center">
      <div className="bg-gray-700 w-1/4 h-2/7">

        <ul>
          {goals.map((item) => (
            <li className="text-center" key={item.id}>
              {item.name} {item.points}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

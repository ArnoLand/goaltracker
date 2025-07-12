"use client";

export interface Goal {
  name: string;
  points: number;
  id: string;
}

import { useState, useEffect } from "react";
import Display from "./display";
import Sidebar from "./sidebar";

export default function Home() {
  const [goals, setGoals] = useState<Goal[]>([]);

 const fetchgoals = async () => {
    try {
      const response = await fetch("api/goals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      const fetchedgoals = await response.json();
      setGoals(fetchedgoals);
    } catch (error) {
      console.error("Failed", error);
    }
  };

  useEffect(() => {
    console.log("log");
    fetchgoals();
  }, []);
  

  return (
    <div className="bg-gray-200 flex">
      <Sidebar setGoals={setGoals} goals={goals} />
      <Display setGoals={setGoals} goals={goals} />
    </div>
  );
}

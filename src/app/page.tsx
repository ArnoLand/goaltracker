'use client';

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
 

  return (
    <div className="bg-gray-200 flex">
      <Sidebar setGoals={setGoals} goals={goals} />
      <Display setGoals={setGoals} goals={goals} />
      </div>
  );
}
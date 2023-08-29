"use client";

import { disableKeyboardEvents, disableMouseEvents } from "./utils/events";

export default function Home() {
  disableKeyboardEvents();
  disableMouseEvents();
  return (
    <div className="flex flex-col items-center border border-green-400 rounded-full text-lg text-green-400">
      <span>
        Welcome to my place. You already have a seat. What would you like to
        have? [WIP! Sorry]
      </span>
      <br />
      <span>Notes</span> <br />
      <span>{`code </>`}</span> <br />
      <span>whoami</span>
    </div>
  );
}

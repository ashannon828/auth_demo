import React from "react";
import app from "../firebaseConfig";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Log out</button>
    </div>
  );
}

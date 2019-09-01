import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/search/${query}`).then(res => {
      console.log(res);
    });
  }, [query]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <p>Add Menu Item To Database</p>
      <input
        onChange={e => setQuery(e.target.value)}
        value={query}
        style={{ height: 40, width: 1000, fontSize: 18, outline: "none" }}
        type="text"
        placeholder="Search Meal Item By Name"
      />
    </div>
  );
};

export default App;

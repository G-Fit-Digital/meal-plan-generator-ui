import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddItem.css";
import FlatList from "./components/FlatList";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(`http://3.16.31.235:3000/search/${query}`)
      .then(res => {
        if (res.data.list.item.length > 0) {
          setResults(res.data.list.item);
        }
        console.log(results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [query]);
  return (
    <div className="AddItem_Container">
      <input
        onChange={e => setQuery(e.target.value)}
        value={query}
        className="AddItem_TextInput"
        type="text"
        placeholder="Search Meal Item By Name..."
      />
      <FlatList data={results} />
    </div>
  );
};

export default App;

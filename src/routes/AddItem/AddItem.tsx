import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddItem.css";
import FlatList from "./components/FlatList";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/search/${query}`)
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
      <div>
        <p>Add Menu Item To Database</p>
        <input
          onChange={e => setQuery(e.target.value)}
          value={query}
          className="AddItem_TextInput"
          type="text"
          placeholder="Search Meal Item By Name"
        />
        {/* <button className="AddItem_SearchButton_Wrapper">Search</button> */}
      </div>
      <FlatList data={results} />
    </div>
  );
};

export default App;

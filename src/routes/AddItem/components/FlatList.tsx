import React from "react";
import Item from "./Item";
import "./FlatList.css";

export default ({ data }: any) => {
  return (
    <div className="FlatListContainer">
      {data.map((item: any) => (
        <Item item={item} />
      ))}
    </div>
  );
};

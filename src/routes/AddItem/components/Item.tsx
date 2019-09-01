import React from "react";
import "./FlatList";

export default ({ item }: any) => {
  return (
    <div className="FlatList_ItemContainer">
      <p className="FlatList_ItemText">{item.name}</p>
    </div>
  );
};

import React from "react";
import Item from "./Item";
import "./FlatList.css";
import AddItemModal from "./Modal/AddItemModal";
import { useMappedState } from "redux-react-hook";

const mappedState = (state: any) => ({
  modalOpen: state.itemReducer.modalOpen
});

export default ({ data }: any) => {
  const { modalOpen } = useMappedState(mappedState);
  return (
    <div className="FlatListContainer">
      {data.map((item: any) => (
        <Item item={item} />
      ))}
      <AddItemModal isOpen={modalOpen} />
    </div>
  );
};

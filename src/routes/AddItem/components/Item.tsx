import React from "react";
import "./FlatList";
import { mapDispatchActions } from "../../../utils/redux";
import { useDispatch } from "redux-react-hook";
import { setItem, toggleModal } from "../../../store/actions/item";

export default ({ item }: any) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      setItem,
      toggleModal
    },
    dispatch
  );
  return (
    <div
      onClick={() => {
        actions.setItem(item);
      }}
      className="FlatList_ItemContainer"
    >
      <p className="FlatList_ItemText">{item.name}</p>
    </div>
  );
};

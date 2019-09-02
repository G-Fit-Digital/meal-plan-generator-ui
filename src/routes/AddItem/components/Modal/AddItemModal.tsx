import React from "react";
import Modal from "react-modal";
import { mapDispatchActions } from "../../../../utils/redux";
import { useDispatch } from "redux-react-hook";
import { toggleModal } from "../../../../store/actions/item";

export default ({ isOpen }: any) => {
  const dispatch = useDispatch();
  const actions = mapDispatchActions(
    {
      toggleModal
    },
    dispatch
  );
  return (
    <Modal isOpen={isOpen}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 25,
          paddingRight: 25
        }}
      >
        <h1>MODAL</h1>
        <h1
          onClick={() => actions.toggleModal(false)}
          style={{ cursor: "pointer" }}
        >
          X
        </h1>
      </div>
    </Modal>
  );
};

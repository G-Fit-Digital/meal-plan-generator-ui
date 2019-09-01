import React from "react";

export default ({ data }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        overflowY: "scroll",
        height: "100vh",
        marginTop: 10,
        borderRadius: 6
      }}
    >
      {data.map((el: any) => (
        <div style={{ width: "100%", cursor: "pointer" }}>
          <p
            style={{
              fontWeight: "bold",
              height: 50,
              backgroundColor: "grey",
              width: 800,
              padding: 15,
              borderRadius: 15
            }}
          >
            {el.name}
          </p>
        </div>
      ))}
    </div>
  );
};

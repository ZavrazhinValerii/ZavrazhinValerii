import React, { useState } from "react";

export const MessageList = () => {
  const [list] = useState(["text1", "text2", "text3"]);

  return (
    <>
      {list.map((element, index) => {
        return <React.Fragment key={index}>{element}</React.Fragment>;
      })}
    </>
  );
};
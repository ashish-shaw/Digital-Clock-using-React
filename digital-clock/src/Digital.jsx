import React, { useState } from "react";

export const Digital = () => {
  let digiTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(digiTime);

  const UpdatedTime = () => {
    digiTime = new Date().toLocaleTimeString();
    setCtime(digiTime);
  };

  setInterval(UpdatedTime, 1000);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

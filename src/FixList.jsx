import React, { useState } from "react";

const FixList = ({ func, onTo }) => {
  const [fixed, setFixed] = useState("");

  return (
    <div>
      <input
        type="text"
        value={fixed}
        onChange={(e) => setFixed(e.target.value)}
      />
      <button onClick={() => func(fixed)}>확인</button>
    </div>
  );
};

export default FixList;

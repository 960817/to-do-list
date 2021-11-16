import React, { useState } from "react";
import FixList from "./FixList";

const MyListItem = ({ text, onDelete, onFix }) => {
  const [className1, setClassName1] = useState("list");
  const [blah, setBlah] = useState(false);
  const mayI = (e) => {
    e.target.checked ? setClassName1("list checked") : setClassName1("list");
  };

  return blah ? (
    <FixList
      func={(value) => {
        setBlah(false);
        onFix(value);
      }}
    />
  ) : (
    <div>
      <input className="my-list" type="checkBox" onClick={(e) => mayI(e)} />
      <span className={className1}>{text}</span>
      <button onClick={onDelete}>X</button>
      <button onClick={() => setBlah(true)}>수정</button>
    </div>
  );
};

export default MyListItem;

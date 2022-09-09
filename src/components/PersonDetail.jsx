import React from "react";
import { useState } from "react";

function PersonDetail() {
  const [person, setPerson] = useState({
    userName: "Ram",
    age: 20,
  });
  return <div>{person.userName.filter()}</div>;
}

export default PersonDetail;

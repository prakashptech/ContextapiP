import { useContext } from "react";
import { FirstName, lastName } from "./App";
import ComC from "./ComC";
export default function ComB() {
  const fname = useContext(FirstName);
  const lname = useContext(lastName);
  return (
    <div>
      <p>useContext</p>
      <h1>
        {fname}
        {lname}
      </h1>
      <ComC />
    </div>
  );
}

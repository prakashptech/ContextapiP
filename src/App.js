import { createContext } from "react";
import ComA from "./ComA";
const FirstName = createContext();
const lastName = createContext();
export default function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"prakash"}>
        <lastName.Provider value={"Paswan"}>
          <ComA />
        </lastName.Provider>
      </FirstName.Provider>
    </div>
  );
}
export { FirstName, lastName };

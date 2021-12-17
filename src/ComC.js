import React from "react";
import { FirstName, lastName } from "./App";
export default function ComC() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <lastName.Consumer>
                {(lname) => {
                  return (
                    <h1>
                      <p>I have passed data using Consumer</p>
                      <h1>
                        My name is {fname}
                        {lname}
                      </h1>
                    </h1>
                  );
                }}
              </lastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

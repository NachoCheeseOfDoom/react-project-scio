import React from "react";
import AlertButton from "../components/AlertButton";

export default function TestPage() {
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <AlertButton BtnText="Click for alert message" />
      {/* <div>TestPage, i can add something else here</div> */}
      {/* <form action="https://google.com">
        <input
          className="btn btn-primary mt-2 mb-2"
          type="submit"
          value="Go to Google"
        />
      </form>
      <form action="https://youtube.com">
        <input
          className="btn btn-primary mt-2 mb-2"
          type="submit"
          value="Go to Youtube"
        />
      </form> */}
    </>
  );
}

// import React from "react";

// export default function AlertButton(ButtonProps: { alertText?: string }) {
//   const handleClick = () => {
//     alert("This is an Alert! theres nothing to worry about");
//   };

//   return (
//     <button onClick={handleClick} className="btn btn-primary mt-2 mb-2">
//       {ButtonProps.alertText || "click me"}
//     </button>
//   );
// }

import React, { Component } from "react";

interface ButtonClassProps {
  BtnText?: string;
}

export default class AlertButton extends Component<ButtonClassProps> {
  handleClick() {
    alert("This is an Alert! theres nothing to worry abouts");
  }

  render() {
    return (
      <button className="btn btn-primary mb-2" onClick={this.handleClick}>
        {this.props.BtnText || "click me"}
      </button>
    );
  }
}

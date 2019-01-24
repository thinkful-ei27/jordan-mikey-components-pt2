import React from "react";

export default function Output(props){

  
  return (
    <div>
      <h3>{props.value}</h3>
    </div>
  )


}

Output.defaultProps = { value: "Get your Zodiak sign!" }
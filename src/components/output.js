import React from "react";

export default function Output(props){

  
  return (
    <div>
      <h3>Zodiak</h3>
      <ouput value={props.value}></ouput>
    </div>
  )


}

Output.defaultProps = { value: "Get your Zodiak sign!" }
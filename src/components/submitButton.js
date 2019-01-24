import React from "react";

export default function submitButton(props){
  return(
    <button type="submit" onClick={e => props.onSubmit(e)}>
      Submit</button>
  )
}

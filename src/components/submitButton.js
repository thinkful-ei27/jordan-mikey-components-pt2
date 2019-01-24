import React from "react";

export default function submitButton(props){
  return(
    <button type="submit" onSubmit={event => {
      event.preventDefault();
      console.log('button was clicked')
    }}>
      Submit</button>
  )
}

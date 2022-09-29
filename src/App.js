import logo from './media/images/unwrap_and_steal_logo.png';
import './App.css';
import React, { useEffect, useState } from 'react'
import InputTransformComponent from './components/InputTransformComponent'

function App() {
  const [stateIndex, setStateIndex] = useState(0)


  const video = (
    <video autoPlay loop muted playsInline poster={icon}>
      <source src='https://videosformattswebsite.s3.us-west-2.amazonaws.com/skullVideo_square.mp4' type="video/mp4"/>
    </video>
  )

  // DO YOU WANT TO ESCAPE
  const yesEscape = <p 
    style={{
      color: "#ff00a8",
      cursor: "pointer",
      paddingRight: "2vw"}}
    onClick={() => 
      {
        setStateIndex(2);
      }}
      >YES</p>

  const slash = <p> / </p>
  const noEscape = <p 
    style={{
      color: "#ff00a8",
      cursor: "pointer",
      paddingLeft: "2vw"}}
    onClick={() => 
      {
        setStateIndex(1);
      }}
      >NO</p>

  const escapeBody = (
    <div className="State-Escape">
      <h3>DO YOU WANT TO ESCAPE?</h3>
      <div
        className='EscapeSelection'
      >
      {yesEscape}{slash}{noEscape}
      </div>
    </div>
  )

  // COME BACK WHEN YOU'RE READY
  const comeBacktext = <p
    style={{
      color: "#ff00a8",
      fontSize: "3vh",
      fontWeight: "bold"}}
    >COME BACK WHEN<br />YOU'RE READY</p>;


  // ARE YOU SURE
  const yesSure = <p 
    style={{
      color: "#ff00a8",
      cursor: "pointer",
      paddingRight: "2vw"}}
    onClick={() => 
      {
      console.log("THERE IS NO ESCAPE");
      setStateIndex(4);
      }}
    >YES</p>

  const noSure = <p 
    style={{
      color: "#ff00a8",
      cursor: "pointer",
      paddingLeft: "2vw"}}
    onClick={() => 
      {
        setStateIndex(3);
      }}
    >NO</p>

  const areYouSureBody = (
    <div className="State-Sure">
      <h3>THERE ARE RISKS INVOLVED.<br />DO YOU WANT TO CONTINUE?</h3>
      <div
        className='EscapeSelection'
      >
        {yesSure}{slash}{noSure}
      </div>
    </div>
    )

  // THAT IS WHY NO ONE WILL REMEMBER YOUR NAME
  const notSuretext = <p
    style={{
      color: "#ff00a8",
      fontSize: "3.2vh",
      fontWeight: "bold"}}
    >THAT IS WHY NO ONE WILL<br />REMEMBER YOUR NAME</p>;

  // EMAIL PAGE
  const emailEntry = (
    <div className="State-EmailEntry">
      <InputTransformComponent/>
    </div> 
  )

    // Gets the code for the current state.
    // 0 = do you want to escape
    // 1 = Come back when you're ready
    // 2 = Are you sure. there are risks involved
    // 3 = That is why no one will remember your name
    // 4 = Email page
  const currentDynamicContent = (currentState) => {
    switch(currentState){
      case 0:
        return escapeBody;
      case 1:
        return comeBacktext;
      case 2:
        return areYouSureBody;
      case 3:
        return notSuretext;
      case 4:
        return emailEntry;
      default:
        return;
    }

  }

  return (
    <div className="App">
        <header className="App-header">
        <div className="Logo">
          <img src={logo} ></img>
        </div>
          {video}
      </header>
      <div className='dynamic-content'>
        {currentDynamicContent(stateIndex)}
      </div>
    </div>
  );
}

export default App;

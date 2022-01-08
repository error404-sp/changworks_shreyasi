import './App.css';
import { GlobalHotKeys} from "react-hotkeys";
import confetti from "canvas-confetti";
import React from 'react';

function App() {

    const keyMap = {
    KEY_WORD: 'c h a n g w o r k s',
    };

    const handlers = {
    KEY_WORD: burstConfetti
    };

    function burstConfetti(){

    return confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
    });
    }

  return (
    <div className="App">
      <h1>Type "changworks"</h1>
        <GlobalHotKeys handlers={handlers} className="node" keyMap={keyMap}/>
        <details>
          <summary>Quick Question/Doubt🤔 </summary>
        How to apply HotKey on a Input element?</details>
      
    </div>
  );
}

export default App;

// import React,{useState} from "react";
// import { AuthClient } from "../../../../node_modules/@dfinity/auth-client/lib/cjs/index";
// import {token,canisterId,createActor} from  "../../../declarations/token";
// function Faucet() {
// const [isDisabled,setDisable]=useState(false);
// const[buttonText,setButtonText]=useState("Gimme gimme");
//   async function handleClick(event) {
//     setDisable(true);
//     //await token.payOut();
//     setButtonText(await token.payOut());
//     //setDisable(false);
//     const authClient=await AuthClient.create();
//     const identity=await authClient.getIdentity();
//     const authenticatedCanister =createActor(canisterId,{
//       agentOptions:{
//         identity,
//       },
//     });
//     const result =await authenticatedCanister.payOut();
//     setButtonText(result);
    

//   }

//   return (
//     <div className="blue window">
//       <h2>
//         <span role="img" aria-label="tap emoji">
//           🚰
//         </span>
//         Faucet
//       </h2>
//       <label>Get your free DNITHISH tokens here! Claim 10,000 DNIT tokens to your account.</label>
//       <p className="trade-buttons">
//         <button 
//         disabled={isDisabled}
//         id="btn-payout" 
//         onClick={handleClick} 
//         >
//           {buttonText}
//         </button>
//       </p>
//     </div>
//   );
// }

// export default Faucet;

import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";

function Faucet(props) {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.payOut();
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DNITHISH tokens here! Claim 100 DNIT tokens to {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button 
        id="btn-payout" 
        onClick={handleClick}
        disabled={isDisabled}
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;






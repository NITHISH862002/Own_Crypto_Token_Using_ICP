import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import {token} from "../../../declarations/token";
function Transfer() {
  const[recipentId,setId]=useState("");
  const[transferAmount,setAmount]=useState("");
  const[isHidden,setHidden]=useState(true);
  const [isDisabled,setDisable]=useState(false);
  const [feedBack,setFeedBack]=useState("");

  async function handleClick() {
    setDisable(true);
    const recipent=Principal.fromText(recipentId);
    const amounttotransfer=Number(transferAmount);
    const result=await token.transfer(recipent,amounttotransfer);
    setFeedBack(result);
    setHidden(false);
    setDisable(false);

    
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipentId}
                onChange={(e)=>setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={transferAmount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled} >
            Transfer
          </button >
        </p>
        <p hidden={isHidden}>{feedBack}</p>
      </div>
    </div>
  );
}

export default Transfer;

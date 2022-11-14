import React from 'react'
import { useState } from 'react';


export default function VoteCoin() {
      const handleCDOnChange = (event) => {
        setcd(event.target.value);
      };
      const btnOnClick = () => {
        console.log("I am clicked" +cn);
      };
      const [cn, setcd] = useState("");
  return (
    <>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter Coin Name to vote
        </label>
        <input
          type="text"
          className="form-control"
          value={cn}
          onChange={handleCDOnChange}
        />
      </div>
      <div align="center">
        <button
          type="button"
          className="btn btn-lg btnStyle"
          onClick={btnOnClick}
        >
          Vote Coin
        </button>
      </div>
    </>
  )
}

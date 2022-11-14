import React, { useState } from "react";

export default function Addcoin() {
  const btnOnClick = () => {
    console.log("I am clicked" + cn + cNet + cm + cd);
  };
  const handleOnChange = (event) => {
    // setcn(event.target.value)
    if (event.target.value.match("^[a-zA-Z ]*$") != null) {
      setcn(event.target.value);
    } else {
      console.log("Please Enter Coin Name");
    }
  };
  const handleCNETOnChange = (event) => {
    setcNet(event.target.value);
  };
  const handleCMOnChange = (event) => {
    setcm(event.target.value);
  };
  const handleCDOnChange = (event) => {
    setcd(event.target.value);
  };
  const [cn, setcn] = useState("");
  const [cNet, setcNet] = useState("");
  const [cm, setcm] = useState("");
  const [cd, setcd] = useState("");

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Coin Name
        </label>
        <input
          type="text"
          className="form-control"
          value={cn}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleDataList" className="form-label">
          Network
        </label>
        <input
          className="form-control"
          list="datalistOptions"
          value={cNet}
          placeholder="Network"
          onChange={handleCNETOnChange}
        />
        <datalist id="datalistOptions">
          <option value="Binance Smart Chain" />
          <option value="Ethereum(ETH)" />
          <option value="Solana(SOL)" />
          <option value="Tron(TRX)" />
        </datalist>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Market Value
        </label>
        <input
          type="number"
          className="form-control"
          value={cm}
          onChange={handleCMOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          value={cd}
          rows="3"
          onChange={handleCDOnChange}
        ></textarea>
      </div>
      <div align="center">
        <button
          type="button"
          className="btn btn-lg btnStyle"
          onClick={btnOnClick}
        >
          Add Coin
        </button>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";//-
import { useState, useEffect } from "react";//-
export default function Home() {
  // const API_KEY = "e219e5a64c0d5dd462c55db837f711cc";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
     .then((response) => response.json())
     .then((jsonConverted) => {
       setData(jsonConverted);
       console.log(jsonConverted);
     });
  }, []);

  const bitcoinRate = data?.rates?.BTC;
  const ethereumRate = data?.rates?.ETH;
  const xrpRate = data?.rates?.XRP;
  const BNBRate = data?.rates?.BNB;
  const solaraRate = data?.rates?.SOL;
  const DGDRate = data?.rates?.DGD;
  const BLOCKRate = data?.rates?.BLOCK;
  const ABCRate = data?.rates?.ABC;

  return (
    <>
    <div className="moving">
      <marquee className="mar py-4">BTC: ${bitcoinRate} ㅤ|ㅤ ETH: ${ethereumRate} ㅤ|ㅤ SOL: ${solaraRate} ㅤ|ㅤ XRP: ${xrpRate} ㅤ|ㅤ BNB: ${BNBRate} ㅤ|ㅤ DGD: ${DGDRate} ㅤ|ㅤ BLOCK: ${BLOCKRate} ㅤ|ㅤ ABC: ${ABCRate}</marquee>
    </div>
    <div className="main-container"><br /><br /><br /><br />
      <div className="title-container md:container md:mx-auto">
        <p className="main-title">Buy, Sell &<br />Trade Crypto</p><br />
        <p className="main-text">Join the world’s most comprehensive and secure trading platform. Buy and sell Bitcoin, Ethereum, XRP and many other cryptocurrencies with fiat or crypto.</p>
        <button className="get-started bg-blue-600 text-white	py-4 px-12 rounded flex justify-center">Get started</button>
      </div>
    </div>
    </>
  );
}
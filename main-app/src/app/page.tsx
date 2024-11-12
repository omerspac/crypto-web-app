"use client";

import Image from "next/image";//-
import { useState, useEffect } from "react";//-
export default function Home() {
  const API_KEY = "e219e5a64c0d5dd462c55db837f711cc";
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
  const solanaRate = data?.rates?.SOL;
  const DGDRate = data?.rates?.DGD;
  const BLOCKRate = data?.rates?.BLOCK;
  const ABCRate = data?.rates?.ABC;
  const LTCRate = data?.rates?.LTC;
  const DOGERate = data?.rates?.DOGE;

  return (
    <>
    <div className="moving py-3">
        <div className="scrolling-text">
          BTC: ${bitcoinRate} ㅤ|ㅤ ETH: ${ethereumRate} ㅤ|ㅤ SOL: ${solanaRate} ㅤ|ㅤ XRP: ${xrpRate} ㅤ|ㅤ BNB: ${BNBRate} ㅤ|ㅤ DGD:$ {DGDRate} ㅤ|ㅤ BLOCK: ${BLOCKRate} ㅤ|ㅤ ABC: ${ABCRate} ㅤ|ㅤLTC: ${LTCRate} ㅤ|ㅤDOGE: ${DOGERate}
        </div>
      </div>

    <div className="main-container"><br /><br /><br /><br />
      <div className="title-container md:container md:mx-auto">
        <p className="main-title">Buy, Sell &<br />Trade Crypto</p><br />
        <p className="main-text">Join the world’s most comprehensive and secure trading platform. Buy and sell Bitcoin, Ethereum, XRP and many other cryptocurrencies with fiat or crypto.</p>
        <button className="get-started bg-blue-600 text-white	py-4 px-12 rounded flex justify-center">Get started</button>
      </div>

    </div>
    <div className="table-intro bg-blue-600">
        <p className="table-intro-text text-white">Today's Trending Cryptocurrencies</p>
    </div>

    <table className="crypto-table">
      <thead>
      <tr className="bg-blue-600">
        <th>#</th>
        <th>Cryptocurrency</th>
        <th>Rate Per Coin</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bitcoin (BTC)</td>
          <td>${bitcoinRate}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ethereum (ETH)</td>
          <td>${ethereumRate}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dogecoin (DOGE)</td>
          <td>${DOGERate}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Binance Coin (BNB)</td>
          <td>${BNBRate}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Solana (SOL)</td>
          <td>${solanaRate}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Decentralized Gold (DGD)</td>
          <td>${DGDRate}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Blockchain (BLOCK)</td>
          <td>${BLOCKRate}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>ABC (ABC)</td>
          <td>${ABCRate}</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Litecoin (LTC)</td>
          <td>${LTCRate}</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Ripple (XRP)</td>
          <td>${xrpRate}</td>
        </tr>
      </tbody>
    </table>
    </>
  );
}
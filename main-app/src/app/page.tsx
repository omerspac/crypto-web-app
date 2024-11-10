import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="moving">
      <marquee className="mar py-4">TEST lorem</marquee>
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

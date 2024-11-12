import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <h3><b>Omer CryptoMarket</b></h3>
                <p>
                Omer CryptoMarket is a comprehensive cryptocurrency trading platform that enables users to buy, sell, and trade a wide range of digital assets including Bitcoin, Ethereum, Solana, and many more. Designed for both beginners and experienced traders.</p>
            </div>
            <div className="footer-section">
                <h3><b>Quick Links</b></h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Market</a></li>
                    <li><a href="/">Features</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3><b>Follow Links</b></h3>
                <div className="social-icons">
                    <a href="#" className="social-icon">🌍</a>
                    <a href="#" className="social-icon">📸</a>
                    <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p><b>&copy; 2024 OmerTravelBlogs. All Rights Reserved.</b></p>
        </div>
    </footer>
    
    );
  }
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <h3><b>About Website</b></h3>
                <p>Your go-to travel blog for tips, destinations, and adventures around the world.</p>
            </div>
            <div className="footer-section">
                <h3><b>Quick Links</b></h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3><b>Follow Links</b></h3>
                <div className="social-icons">
                    <a href="#" className="social-icon">🌍</a>
                    <a href="#" className="social-icon">📸</a>
                    <a href="#" className="social-icon">✈️</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p><b>&copy; 2024 OmerTravelBlogs. All Rights Reserved.</b></p>
        </div>
    </footer>
    
    );
  }
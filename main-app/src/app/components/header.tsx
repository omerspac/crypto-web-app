import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <ul className="header-elements">
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/about-us">
                <li>Market</li>
                </Link>
                <Link href="/contact-us">
                <li>Features</li>
                </Link>
                <Link href="/contact-us">
                <li>Pricing</li>
                </Link>
                <Link href="/contact-us">
                <li>Resources</li>
                </Link>
            </ul>
        </div>
    );
  }
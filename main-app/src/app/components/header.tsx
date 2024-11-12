import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <ul className="header-elements">
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/">
                <li>Market</li>
                </Link>
                <Link href="/">
                <li>Features</li>
                </Link>
                <Link href="/">
                <li>Pricing</li>
                </Link>
                <Link href="/">
                <li>Resources</li>
                </Link>
            </ul>
        </div>
    );
  }
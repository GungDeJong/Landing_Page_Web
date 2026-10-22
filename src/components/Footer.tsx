import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="w">
                <div className="fg">
                    <div>
                        <span className="logo">
                            <Image src="/images/logo.png" alt="PT Iner Radix Technology logo" width={150} height={120} />
                        </span>
                        <p>Enterprise software engineering and cloud partner, helping businesses build with agility, scale, and security.</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#solutions">Why Iner Radix</a></li>
                            <li><a href="#contact">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Custom Software</a></li>
                            <li><a href="#services">Cloud &amp; DevOps</a></li>
                            <li><a href="#services">System Integration</a></li>
                            <li><a href="#services">Web &amp; Mobile</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>West Jakarta, Indonesia</li>
                            <li><a href="mailto:info@inerradix.com">info@inerradix.com</a></li>
                            <li><a href="tel:+622155501899">+62 21 5550 1899</a></li>
                        </ul>
                    </div>
                </div>
                <div className="fb">
                    <span>© 2026 PT Iner Radix Technology. All rights reserved.</span>
                    <span>LinkedIn · GitHub · Instagram</span>
                </div>
            </div>
        </footer>
    );
}

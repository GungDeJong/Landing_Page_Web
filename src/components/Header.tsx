const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Solutions", "#solutions"],
    ["Technology", "#tech"],
    ["Contact", "#contact"],
];

export default function Header() {
    return (
        <header>
            <div className="w nav">
                <a className="brand" href="#home">Iner Radix</a>
                <ul>
                    {links.map(([label, href]) => (
                        <li key={href}><a href={href}>{label}</a></li>
                    ))}
                </ul>
                <a className="btn pri" href="#contact">Get a Consultation</a>
            </div>
        </header>
    );
}

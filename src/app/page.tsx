import Image from "next/image";
import {
  ArrowRight, Terminal, CloudUpload, Cable, Infinity as InfinityIcon, MonitorSmartphone, Headset,
  LayoutGrid, Lock, RefreshCw, MapPin, Mail, Phone, Cloud, Server, Boxes, Layers, Workflow,
  Code, Braces, Zap, Database, Share2,
} from "lucide-react";

import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiGooglecloud, SiKubernetes, SiDocker, SiTerraform, SiReact,
  SiNodedotjs, SiGo, SiPython, SiPostgresql, SiApachekafka,
} from "react-icons/si";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const stats = [
  ["10", "+", "Successful projects"],
  ["5", "+", "Years of experience"],
  ["10", "+", "Business partners"],
  ["24/7", "", "Reliable support"],
];

const services = [
  { icon: Terminal, title: "Custom Software Development", text: "Applications and backend systems designed around your workflow, reliable today and easy to scale tomorrow." },
  { icon: CloudUpload, title: "Cloud Migration & Infrastructure", text: "A smooth move to the cloud, with a setup that is secure, scalable, and cost-efficient." },
  { icon: Cable, title: "Enterprise System Integration", text: "Connect your tools, data, and platforms, and modernize legacy systems without disrupting operations." },
  { icon: InfinityIcon, title: "DevOps & Automation", text: "Automated testing and deployment pipelines that help your team release quickly and safely." },
  { icon: MonitorSmartphone, title: "Web & Mobile Applications", text: "Fast, intuitive apps that make everyday work easier for your customers and employees." },
  { icon: Headset, title: "IT Consulting & Support", text: "Practical advice on strategy, architecture, and security, with a team that stays after launch." },
];

const why = [
  { icon: LayoutGrid, title: "Scalable architecture", text: "Systems that grow with your business, so you never rebuild from scratch." },
  { icon: Lock, title: "Security first", text: "Security in every stage of development, from encryption to continuous scanning." },
  { icon: RefreshCw, title: "Agile delivery", text: "Short sprints and clear updates that keep projects on time and on budget." },
  { icon: Headset, title: "Dedicated support", text: "A team that stays with you after launch and responds fast when it matters." },
];

const steps = [
  ["01", "Discover", "We learn your business, goals, and existing systems before any code is written."],
  ["02", "Design", "We map the system and build interactive prototypes you can approve early."],
  ["03", "Develop", "We build in short sprints with regular testing and progress updates."],
  ["04", "Deploy & Support", "We launch smoothly, train your team, and keep everything running well."],
];

const tech: { icon: IconType; name: string; color: string }[] = [
  { icon: FaAws, name: "AWS", color: "#FF9900" },
  { icon: SiGooglecloud, name: "Google Cloud", color: "#4285F4" },
  { icon: VscAzure, name: "Microsoft Azure", color: "#0078D4" },
  { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
  { icon: SiReact, name: "React", color: "#087EA4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiGo, name: "Golang", color: "#00ADD8" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiApachekafka, name: "Apache Kafka", color: "#231F20" },
];
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="home" style={{ padding: 0 }}>
          <div className="w hero">
            <div>
              <h1>Developing systems that support your business growth</h1>
              <p className="lead">
                We design, build, and optimize enterprise platforms and cloud-native systems that stay fast, secure, and reliable as you grow.
              </p>
              <div className="row">
                <a className="btn pri" href="#contact">Get a Consultation <ArrowRight /></a>
                <a className="btn sec" href="#services">View Our Services</a>
              </div>
            </div>
            <figure className="photo">
              <Image src="/images/hero.jpg" alt="Engineer reviewing code and interface design on two monitors" width={1200} height={800} priority style={{ objectPosition: "35% center" }} />
            </figure>
          </div>
        </section>

        {/* STATS */}
        <section className="alt" style={{ padding: "48px 0" }}>
          <div className="w stats">
            {stats.map(([n, plus, label]) => (
              <div className="stat" key={label}>
                <b>{n}{plus && <em>{plus}</em>}</b>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="w two" style={{ alignItems: "center" }}>
            <div>
              <h2>Pioneering resilient digital transformation</h2>
              <p className="sub">
                PT Iner Radix Technology is an enterprise software engineering and cloud consulting company based in West Jakarta. We combine solid architecture, clear engineering practice, and experienced people to deliver technology that works.
              </p>
              <div className="vm" style={{ marginTop: 32 }}>
                <div>
                  <h3>Our vision</h3>
                  <p>To be a leading and trusted software engineering company in Indonesia, helping businesses grow sustainably with technology they can depend on.</p>
                </div>
                <div>
                  <h3>Our mission</h3>
                  <p>To build high-performance software and cloud platforms through agile expertise, end-to-end security, and continuous innovation.</p>
                </div>
              </div>
            </div>
            <figure className="photo">
              <Image src="/images/about.jpg" alt="Team collaborating in a glass-walled meeting room" width={1200} height={800} style={{ aspectRatio: "1/1", objectPosition: "25% center" }} />
            </figure>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="alt">
          <div className="w">
            <div className="head c">
              <h2>End-to-end enterprise technology solutions</h2>
              <p className="sub">From the first idea to long-term support, one team for your software and cloud needs.</p>
            </div>
            <div className="grid3">
              {services.map(({ icon: Icon, title, text }) => (
                <div className="card" key={title}>
                  <div className="ico"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="solutions">
          <div className="w two" style={{ alignItems: "center" }}>
            <div>
              <h2>Why businesses trust Iner Radix</h2>
              <p className="sub">We build software that stays reliable when your business needs it most.</p>
              <div className="why">
                {why.map(({ icon: Icon, title, text }) => (
                  <div key={title}>
                    <Icon />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure className="photo">
              <Image src="/images/why.jpg" alt="Quality metric displayed on a dashboard" width={1200} height={900} style={{ aspectRatio: "4/5" }} />
              <figcaption>“Designed for resilience, built to make an impact on your company.”</figcaption>
            </figure>
          </div>
        </section>

        {/* PROCESS */}
        <section className="alt">
          <div className="w">
            <div className="head">
              <h2>From idea to launch, made simple</h2>
              <p className="sub">A clear, collaborative approach that keeps you informed at every stage.</p>
            </div>
            <div className="steps">
              {steps.map(([n, title, text]) => (
                <div className="step" key={n}>
                  <b>{n}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH */}
        <section id="tech">
          <div className="w">
            <div className="head c">
              <h2>Powered by modern, scalable technologies</h2>
              <p className="sub">Proven open-source frameworks and leading cloud platforms.</p>
            </div>
            <div className="tech">
              {tech.map(({ icon: Icon, name }) => (
                <span key={name}><Icon />{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="w in">
            <div>
              <h2>Ready to build your next solution?</h2>
              <p>Tell us what you need. Our team will help you plan the modernization, development, and cloud setup that fits your business.</p>
            </div>
            <a className="btn pri" href="#contact">Contact Us <ArrowRight /></a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="w two">
            <div>
              <h2>Let&apos;s talk about your project</h2>
              <p className="sub">Send a message and we&apos;ll reply within one business day.</p>
              <div className="ci">
                <div><MapPin />West Jakarta, Indonesia</div>
                <div><Mail />info@inerradix.com</div>
                <div><Phone />+62 21 5550 1899</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Link } from "react-router";
import SplitPage from "./SplitPage";
import { FaArrowRight } from "react-icons/fa";
import EnvelopeImg from "./assets/envelope.png";
import "./styles/Contact.css";

function ContactPage() {
  return (
    <SplitPage
      dark={false}
      visual={
        <div className="contact-visual">
          <img src={EnvelopeImg} alt="Contact Artwork" />
        </div>
      }
      visualMeta="RESEARCH / COLLABORATION / PRACTICE"
    >
      <div className="split-title">
        <h2>
          Let&apos;s explore what <em>mapping can make possible.</em>
        </h2>
        <p className="split-lede">
          Open to research collaborations, community partnerships, academic
          engagements, planning projects, workshops and conversations around
          critical spatial practice.
        </p>
      </div>

      <Link to="mailto:hello@countermappers.com" className="contact-email-page">
        hello@countermappers.com <FaArrowRight />
      </Link>

      <div className="contact-list-page">
        {[
          "Research collaboration",
          "Community project",
          "Planning / consultancy",
          "Workshop / teaching",
          "Academic inquiry",
          "Speaking / exhibition",
        ].map((item, i) => (
          <Link to="mailto:hello@countermappers.com" key={item}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {item}
            <FaArrowRight />
          </Link>
        ))}
      </div>
    </SplitPage>
  );
}

export default ContactPage;

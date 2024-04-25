import EmailIcon from "../assets/email.svg";
import PhoneIcon from "../assets/smartphone.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";

export default function Header({ data }) {
    const { name, role, description, email, phone, linkedInLink, githubLink } = data;
    return (<header className="header">
        <section className="header-title">
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{description}</p>
        </section>
        <section className="header-contact">
            <span className="header-icon-wrap"><img src={EmailIcon} alt="email icon" className="header-icon" /><span>{email}</span></span>
            <span className="header-icon-wrap"><img src={PhoneIcon} alt="email icon" className="header-icon" /><span>{phone}</span></span>
            <span className="header-icon-wrap"><img src={LinkedInIcon} alt="email icon" className="header-icon" /><a href={linkedInLink} target="_blank">Link</a></span>
            <span className="header-icon-wrap"><img src={GithubIcon} alt="email icon" className="header-icon" /><a href={githubLink} target="_blank">Link</a></span>
        </section >
    </header >)
}
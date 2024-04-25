export default function Experience({ data }) {
    const { company, role, startFrom, upTo, description } = data;

    const getDescription = () => {
        return description.map((item, index) => <p className="exp-li" key={index}>{item}</p>)
    }

    return (
        <div className="exp">
            <h2 className="exp-company">{company}</h2>
            <h3 className="exp-role">{role}</h3>
            <div className="exp-period"><span>{startFrom}</span> - <span>{upTo || "Present"}</span></div>
            <div className="exp-desc">{getDescription()}</div>
        </div>
    );
}

// company: "Quadlabs Technologies Pvt Ltd",
//     role: "Android & Flutter Developer",
//     startFrom: "08/2023",
//     upTo: "",
//     description:

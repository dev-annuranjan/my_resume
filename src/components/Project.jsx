export default function Project({ data }) {
    const { title, description } = data;

    const getDescription = () => {
        return description.map((item, index) =>
            <p className="project-li" key={index}>
                {item.title && <span className="project-li-title">{item.title}</span>}
                <span className="project-li-desc">{item.description}</span>
            </p>);
    }

    return (<div className="project">
        <h2 className="project-title">{title}</h2>
        <div className="project-desc">{getDescription()}</div>
    </div>)
}
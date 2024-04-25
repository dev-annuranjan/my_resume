export default function Education({ data }) {
    const { title, keys } = data;

    const getKeys = () => keys.map(key => <span className="skill-key" key={key}>{key}</span>);

    return <div className="skill">{title && <span className="skill-title">{title}:</span>}{getKeys()}</div>;
}
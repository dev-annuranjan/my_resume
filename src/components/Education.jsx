export default function Education({ data }) {
    const { degree, college, status } = data;
    return (<div className="edu">
        <div className="edu-degree">{degree}{<span className="edu-status">{status}</span>}</div>
        <div className="edu-college">{college}</div>
    </div>)
}

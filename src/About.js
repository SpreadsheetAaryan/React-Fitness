import { Link } from "react-router-dom";

const About = () => {
    return (
        <main className="About">
            <h2>About</h2>
            <p style={{ marginTop: "1rem" }}>
                This fitness app allows you to compete with others about your workouts and a community to keep you disciplined.
            </p>
            <p style={{ marginTop: "1rem" }}>
                <Link to="/">Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default About
import { useState } from "react";

function HomePage() {
    const [activeNav, setActiveNav] = useState(false)

    return (
        <div className="home">
            <h1 className={`test ${activeNav === 0 ? "active" : ""}`} onClick={() => setActiveNav(0)}>hello</h1>
            <h1 className={`test ${activeNav === 1 ? "active" : ""}`} onClick={() => setActiveNav(1)}>hey there</h1>
            <h1 className={`test ${activeNav === 2 ? "active" : ""}`} onClick={() => setActiveNav(2)}>be there</h1>
        </div>
    )
}

export default HomePage;
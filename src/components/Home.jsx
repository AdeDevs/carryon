import { useState } from "react";

function HomePage() {
    const [isObjectiveActive, setIsObjectiveActive] = useState(false)
    
    return (
        <div className="home">
            <header>
                <div className="header-text">
                    <button className="join-btn"> <span className="globe"><ion-icon name="earth-outline"></ion-icon></span> Join Us</button>
                    <h1>Let's come <span className="color"> be part </span> of changes</h1>
                    <button className="started-btn">Get Started</button>
                    <button className="explore-btn"><span className="more-span">Explore More</span> <span><ion-icon name="arrow-forward-sharp"></ion-icon></span></button>
                </div>
                <div className="header-img"></div>
            </header>
            <main>
                <div className="impact">
                    <h5>About we are - you are</h5>
                    <div className="impact-head">
                    <section>
                        <h1>More People</h1>
                        <h1>More Impact</h1>
                    </section>
                    <section className="impact-right">
                        <p>
                            Because together, we can make a real difference. Our volunteers service in a variety of roles according to their skill and interest.
                        </p>
                        <button>Read More</button>
                    </section>
                    </div>
                    <div className="impact-foot">
                        <section className={`objective-image ${isObjectiveActive === 0 ? "show" : ""}`} onClick={() => setIsObjectiveActive(0)}>
                            <div className="objectives-text">
                                <h2>Save Our Planet</h2>
                                <p>Planting trees is not only useful in the present but also in the future...</p>
                            </div>
                        </section>
                        <section className={`help-img ${isObjectiveActive === 1 ? "show" : ""}`} onClick={() => setIsObjectiveActive(1)}>
                            <div className="objectives-text">
                                <h2>Together We Care</h2>
                                <p>Small acts of kindness can create a ripple effect of positive change. Working together strengthens our communities and builds a better tomorrow...</p>
                            </div>
                        </section>
                        <section className={`community-img ${isObjectiveActive === 2 ? "show" : ""}`} onClick={() => setIsObjectiveActive(2)}>
                            <div className="objectives-text">
                                <h2>Empowering Communities</h2>
                                <p>Every effort helps build a brighter future and your contribution helps create a brighter, more sustainable future for all...</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage;
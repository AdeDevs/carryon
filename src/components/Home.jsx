import { useState } from "react";
import One from "../assets/volunteer.jpg";

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
                    <div className="together-card">
                        <h5>Get ready for now -  start by your</h5>
                        <h2>Together we are strong</h2>
                        <section className="stats">
                        <div>
                            <h1>20k</h1>
                            <p>more people have taken part of changes</p>
                        </div>
                        <div>
                            <h1>20+</h1>
                            <p>more than 20 countries have used this service</p>
                        </div>
                        <div>
                            <h1>20M</h1>
                            <p>more than $20M has accumulated every day</p>
                        </div>
                        </section>
                    </div>
                </div>
                <div className="community">
                    <div className="community-stats">
                        <h5>Open Partnership -  Start Your Journey</h5>
                        <h1>Almost is <span className="color">never</span> enough</h1>
                        <div className="community-list">
                            <div>
                                <h2><ion-icon name="globe-outline"></ion-icon></h2>
                                <aside>
                                    <h3>Global Community</h3>
                                    <p>Reach a community that can make use strong and useful</p>
                                </aside>
                            </div>
                            <div>
                                <h2 className="black"><ion-icon name="man-outline"></ion-icon></h2>
                                <aside>
                                    <h3>Crowdfunding</h3>
                                    <p>Affordable ceiling and are very suitable for novice funders</p>
                                </aside>
                            </div>
                        </div>
                        <button><img src={One} alt="One" /><img src={One} alt="One" /><img src={One} alt="One" /> 4K+</button>
                        <div className="community-bar">
                            <div className="bar-width"></div>
                        </div>
                    </div>
                    <div className="community-image">
                        <h5>Join Us</h5>
                    </div>
                </div>
                <div className="testimonials">
                    <h5>Dieter F. Uchtdorf</h5>
                    <h4>"As we lose ourselves in the service of others, we discover our own lives and our own happiness"</h4>
                    <div className="testimonial-box">
                        <div className="testimonial-card">
                            <section className="testimonial-image"></section>
                            <section className="testimonial-info">
                                <h5>Testimonial by hero</h5>
                                <p>
                                    it's been an incredible journey, i feel good about volunteering, and i wish more people can do voluntary
                                </p>
                                <h3>Thanks mba</h3>
                                <h4>CTO of Apple</h4>
                            </section>
                        </div>
                        <div className="testimonial-card">
                            <section className="testimonial-image"></section>
                            <section className="testimonial-info">
                                <h5>Testimonial by hero</h5>
                                <p>it's been an incredible journey, i feel good about volunteering, and i wish more people can do voluntary</p>
                            </section>
                        </div>
                        <div className="testimonial-card">
                            <section className="testimonial-image"></section>
                            <section className="testimonial-info">
                                <h5>Testimonial by hero</h5>
                                <p>it's been an incredible journey, i feel good about volunteering, and i wish more people can do voluntary</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage;
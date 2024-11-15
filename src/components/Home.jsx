function HomePage() {
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
        </div>
    )
}

export default HomePage;
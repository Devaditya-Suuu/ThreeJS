import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
    return (

        <div>
            <div className="hero-section">
                <h1>Report Potholes Easily</h1>
                <p>Help us make roads safer by reporting potholes in your area. Your reports contribute to better road maintenance.</p>
                <button onClick={() => window.location.href='/report'}>Report Now</button>
            </div>
            <div className="features">
                <div className="feature-box">
                    <h3>Quick Reporting</h3>
                    <p>Report potholes in just a few clicks with an intuitive interface.</p>
                </div>
                <div className="feature-box">
                    <h3>Live Tracking</h3>
                    <p>Stay updated on the status of reported potholes in real-time.</p>
                </div>
                <div className="feature-box">
                    <h3>Community Impact</h3>
                    <p>Your reports help improve road conditions for everyone.</p>
                </div>
            </div>
            <div className="bottom-round"></div>

            {/* Footer Component */}
            <Footer />
        </div>

    );
}

export default Home;
import Footer from "../components/Footer";
import FooterCopyright from "../components/FooterCopyright";
import Navbar from "../components/Navbar";
import SearchLandingPage from "../components/SearchLandingPage";
import "../index.css";
import Layout from "../Layout";

export default function LandingPage() {
    return (
        <div className="background">
            <div className="content">
                <div>
                    <Navbar />
                    <div className="mx-16 mt-10">
                        <SearchLandingPage />
                    </div>
                </div>
                <FooterCopyright />
            </div>
        </div>
    );
}

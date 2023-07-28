import Footer from "../ui/Footer/Footer";
import Navbar from "../ui/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                {children}
            </div>
            <Footer  />
        </>
    );
};

export default RootLayout;


import Footer from "../ui/Footer/Footer";
import Navbar from "../ui/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <html lang="en" data-theme="light">
            <body className="max-w-[1600px] mx-auto">
                <div>
                    <Navbar />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;

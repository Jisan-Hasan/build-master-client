import { BsCpu } from "react-icons/bs";

const Banner = () => {
    return (
        <div className="hero bg-base-200 md:py-10 lg:py-30 xl:py-40">
            <div className="hero-content flex-col lg:flex-row gap-10 max-w-[1400px] mx-auto">
                <BsCpu size={"200px"} />
                <div>
                    <h1 className="text-5xl font-bold">
                        Want to Build Your Workstation!
                    </h1>
                    <p className="py-6 md:w-4/5 lg:w-2/3">
                        Our team of experts is ready to assist you in choosing
                        the perfect components for your custom build. Don't
                        hesitate to reach out to us for any inquiries or
                        guidance.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

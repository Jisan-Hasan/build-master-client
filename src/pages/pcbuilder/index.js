import RootLayout from "@/components/Layouts/RootLayout";
import ShowSelectedProduct from "@/components/ui/ShowSelectedProduct/ShowSelectedProduct";
import Link from "next/link";
import { useSelector } from "react-redux";

const PCBuilderPage = ({ categories }) => {
    const { processor, motherboard, ram, psu, storage, monitor, others } =
        useSelector((state) => state.pcbuilder);
    let completeButtonStatus = false;
    if (processor && motherboard && ram && psu && storage && monitor) {
        completeButtonStatus = true;
    }
    const handleCompleteBuild = () => {
        alert("Build Completed");
    };
    return (
        <div className=" max-w-[800px] p-6 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">PC Builder</h1>
            {categories.map((category) => (
                <div key={category._id}>
                    <div className="mb-6 flex gap-3 justify-between">
                        <h2 className="text-xl font-semibold">
                            {category.title}
                        </h2>
                        <Link
                            href={`/pcbuilder/${category.title}`}
                            className="btn btn-outline btn-success"
                        >
                            Choose
                        </Link>
                    </div>

                    <ShowSelectedProduct category={category.title} />
                </div>
            ))}
            <button
                className={`w-full btn ${
                    completeButtonStatus ? "btn-primary" : "btn-disabled"
                }`}
                onClick={handleCompleteBuild}
            >
                Complete Build
            </button>
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:5000/category`);
    const data = await res.json();

    return {
        props: {
            categories: data,
        },
    };
};

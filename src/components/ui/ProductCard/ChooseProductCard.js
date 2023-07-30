import {
    setMonitor,
    setMotherboard,
    setOthers,
    setProcessor,
    setPsu,
    setRam,
    setStorage,
} from "@/redux/features/pcbuilder/pcbuilderSlice";
import { useRouter } from "next/router";
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";

const ChooseProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleChoose = () => {
        switch (product.category) {
            case "Processor":
                dispatch(setProcessor(product));
                break;
            case "Motherboard":
                dispatch(setMotherboard(product));
                break;
            case "RAM":
                dispatch(setRam(product));
                break;
            case "PSU":
                dispatch(setPsu(product));
                break;
            case "Storage":
                dispatch(setStorage(product));
                break;
            case "Monitor":
                dispatch(setMonitor(product));
                break;
            case "Others":
                dispatch(setOthers(product));
                break;
        }
        router.push("/pcbuilder");
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={product.image} alt={product.productName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.productName}
                    <div
                        className={`badge ${
                            product.status === "In Stock"
                                ? "badge-primary"
                                : "badge-error"
                        }`}
                    >
                        {product.status}
                    </div>
                </h2>
                <div className="card-actions justify-between items-center">
                    <div className="flex justify-center items-center gap-1 font-bold">
                        <FaDollarSign />
                        {product.price}
                    </div>
                    <div className="font-bold badge badge-outline">
                        {product.category}
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <FcRating size={"20px"} />
                        {product.averageRating}
                    </div>
                </div>
                <button
                    className="btn btn-outline btn-success"
                    onClick={handleChoose}
                >
                    Add To Builder
                </button>
            </div>
        </div>
    );
};

export default ChooseProductCard;

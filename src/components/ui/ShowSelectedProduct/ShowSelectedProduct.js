import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const ShowSelectedProduct = ({ category }) => {
    console.log(category);

    const { processor, motherboard, ram, psu, storage, monitor, others } =
        useSelector((state) => state.pcbuilder);

    let product = null;

    switch (category) {
        case "Processor":
            product = processor;
            break;
        case "Motherboard":
            product = motherboard;
            break;
        case "RAM":
            product = ram;
            break;
        case "PSU":
            product = psu;
            break;
        case "Storage":
            product = storage;
            break;
        case "Monitor":
            product = monitor;
            break;
        case "Others":
            product = others;
            break;
    }
    console.log(product);
    return (
        <div className="mb-3">
            {product && <ProductCard product={product} />}
        </div>
    );
};

export default ShowSelectedProduct;

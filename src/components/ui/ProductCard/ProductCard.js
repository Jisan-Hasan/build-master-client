import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const ProductCard = ({ product }) => {
    return (
        <Link
            href={`/product/${product._id}`}
            className="card w-96 bg-base-100 shadow-xl"
        >
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
            </div>
        </Link>
    );
};

export default ProductCard;

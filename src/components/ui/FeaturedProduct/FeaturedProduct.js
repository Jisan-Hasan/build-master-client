import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const FeaturedProduct = ({ products }) => {
    return (
        <div className="text-center max-w-[1600px] mx-auto mt-10">
            <h2 className="text-xl font-bold">Featured Products</h2>
            <p className="capitalize">Check & Get Your Desired Product!</p>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {/*  */}
                {products?.map((product) => (
                    <Link
                        key={product._id}
                        href={`/productDetails/${product._id}`}
                        className="card w-96 bg-base-100 shadow-xl"
                    >
                        <figure>
                            <img
                                src={product.image}
                                alt={product.productName}
                            />
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
                            <div className="card-actions justify-between">
                                <div className="flex justify-center items-center gap-1 font-bold">
                                    <FaDollarSign />
                                    {product.price}
                                </div>

                                <div className="flex justify-center items-center gap-1">
                                    <FcRating size={"20px"} />
                                    {product.averageRating}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                {/*  */}
            </div>
        </div>
    );
};

export default FeaturedProduct;

import Link from "next/link";

const FeaturedProduct = ({ products }) => {
    return (
        <div className="text-center max-w-[1600px] mx-auto mt-10">
            <h2 className="text-xl font-bold">Featured Products</h2>
            <p className="capitalize">Check & Get Your Desired Product!</p>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {/*  */}
                {products?.map((product) => (
                    <Link
                        href={`/productDetails/${product._id}`}
                        key={product.id}
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
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    Fashion
                                </div>
                                <div className="badge badge-outline">
                                    Products
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

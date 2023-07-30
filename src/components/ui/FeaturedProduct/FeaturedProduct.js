import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = ({ products }) => {
    return (
        <div className="text-center max-w-[1600px] mx-auto mt-10">
            <h2 className="text-xl font-bold">Featured Products</h2>
            <p className="capitalize">Check & Get Your Desired Product!</p>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-y-2">
                {/*  */}
                {products?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}

                {/*  */}
            </div>
        </div>
    );
};

export default FeaturedProduct;

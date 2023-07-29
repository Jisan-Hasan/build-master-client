import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetails = ({ product }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img
                        src={product?.image}
                        alt={product?.productName}
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">
                        {product.productName}
                    </h1>
                    <p className="text-lg mb-2">{product.category}</p>
                    <p className="text-lg mb-2">{product.status}</p>
                    <p className="text-xl font-bold mb-4">${product.price}</p>
                    <p className="text-lg mb-4">
                        Description: {product.description}
                    </p>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">
                            Key Features:
                        </h2>
                        <ul>
                            {Object.entries(product.keyFeatures).map(
                                ([key, value]) => (
                                    <li key={key} className="mb-1">
                                        <span className="font-bold">
                                            {key}:
                                        </span>{" "}
                                        {value}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">
                            Ratings and Reviews:
                        </h2>
                        <p className="mb-1">
                            Individual Rating: {product.individualRating} / 5
                        </p>
                        <p className="mb-1">
                            Average Rating: {product.averageRating} / 5
                        </p>
                        <div>
                            {product.reviews.map((review, index) => (
                                <div key={index} className="border p-2 mb-2">
                                    <p className="font-bold">
                                        {review.username}
                                    </p>
                                    <p>Rating: {review.rating} / 5</p>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    const paths = products.map((p) => ({
        params: { productId: p._id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(
        `http://localhost:5000/product/${params.productId}`
    );
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
};

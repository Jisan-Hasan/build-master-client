import ChooseProductCard from "@/components/ui/ProductCard/ChooseProductCard";

const ChooseProductPage = ({ products, category }) => {
    return (
        <div className="mt-10 max-w-[1400px] mx-auto">
            <div className="text-center text-2xl text-blue-500 font-bold">
                Choose {category}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-3 w-full mx-auto mt-5">
                {products.map((product) => (
                    <ChooseProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ChooseProductPage;

export const getServerSideProps = async (context) => {
    const { params } = context;

    const res = await fetch(
        `https://build-master-server.vercel.app/products/${params.category}`
    );
    const products = await res.json();

    return {
        props: {
            products: products,
            category: params.category,
        },
    };
};

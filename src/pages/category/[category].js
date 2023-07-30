import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

const Products = ({ products, category }) => {
    // console.log(products);
    return (
        <>
            <h2 className="text-center font-bold text-4xl text-blue-400">
                {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 max-w-[1600px] mx-auto mt-8 gap-y-5">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;

Products.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("https://build-master-server.vercel.app/category");
    const category = await res.json();

    const paths = category.map((c) => ({
        params: { category: c.title },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(
        `https://build-master-server.vercel.app/products/${params.category}`
    );
    const data = await res.json();

    return {
        props: {
            products: data,
            category: params.category,
        },
    };
};

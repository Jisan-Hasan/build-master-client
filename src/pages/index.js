import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategory from "@/components/ui/FeaturedCategory/FeaturedCategory";
import FeaturedProduct from "@/components/ui/FeaturedProduct/FeaturedProduct";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories, products }) {
    return (
        <>
            <Head>
                <title>Build-Master</title>
                <meta
                    name="description"
                    content="This is a custom pc building website"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <FeaturedCategory categories={categories} />
                <FeaturedProduct products={products} />
            </main>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const resFeaturedCategories = await fetch(
        "http://localhost:5000/featuredCategories"
    );
    const categories = await resFeaturedCategories.json();

    const resFeaturedProducts = await fetch(
        "http://localhost:5000/featuredProducts"
    );
    const products = await resFeaturedProducts.json();

    return {
        props: {
            categories: categories,
            products: products,
        },
        revalidate: 10,
    };
};

import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategory from "@/components/ui/FeaturedCategory/FeaturedCategory";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories }) {
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
            </main>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/featuredCategories");
    const categories = await res.json();

    return {
        props: {
            categories: categories,
        },
        revalidate: 1000,
    };
};

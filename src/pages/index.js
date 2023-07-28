import RootLayout from "@/components/Layouts/RootLayout";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            <p>This is home page</p>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

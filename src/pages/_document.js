import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" data-theme="light">
            <Head />
            <body className="max-w-[1600px] mx-auto">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

interface NextSEO {
    title: string;
    description: string;
    children: JSX.Element;
}

export function NextSEO({ title, description, children }: NextSEO) {
    const { pathname } = useRouter();
    const url = `http://localhost:3000${pathname}`;
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{ title, url }}
            />
            {children}
        </>
    );
}

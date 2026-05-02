import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "korotnytskyistorage.blob.core.windows.net",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

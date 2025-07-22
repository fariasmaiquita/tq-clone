import localFont from "next/font/local";

export const switzer = localFont({
    src: [
        {
            path: "./Switzer-Regular.woff2",
            weight: "400",
            style: "normal"
        }, {
            path: "./Switzer-Medium.woff2",
            weight: "500",
            style: "normal"
        }, {
            path: "./Switzer-MediumItalic.woff2",
            weight: "500",
            style: "italic"
        }, {
            path: "./Switzer-Semibold.woff2",
            weight: "600",
            style: "normal"
        }
    ]
});
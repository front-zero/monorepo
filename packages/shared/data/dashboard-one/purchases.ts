import { IPurchase } from "../../types";

import img28 from "../../images/img28.jpg";
import img29 from "../../images/img29.jpg";
import img30 from "../../images/img30.jpg";
import img31 from "../../images/img31.jpg";
import img32 from "../../images/img32.jpg";

const purchases: IPurchase[] = [
    {
        id: 1,
        product: {
            title: "The Dothraki Shoes",
            path: "/invoice",
            stock: 10,
            image: { src: img28, alt: "Product 1" },
        },
        growth: {
            rate: 0.5,
            status: "up",
        },
        sold: 10,
    },
    {
        id: 2,
        product: {
            title: "Westeros Sneaker",
            path: "/invoice",
            stock: 30,
            image: { src: img29, alt: "Westeros Sneaker" },
        },
        sold: 720,
        growth: {
            rate: 21.5,
            status: "down",
        },
    },
    {
        id: 3,
        product: {
            title: "Selonian Hand Bag",
            path: "/invoice",
            stock: 10,
            image: { src: img30, alt: "Selonian Hand Bag" },
        },
        sold: 1445,
        growth: {
            rate: 23.34,
            status: "up",
        },
    },
    {
        id: 4,
        product: {
            title: "Kel Dor Sunglass",
            path: "/invoice",
            stock: 50,
            image: { src: img31, alt: "Kel Dor Sunglass" },
        },
        sold: 2500,
        growth: {
            rate: 28.78,
            status: "up",
        },
    },
    {
        id: 5,
        product: {
            title: "Kubaz Sunglass",
            path: "/invoice",
            stock: 15,
            image: { src: img32, alt: "Kubaz Sunglass" },
        },
        sold: 320,
        growth: {
            rate: 18.18,
            status: "down",
        },
    },
];

export default purchases;

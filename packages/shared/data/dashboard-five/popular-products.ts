const PopularProducts: {
    section_title: {
        title: string;
        description: string;
    };
    paths: Array<{
        id: string | number;
        path: string;
        content: string;
    }>;
    products: Array<{
        id: number | string;
        productId: string;
        title: string;
        path: string;
        author: {
            title: string;
            path: string;
        };
        totalSales: number;
        earnings: string;
    }>;
} = {
    section_title: {
        title: "Most Popular Products",
        description: "January 01, 2018 - January 31, 2018",
    },
    paths: [
        {
            id: 1,
            path: "/profile",
            content: "Top Rated Products",
        },
        {
            id: 2,
            path: "/profile",
            content: "View All Products",
        },
    ],
    products: [
        {
            id: 1,
            productId: "Product ID: #PD-1754",
            title: "US 360 Home Security IP Camera Night",
            path: "/invoice",
            author: { title: "ThmPxls Security", path: "/profile" },
            totalSales: 1885,
            earnings: "$12,056",
        },
        {
            id: 2,
            productId: "Product ID: #PD-1753",
            title: "US KS-5 Junior Lite DVD Karaoke 9500",
            path: "/invoice",
            author: { title: "ThmPxls Security", path: "/profile" },
            totalSales: 1862,
            earnings: "$13,113",
        },
        {
            id: 3,
            productId: "Product ID: #PD-1752",
            title: "US 360 Home Security IP Camera Night",
            path: "/invoice",
            author: { title: "ThmPxls Security", path: "/profile" },
            totalSales: 1799,
            earnings: "$11,091",
        },
    ],
};

export default PopularProducts;

import TransactionCard from "../../../components/transaction-card";
import PurchasesCard from "../../../components/purchases-card";
import BlogSplitCard from "../../../components/blog-split-card";
import BlogOverlayCard from "../../../components/blog-overlay-card";
import PaymentCard from "../../../components/payment-card";
import ShippingCard from "../../../components/shipping-card";

// Demo Images
import img1 from "@ht/shared/images/img1.jpg";
import img2 from "@ht/shared/images/img2.jpg";
import img3 from "@ht/shared/images/img3.jpg";
import img4 from "@ht/shared/images/img4.jpg";
import img5 from "@ht/shared/images/img5.jpg";

import img28 from "@ht/shared/images/img28.jpg";
import img29 from "@ht/shared/images/img29.jpg";
import img30 from "@ht/shared/images/img30.jpg";
import img31 from "@ht/shared/images/img31.jpg";
import img32 from "@ht/shared/images/img32.jpg";
import img19 from "@ht/shared/images/img19.jpg";
import img20 from "@ht/shared/images/img20.jpg";
import img26 from "@ht/shared/images/img26.jpg";

const CardColumns02 = () => {
    return (
        <div className="md:columns-2 gap-5 orphans-1 widows-1">
            <TransactionCard
                className="mb-5 inline-block w-full"
                title="User Transaction History"
                path="#!"
                transactions={[
                    {
                        id: 1,
                        user: {
                            name: "Mark K. Peters",
                            path: "#!",
                            transId: 12345,
                            image: { src: img1, alt: "Mark K. Peters" },
                        },
                        type: "success",
                        date: "Just Now",
                    },
                    {
                        id: 2,
                        user: {
                            name: "Karmen F. Brown",
                            path: "#!",
                            transId: 14345,
                            image: { src: img2, alt: "Karmen F. Brown" },
                        },
                        type: "hold",
                        date: "Apr 21, 2017 8:34am",
                    },
                    {
                        id: 3,
                        user: {
                            name: "Gorgonio Magalpok",
                            path: "#!",
                            transId: 10345,
                            image: { src: img3, alt: "Gorgonio Magalpok" },
                        },
                        type: "failed",
                        date: "Apr 10, 2017 4:40pm",
                    },
                    {
                        id: 4,
                        user: {
                            name: "Ariel T. Hall",
                            path: "#!",
                            transId: 123475,
                            image: { src: img4, alt: "Ariel T. Hall" },
                        },
                        type: "success",
                        date: "Apr 02, 2017 6:45pm",
                    },
                    {
                        id: 5,
                        user: {
                            name: "John L. Goulette",
                            path: "#!",
                            transId: 12344,
                            image: { src: img5, alt: "John L. Goulette" },
                        },
                        type: "hold",
                        date: "Mar 30, 2017 10:30am",
                    },
                ]}
            />
            <PurchasesCard
                className="mb-5 inline-block w-full"
                title="Product Purchases"
                path="#!"
                purchases={[
                    {
                        id: 1,
                        product: {
                            title: "The Dothraki Shoes",
                            path: "#!",
                            stock: 0,
                            image: { src: img28, alt: "The Dothraki Shoes" },
                        },
                        sold: 3345,
                        growth: {
                            rate: 33.4,
                            status: "up",
                        },
                    },
                    {
                        id: 2,
                        product: {
                            title: "Westeros Sneaker",
                            path: "#!",
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
                            path: "#!",
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
                            path: "#!",
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
                            path: "#!",
                            stock: 15,
                            image: { src: img32, alt: "Kubaz Sunglass" },
                        },
                        sold: 320,
                        growth: {
                            rate: 18.18,
                            status: "down",
                        },
                    },
                ]}
            />
            <BlogSplitCard
                className="mb-5 inline-block w-full"
                title="Five Actual Facts About the Science of Dreams"
                path="#!"
                category="Science"
                image={{ src: img20 }}
                posted_at="Mar 11, 2017, 2:30pm"
                excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Nascetur ridiculus mus. Donec quam felis, ultricies nec..."
            />
            <BlogSplitCard
                layout={2}
                className="mb-5 inline-block w-full"
                title="17 Brilliant Short Novels You Can Read in a Sitting"
                path="#!"
                category="History"
                image={{ src: img19 }}
                posted_at="Mar 11, 2017, 11:30am"
                excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Nascetur ridiculus mus. Donec quam felis, ultricies nec..."
            />
            <BlogOverlayCard
                className="mb-5 inline-block w-full"
                title="The Difference Between Streets, Boulevards, Avenues, and Other Roads"
                path="#!"
                category="Travel"
                image={{ src: img26 }}
                posted_at="Mar 25, 2017"
                likes={23}
                comments={4}
                author={{
                    name: "Katherine Pechon",
                    path: "#!",
                }}
            />
            <PaymentCard
                className="mb-5 inline-block w-full"
                title="Payment Information"
            />
            <ShippingCard
                className="mb-5 inline-block w-full"
                title="Shipping Information"
            />
        </div>
    );
};

export default CardColumns02;

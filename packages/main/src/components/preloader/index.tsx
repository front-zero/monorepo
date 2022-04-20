import { Spinner06 } from "@ht/components";

const Preloader = () => {
    return (
        <div className="w-full h-full bg-white/50 flex justify-center items-center fixed z-50">
            <Spinner06 />
        </div>
    );
};

export default Preloader;

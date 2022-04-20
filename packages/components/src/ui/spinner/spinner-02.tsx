const Spinner02 = () => {
    return (
        <div className="double-bounce relative w-10 h-10 my-10 mx-auto">
            <div className="absolute inset-0 rounded-full bg-heading opacity-60 animate-doubleBounce" />
            <div className="absolute inset-0 rounded-full bg-heading opacity-60 animate-doubleBounce animation-delay--1.0" />
        </div>
    );
};

export default Spinner02;

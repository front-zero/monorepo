const Spinner05 = () => {
    return (
        <div className="sk-chasing-dots relative w-10 h-10 my-10 mx-auto text-center animate-chasingDotsRotate">
            <div className="bg-heading absolute w-3/5 h-3/5 rounded-full top-0 animate-chasingDotsBounce" />
            <div className="bg-heading absolute w-3/5 h-3/5 rounded-full top-auto bottom-0 animate-chasingDotsBounce animation-delay--1.0" />
        </div>
    );
};

export default Spinner05;

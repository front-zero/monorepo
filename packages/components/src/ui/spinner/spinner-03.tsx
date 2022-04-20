const Spinner03 = () => {
    return (
        <div className="sk-wave w-[50px] h-10 text-center my-10 mx-auto text-[10px] flex justify-between">
            <div className="bg-heading inline-block h-full w-1.5 animate-waveStretchDelay animation-delay--1.2" />
            <div className="bg-heading inline-block h-full w-1.5 animate-waveStretchDelay animation-delay--1.1" />
            <div className="bg-heading inline-block h-full w-1.5 animate-waveStretchDelay animation-delay--1.0" />
            <div className="bg-heading inline-block h-full w-1.5 animate-waveStretchDelay animation-delay--0.9" />
            <div className="bg-heading inline-block h-full w-1.5 animate-waveStretchDelay animation-delay--0.8" />
        </div>
    );
};

export default Spinner03;

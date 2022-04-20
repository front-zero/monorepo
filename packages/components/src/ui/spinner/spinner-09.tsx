const Spinner09 = () => {
    return (
        <div className="folding-cube w-10 h-10 my-10 mx-auto relative cube">
            <div className="scale-110 float-left w-1/2 h-1/2 relative before:absolute before:content-[''] before:inset-0 before:bg-heading before:animate-foldCubeAngle before:origin-[100%_100%]" />
            <div className="cube2 float-left w-1/2 h-1/2 relative before:absolute before:content-[''] before:inset-0 before:bg-heading before:animate-foldCubeAngle before:origin-[100%_100%] before:animation-delay-300" />
            <div className="cube4 float-left w-1/2 h-1/2 relative before:absolute before:content-[''] before:inset-0 before:bg-heading before:animate-foldCubeAngle before:origin-[100%_100%] before:animation-delay-900" />
            <div className="cube3 float-left w-1/2 h-1/2 relative before:absolute before:content-[''] before:inset-0 before:bg-heading before:animate-foldCubeAngle before:origin-[100%_100%] before:animation-delay-600" />
        </div>
    );
};

export default Spinner09;

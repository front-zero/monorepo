const colors = {
    transparent: "transparent",
    current: "currentColor",
    primary: {
        DEFAULT: "#1b84e7",
        50: "#ebf4fd",
        100: "#1570c7",
        200: "#146abb",
        300: "#1363b0",
        400: "#4662D4",
        500: "#1515af",
    },
    secondary: {
        DEFAULT: "#6c757d",
        50: "#d8d9d9",
        100: "#5a6268",
        200: "#545b62",
        300: "#4e555b",
    },
    body: "#868ba1",
    heading: "#343a40",
    success: {
        DEFAULT: "#23BF08",
        50: "#d1fdc9",
        100: "#1c9a06",
        200: "#1a8e06",
        300: "#188205",
    },
    warning: {
        DEFAULT: "#F49917",
        50: "#fdefda",
        100: "#da850a",
        200: "#ce7d0a",
        300: "#c27609",
    },
    danger: {
        DEFAULT: "#dc3545",
        50: "#fae3e5",
        100: "#c82333",
        200: "#bd2130",
        300: "#b21f2d",
    },
    info: {
        DEFAULT: "#5B93D3",
        50: "#e8f0f9",
        100: "#3d7fcb",
        200: "#3579c6",
        300: "#3273bc",
    },
    indigo: {
        DEFAULT: "#6610f2",
        50: "#e8dbfd",
        100: "#5b0cdd",
        200: "#560bd0",
        300: "#4709ac",
        400: "#510bc4",
        500: "#4209a0",
    },
    purple: {
        DEFAULT: "#6f42c1",
        50: "#eae3f6",
        100: "#643ab0",
        150: "#6f42c1",
        200: "#5e37a6",
        300: "#4e2d89",
        400: "#59339d",
        500: "#482a80",
    },
    teal: {
        DEFAULT: "#1CAF9A",
        50: "#d2f8f2",
        100: "#189987",
        200: "#178e7d",
        300: "#116d60",
        400: "#158373",
        500: "#106256",
    },
    pink: {
        DEFAULT: "#e83e8c",
        50: "#fce7f0",
        100: "#e5277e",
        200: "#e41c78",
        300: "#c21766",
        400: "#d91a72",
        500: "#b71660",
    },
    ghost: "#ced4da",
    gray: {
        100: "#e3e7eb",
        150: "#f2f4f6",
        200: "#f8f9fa",
        250: "#485e90",
        300: "#e9ecef",
        350: "#596882",
        400: "#fcfcfc",
        450: "#cdd4e0",
        500: "#f0f2f7",
        550: "#dae0e5",
        600: "#adb5bd",
        650: "#5B636A",
        700: "#9299a1",
        750: "#495057",
        800: "#888e95",
        850: "#e5e9f2",
    },
    blue: {
        DEFAULT: "#0000ff",
        100: "#8ec2f3",
    },
    royal: {
        DEFAULT: "#4662D4",
        50: "#3150cf",
        100: "#2e4cc6",
        200: "#2c48bb",
        250: "#2740a7",
        300: "#243c9c",
    },
    orange: { DEFAULT: "#ea580c", 50: "#fdeadb" },
    nevada: "#656d75",
    geyser: "#dee2e6",
    trout: "#495057",
    pale: "#6c757d",
    alabaster: "#F8F8F8",
    shark: "#212529",
    silver: "#cccccc",
    facebook: "#4267B2",
    twitter: { DEFAULT: "#1DA1F2", 100: "#329CC3" },
    gplus: "#D64937",
    pinterest: "#dc3545",
    github: "#343a40",
    instagram: "#e83e8c",
};

const screens = {
    maxSm: { max: "575px" },
    // => @media (max-width: 575px) { ... }
    maxXl: { max: "1199px" },
    // => @media (max-width: 1199px) { ... }
    maxLg: { max: "991px" },
    // => @media (max-width: 991px) { ... }
    smToMd: { min: "576px", max: "767px" },
    sm: "576px",
    // => @media (min-width: 576px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "992px",
    // => @media (min-width: 992px) { ... }

    xl: "1200px",
    // => @media (min-width: 1200px) { ... }
};

const fontFamily = {
    body: ["Roboto", "sans-serif"],
    heading: ["Roboto", "sans-serif"],
    sans: ["Open Sans", "sans-serif"],
    lato: ["Lato", "sans-serif"],
};

const fontSize = {
    sm: "13px",
    base: "0.875rem",
    md: "1.09375rem",
    h1: "2.1875rem",
    h2: "1.75rem",
    h3: "1.53125rem",
    h4: "1.3125rem",
    h5: "1.09375rem",
    h6: "0.875rem",
};

const lineHeight = {
    body: 1.5,
    heading: 1.2,
};

const boxShadow = {
    xs: "0 0 0 0.2rem",
    sm: "0 2px 3px",
    md: "0 0 10px",
};

const letterSpacing = {
    tightest: "-0.125rem",
    wider: "1px",
};

const spacing = {
    3.8: "0.938rem",
};

const backgroundImage = {
    "gradient-mantle": "linear-gradient(to right, #514A9D 0%, #24C6DC 100%)",
    "gradient-dance": "linear-gradient(to right, #F9D423 0%, #FF4E50 100%)",
    "gradient-transfile": "linear-gradient(to right, #CB3066 0%, #16BFFD 100%)",
    "gradient-white-striped":
        "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
};

const keyframes = {
    rotatePlane: {
        "0%": { transform: "perspective(120px) rotateX(0deg) rotateY(0deg)" },
        "50%": {
            transform: "perspective(120px) rotateX(-180.1deg) rotateY(0deg)",
        },
        "100%": {
            transform: "perspective(120px) rotateX(-180deg) rotateY(-179.9deg)",
        },
    },
    doubleBounce: {
        "0%, 100%": {
            transform: "scale(0)",
        },
        "50%": {
            transform: "scale(1)",
        },
    },
    waveStretchDelay: {
        "0%, 40%, 100%": {
            transform: "scaleY(0.4)",
        },
        "20%": {
            transform: "scaleY(1)",
        },
    },
    wanderingCube: {
        "0%": { transform: "rotate(0deg)" },
        "25%": { transform: "translateX(30px) rotate(-90deg) scale(0.5)" },
        "50%": {
            transform: "translateX(30px) translateY(30px) rotate(-179deg)",
        },
        "50.1%": {
            transform: "translateX(30px) translateY(30px) rotate(-180deg)",
        },
        "75%": {
            transform:
                "translateX(0) translateY(30px) rotate(-270deg) scale(0.5)",
        },
        "100% ": { transform: "rotate(-360deg)" },
    },
    pulseScaleOut: {
        "0%": {
            transform: "scale(0)",
        },
        "100%": {
            transform: "scaleY(1)",
            opacity: 0,
        },
    },
    chasingDotsRotate: {
        "100%": {
            transform: "rotate(360deg)",
        },
    },
    chasingDotsBounce: {
        "0%, 100%": { transform: "scale(0)" },
        "50%": { transform: "scale(1)" },
    },
    threeBounce: {
        "0%, 80%, 100%": { transform: "scale(0)" },
        "40%": { transform: "scale(1)" },
    },
    circleBounceDelay: {
        "0%, 80%, 100%": { transform: "scale(0)" },
        "40%": { transform: "scale(1)" },
    },
    cubeGridScaleDelay: {
        "0%, 70%, 100%": { transform: "scale3D(1, 1, 1)" },
        "35%": { transform: "scale3D(0, 0, 1)" },
    },
    foldCubeAngle: {
        "0%, 10%": {
            transform: "perspective(140px) rotateX(-180deg)",
            opacity: 0,
        },
        "25%, 75%": {
            transform: "perspective(140px) rotateX(0deg)",
            opacity: 1,
        },
        "90%, 100% ": {
            transform: "perspective(140px) rotateX(180deg)",
            opacity: 0,
        },
    },
};

const animation = {
    rotatePlane: "rotatePlane 1.2s infinite ease-in-out",
    doubleBounce: "doubleBounce 2s infinite ease-in-out",
    waveStretchDelay: "waveStretchDelay 1.2s infinite ease-in-out",
    wanderingCube: "wanderingCube 1.8s ease-in-out -1.8s infinite both",
    pulseScaleOut: "pulseScaleOut 1s infinite ease-in-out",
    chasingDotsRotate: "chasingDotsRotate 2s infinite linear",
    chasingDotsBounce: "chasingDotsBounce 2s infinite ease-in-out",
    threeBounce: "threeBounce 1.4s ease-in-out 0s infinite both",
    circleBounceDelay: "circleBounceDelay 1.2s infinite ease-in-out both",
    cubeGridScaleDelay: "cubeGridScaleDelay 1.3s infinite ease-in-out",
    foldCubeAngle: "foldCubeAngle 2.4s infinite linear both",
};

const animationDelay = {
    0: "0s",
    "-1.0": "-1.0s",
    "-1.1": "-1.1s",
    "-1.2": "-1.2s",
    "-0.9": "-0.9s",
    "-0.8": "-0.8s",
    "-0.7": "-0.7s",
    "-0.6": "-0.6s",
    "-0.5": "-0.5s",
    "-0.4": "-0.4s",
    "-0.3": "-0.3s",
    "-0.2": "-0.2s",
    "-0.1": "-0.1s",
    "-0.32": "-0.32s",
    "-0.16": "-0.16s",
};

module.exports = {
    colors,
    screens,
    fontFamily,
    fontSize,
    lineHeight,
    boxShadow,
    letterSpacing,
    spacing,
    backgroundImage,
    keyframes,
    animation,
    animationDelay,
};

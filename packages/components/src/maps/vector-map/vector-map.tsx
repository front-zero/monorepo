/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from "react";
import { VectorMap as VectorMapComponent } from "@south-paw/react-vector-maps";
import clsx from "clsx";

export interface VectorMapLayer {
    /** Unique ID of each layer. */
    id: string;
    /** Name of the layer. */
    name: string;
    /** SVG path for the layer. */
    d: string;
}
export interface VectorMapProps {
    /** Unique ID of the SVG element. */
    id: string;
    /** Name of the map. */
    name: string;
    /** View box for the map. */
    viewBox: string;
    /** Layers that represent the regions of the map. */
    layers: VectorMapLayer[];
    /** Tab index for each layer. Set to '-1' to disable layer focusing. */
    tabIndex?: number;
    /** Props to spread onto each layer. */
    layerProps?: any;
    /** Layer IDs to 'select' with the 'aria-checked' attribute. */
    checkedLayers?: string[];
    /** Layer IDs to 'select' with the 'aria-current' attribute. */
    currentLayers?: string[];
}

interface IProps {
    /**
     * Map's Background Color. Default color is `transparent`
     */
    backgroundColor?: string;
    /**
     * Map's Border Color. Default color is `transparent`
     */
    borderColor?: string;
    /**
     * Map's Border Color. Default color is `#fff`
     */
    color?: string;
    /**
     * Layer IDs to 'select' with the 'aria-checked' attribute.
     */
    checkedLayers?: string[];
    /**
     * Layer IDs to 'select' with the 'aria-checked' attribute.
     */
    currentLayers?: string[];
    /**
     * Selected Layer's Color. Default color is `rgba(56, 43, 168, 1)`
     */
    selectedColor?: string;
    /**
     * Current Layer's Color. Default color is `#006491`
     */
    currentColor?: string;
    /**
     * Pass `true` to enable tooltip
     */
    tooltip?: boolean;
    /**
     * Map's JSON Data. `https://react-vector-maps.netlify.app/maps` visit this link to get your desired data. Default is `World Low Res`
     */
    data: VectorMapProps;
    /**
     * Optional className
     */
    className?: string;
}

const VectorMap: FC<IProps> = ({
    backgroundColor,
    borderColor,
    color,
    checkedLayers,
    currentLayers,
    selectedColor,
    currentColor,
    tooltip,
    data,
    className,
}) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [tooltipeName, setTooltipeName] = useState<string>();
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
    const [tooltipY, setTooltipY] = useState<number>(0);
    const [tooltipX, setTooltipX] = useState<number>(0);

    const onClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const id: string = (target.attributes as any)?.id.value;
        if (selected.includes(id)) {
            setSelected(selected.filter((sid) => sid !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const name: string = (target.attributes as any)?.name.value;
        setTooltipeName(name);
        setIsTooltipVisible(true);
    };

    const onMouseMove = (e: MouseEvent) => {
        setTooltipY(e.clientY - 20);
        setTooltipX(e.clientX - 10);
    };

    const onMouseOut = () => {
        setTooltipeName("");
        setIsTooltipVisible(false);
    };

    useEffect(() => {
        if (!checkedLayers) return;
        setSelected([...checkedLayers]);
    }, [checkedLayers]);

    const date = new Date().getTime();

    const css = `
        ${`#vector-${date}`}.vector-map {
            background-color: ${backgroundColor || "transparent"};
        }
        ${`#vector-${date}`} svg{
            stroke: ${borderColor || "#fff"};
        }
        ${`#vector-${date}`} svg path {
            fill: ${color || "rgb(131, 146, 165)"};
        }
        ${`#vector-${date}`} svg path[aria-checked="true"] {
            fill: ${selectedColor || "rgba(56, 43, 168, 1)"};
        }
        ${`#vector-${date}`} svg path[aria-current="true"] {
            fill: ${currentColor || "#006491"};
        }
    `;

    return (
        <div className={clsx("vector-map", className)} id={`vector-${date}`}>
            <style>{css}</style>
            <VectorMapComponent
                {...data}
                checkedLayers={selected}
                currentLayers={currentLayers}
                layerProps={{ onClick, onMouseOver, onMouseOut, onMouseMove }}
            />
            {tooltip && isTooltipVisible && (
                <div
                    className="tooltip"
                    style={{ top: tooltipY, left: tooltipX }}
                >
                    {tooltipeName}
                </div>
            )}
        </div>
    );
};

VectorMap.defaultProps = {
    tooltip: false,
};

export default VectorMap;

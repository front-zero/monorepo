import { Children, FC, FunctionComponent, ReactChild, ReactText } from "react";
import clsx from "clsx";
import {
    GoogleMap as GoogleMapComponent,
    useJsApiLoader,
    Marker as MarkerComponent,
} from "@react-google-maps/api";
import { MapKey } from "@ht/shared/data/api-keys";

interface IProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
    /**
     * 	The minimum zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level.
     */
    zoom?: number;
    /**
     * width of the map. Optional. Pass width class of tailwind css. Default: w-full.
     */
    width?: string;
    /**
     * height of the map. Optional. Pass height class of tailwind css. Default: h-96.
     */
    height?: string;
    /**
     *
     * Optional. Pass extra className.
     */
    className?: string;
    /**
     * Optional. Pass extra options.
     */
    options?: {
        [x: string]: unknown;
    };
}

type IChild = Exclude<ReactChild, ReactText>;

export const GoogleMap: FC<IProps> = ({
    width,
    height,
    lat,
    lng,
    zoom,
    options,
    children,
}) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: MapKey,
    });
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "GoogleMapMarker") {
                return <child.type lat={lat} lng={lng} {...child.props} />;
            }
        }
        return null;
    });
    return isLoaded ? (
        <div className={clsx(width, height)}>
            <GoogleMapComponent
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={{ lat, lng }}
                zoom={zoom}
                options={options}
            >
                {RenderChild}
            </GoogleMapComponent>
        </div>
    ) : (
        <div>Map is loading.</div>
    );
};

interface IMarkerProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
}

export const GoogleMapMarker: FC<IMarkerProps> = ({ lat, lng }) => {
    return <MarkerComponent position={{ lat, lng }} />;
};

GoogleMap.defaultProps = {
    width: "w-full",
    height: "h-96",
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};

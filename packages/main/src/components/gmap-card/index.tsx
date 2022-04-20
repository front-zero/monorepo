import { FC } from "react";
import clsx from "clsx";
import { Card, CardBody, Button, GoogleMap } from "@ht/components";

interface IProps {
    title: string;
    address: string;
    phone: string;
    email: string;
    rating: number;
    map: {
        lat: number;
        lng: number;
    };
    className?: string;
}

const GMapCard: FC<IProps> = ({
    title,
    address,
    phone,
    email,
    rating,
    map,
    className,
}) => {
    return (
        <Card className={clsx("card-map border-0", className)}>
            <GoogleMap
                height="h-[237px]"
                lat={map.lat}
                lng={map.lng}
                zoom={14}
                options={{
                    fullscreenControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
            />
            <CardBody className="border border-ghost border-t-0">
                <h6 className="text-base">{title}</h6>
                <p className="mb-0">{address}</p>
                <p className="mb-0">
                    <abbr title="Phone">P:</abbr> {phone}
                </p>
                <div className="flex mt-5">
                    <Button path={`tel:${phone}`} className="px-5">
                        <i className="fa fa-phone mr-[5px]" />
                        Call
                    </Button>
                    <Button path={`mailto:${email}`} className="px-5 ml-[1px]">
                        <i className="fa fa-envelope mr-[5px]" />
                        Email
                    </Button>
                    <Button color="success" className="px-5 ml-auto">
                        <i className="fa fa-star" />
                        {rating}
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default GMapCard;

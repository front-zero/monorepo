import { Card, CardTitle } from "@ht/components";
import CenterRightForm from "../../../../components/forms/form-layouts/center-right-form";

const Row05 = () => {
    return (
        <Card className="p-5 sm:p-10 mb-5">
            <CardTitle>Center &amp; Right Form Alignment</CardTitle>
            <p className="mb-5 sm:mb-10">
                An inline form that is centered align and right aligned.
            </p>
            <CenterRightForm />
        </Card>
    );
};

export default Row05;

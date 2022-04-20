import { Card, CardTitle } from "@ht/components";
import SelectValidation from "../../../../components/forms/form-validation/select-validation";

const Row04 = () => {
    return (
        <Card className="p-5 sm:p-10 mt-5">
            <CardTitle>Select Box Validation</CardTitle>
            <p className="mb-5 sm:mb-10">
                A demo of select boxes that must be selected at least one fom
                any given option.
            </p>
            <SelectValidation />
        </Card>
    );
};

export default Row04;

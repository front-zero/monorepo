import { Card, CardTitle } from "@ht/components";
import CheckboxValidation from "../../../../components/forms/form-validation/checkbox-validation";

const Row04 = () => {
    return (
        <Card className="p-5 sm:p-10 mt-5">
            <CardTitle>Checkbox/Radio Validation</CardTitle>
            <p className="mb-5 sm:mb-10">
                A demo of checkboxes that must be selected at least two fom any
                given list.
            </p>
            <CheckboxValidation />
        </Card>
    );
};

export default Row04;

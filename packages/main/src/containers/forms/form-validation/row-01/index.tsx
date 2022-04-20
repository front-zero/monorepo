import { Card, CardTitle } from "@ht/components";
import InputValidation from "../../../../components/forms/form-validation/input-validation";

const Row01 = () => {
    return (
        <Card className="p-5 sm:p-10">
            <CardTitle>Required Input Validation</CardTitle>
            <p className="mb-5 sm:mb-10">
                This is a demo of a required field that must not leave empty.
            </p>
            <InputValidation />
        </Card>
    );
};

export default Row01;

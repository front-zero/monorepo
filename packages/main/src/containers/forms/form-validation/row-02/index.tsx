import { Card, CardTitle } from "@ht/components";
import InputValidation from "../../../../components/forms/form-validation/email-validation";

const Row01 = () => {
    return (
        <Card className="p-5 sm:p-10 mt-5">
            <CardTitle>Email Validation</CardTitle>
            <p className="mb-5 sm:mb-10">
                A demo of an email field that is required and must also be a
                valid email address. It automatically validate an email when the
                field is in type=&quot;email&quot;.
            </p>
            <InputValidation />
        </Card>
    );
};

export default Row01;

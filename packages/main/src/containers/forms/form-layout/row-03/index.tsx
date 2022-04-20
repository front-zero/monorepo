import { Card, CardTitle } from "@ht/components";
import BorderedLabelLeftAlignForm from "../../../../components/forms/form-layouts/bordered-label-left-align-form";

const Row01 = () => {
    return (
        <Card className="p-5 sm:p-10 mb-5">
            <CardTitle>Bordered Left Label Alignment</CardTitle>
            <p className="mb-5 sm:mb-10">
                A basic form where labels are aligned in left with bordered
                wrapper.
            </p>
            <BorderedLabelLeftAlignForm />
        </Card>
    );
};

export default Row01;

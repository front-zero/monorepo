import { Card, CardTitle } from "@ht/components";
import LeftLabelAlginForm from "../../../../components/forms/form-layouts/left-label-align-form";
import RightLabelAlginForm from "../../../../components/forms/form-layouts/right-label-align-form";

const Row01 = () => {
    return (
        <div className="mb-5 grid lg:grid-cols-2 gap-5">
            <Card className="p-5 sm:p-10">
                <CardTitle>Left Label Alignment</CardTitle>
                <p className="mb-5 sm:mb-10">
                    A basic form where labels are aligned in left.
                </p>
                <LeftLabelAlginForm />
            </Card>
            <Card className="p-5 sm:p-10">
                <CardTitle>Right Label Alignment</CardTitle>
                <p className="mb-5 sm:mb-10">
                    A basic form where labels are aligned in right.
                </p>
                <RightLabelAlginForm />
            </Card>
        </div>
    );
};

export default Row01;

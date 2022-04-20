import { Card, CardTitle } from "@ht/components";
import CardForm from "../../../../components/forms/form-layouts/card-form";

const Row05 = () => {
    return (
        <Card className="p-5 sm:p-10 mb-5">
            <CardTitle>Form Inside Card</CardTitle>
            <p className="mb-5 sm:mb-10">A form that is inside the card.</p>
            <div className="bg-geyser flex justify-center items-center h-[500px] px-5 sm:px-0">
                <CardForm />
            </div>
        </Card>
    );
};

export default Row05;

import { Checkbox, FeedbackText, Button } from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
    checkVal: string;
}

const CheckboxValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data, null));
    };
    return (
        <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
                <Checkbox
                    label="Firefox"
                    value="firefox"
                    id="checkVal-1"
                    {...register("checkVal", {
                        required: "Checkbox is required",
                    })}
                />
                <Checkbox
                    label="Chrome"
                    value="chrome"
                    id="checkVal-2"
                    {...register("checkVal", {
                        required: "Checkbox is required",
                    })}
                />
                <Checkbox
                    label="Safari"
                    value="safari"
                    id="checkVal-3"
                    {...register("checkVal", {
                        required: "Checkbox is required",
                    })}
                />
                <Checkbox
                    label="Edge"
                    value="edge"
                    id="checkVal-4"
                    {...register("checkVal", {
                        required: "Checkbox is required",
                    })}
                />
                {hasKey(errors, "checkVal") && "error" && (
                    <FeedbackText
                        state={hasKey(errors, "checkVal") ? "error" : "success"}
                    >
                        {errors?.checkVal?.message}
                    </FeedbackText>
                )}
            </div>
            <Button className="mt-6" type="submit">
                Validate Form
            </Button>
        </form>
    );
};

export default CheckboxValidation;

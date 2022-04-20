import { Input, Button } from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
    inputValEmail: string;
}

const EmailValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data, null));
    };
    return (
        <form
            className="flex flex-wrap gap-5 lg:w-2/5 mb-[30px]"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="flex-auto w-full md:w-auto md:flex-1 relative">
                <label htmlFor="inputValEmail">
                    Email: <span className="text-danger">*</span>
                </label>
                <Input
                    id="inputValEmail"
                    placeholder="Enter Email"
                    feedbackText={errors?.inputValEmail?.message}
                    state={
                        hasKey(errors, "inputValEmail") ? "error" : "success"
                    }
                    showState={!!hasKey(errors, "inputValEmail")}
                    {...register("inputValEmail", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
            </div>
            <div className="md:mt-[29px]">
                <Button type="submit">Validate Email</Button>
            </div>
        </form>
    );
};

export default EmailValidation;

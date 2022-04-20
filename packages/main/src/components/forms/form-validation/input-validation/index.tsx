import { Input, Button } from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
    inputValFname: string;
    inputValLname: string;
}

const InputValidation = () => {
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
            <div className="grid md:grid-cols-2 gap-5 lg:w-1/2 mb-5 lg:mb-[30px]">
                <div className="relative">
                    <Input
                        id="inputValFname"
                        placeholder="Enter Firstname"
                        feedbackText={errors?.inputValFname?.message}
                        state={
                            hasKey(errors, "inputValFname")
                                ? "error"
                                : "success"
                        }
                        showState={!!hasKey(errors, "inputValFname")}
                        {...register("inputValFname", {
                            required: "First Name is required",
                        })}
                    />
                </div>
                <div className="relative">
                    <Input
                        id="inputValLname"
                        placeholder="Enter lastname"
                        feedbackText={errors?.inputValLname?.message}
                        state={
                            hasKey(errors, "inputValLname")
                                ? "error"
                                : "success"
                        }
                        showState={!!hasKey(errors, "inputValLname")}
                        {...register("inputValLname", {
                            required: "Last Name is required",
                        })}
                    />
                </div>
            </div>
            <Button type="submit">Validate Form</Button>
        </form>
    );
};

export default InputValidation;

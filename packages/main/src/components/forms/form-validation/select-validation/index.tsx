import { Button, Select } from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { MultiValue, SingleValue } from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IAddProductForm {
    category: string;
}

interface ICategory {
    value: string;
    label: string;
}

const SelectValidation = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IAddProductForm>();

    const onSubmit: SubmitHandler<IAddProductForm> = (data) => {
        alert(JSON.stringify(data, null));
    };

    const categoryOptions: ICategory[] = [
        { value: "Grocery", label: "Grocery" },
        { value: "Pharmacy", label: "Pharmacy" },
        { value: "Electronic", label: "Electronic" },
        { value: "Food", label: "Food" },
    ];
    return (
        <form
            className="flex flex-wrap gap-5  lg:w-2/5"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="flex-auto w-full relative md:w-auto md:flex-1">
                <label htmlFor="selectVal">
                    Email: <span className="text-danger">*</span>
                </label>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        const currentSelection = categoryOptions.find(
                            (c) => c.value === value
                        );

                        const handleSelectChange = (
                            selectedOption:
                                | MultiValue<ICategory>
                                | SingleValue<ICategory>
                        ) => {
                            onChange(selectedOption);
                        };

                        return (
                            <Select
                                value={currentSelection}
                                name={name}
                                options={categoryOptions}
                                onChange={handleSelectChange}
                                isMulti
                                feedbackText={errors?.category?.message}
                                state={
                                    hasKey(errors, "category")
                                        ? "error"
                                        : "success"
                                }
                                showState={!!hasKey(errors, "category")}
                            />
                        );
                    }}
                    name="category"
                    rules={{
                        required: "This value is required",
                    }}
                />
            </div>
            <div className="md:mt-[29px]">
                <Button type="submit">Validate Form</Button>
            </div>
        </form>
    );
};

export default SelectValidation;

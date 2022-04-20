/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CSSProperties, FC } from "react";
import ReactSelect, { MultiValue, SingleValue } from "react-select";
import Feedback from "../feedback";
import { IFeedback } from "../types";

interface IOption {
    value: string;
    label: string;
    readonly color?: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export interface GroupedOption {
    readonly label: string;
    readonly options: readonly IOption[];
}

interface IProps extends IFeedback {
    options: IOption[] | GroupedOption[];
    defaultValue?: IOption;
    value?: IOption;
    name: string;
    onChange?: (newValue: MultiValue<IOption> | SingleValue<IOption>) => void;
    readonly isClearable?: boolean;
    readonly isDisabled?: boolean;
    readonly isLoading?: boolean;
    readonly isRtl?: boolean;
    readonly isSearchable?: boolean;
    readonly isMulti?: boolean;
    placeholder?: string;
    feedbackText?: string;
}

const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
};

const formatGroupLabel = (data: GroupedOption) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const DropdownIndicator = () => {
    return (
        <span className="w-8 h-full inline-flex justify-center items-center">
            <i className="fa fa-caret-down" />
        </span>
    );
};

const Select: FC<IProps> = ({
    options,
    defaultValue,
    value,
    isClearable,
    isDisabled,
    isLoading,
    isRtl,
    isSearchable,
    isMulti,
    placeholder,
    onChange,
    showState,
    showErrorOnly,
    state,
    feedbackText,
}) => {
    const customStyles = {
        control: (provided: any, inputState: any) => ({
            ...provided,
            borderRadius: 0,
            height: 40,
            boxShadow: "none",
            "&:hover": {
                borderColor: inputState.isFocused && "#1b84e7",
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            borderRadius: 0,
            padding: 5,
            marginTop: 0,
            boxShadow: "none",
            border: "1px solid #e6e6e6",
        }),
        option: (provided: any, inputState: any) => ({
            ...provided,
            color:
                inputState.isFocused && inputState.isSelected
                    ? "#fff"
                    : inputState.isSelected
                    ? "#868ba1"
                    : inputState.isFocused
                    ? "#fff"
                    : "#868ba1",
            backgroundColor:
                inputState.isFocused && inputState.isSelected
                    ? "#1b84e7"
                    : inputState.isSelected
                    ? "transparent"
                    : inputState.isFocused
                    ? "#1b84e7"
                    : inputState.isDisabled
                    ? "#d8d9d9"
                    : "transparent",
            cursor: inputState.isDisabled ? "not-allowed" : "pointer",
            "&:hover": {
                backgroundColor: !inputState.isDisabled && "#1b84e7",
                color: !inputState.isDisabled && "#fff",
            },
        }),
        multiValue: (provided: any, inputState: any) => ({
            ...provided,
            backgroundColor: inputState.isDisabled ? "#adb5bd" : "#1b84e7",
            borderRadius: 0,
            flexDirection: "row-reverse",
        }),
        multiValueLabel: (provided: any, inputState: any) => ({
            ...provided,
            color: "#fff",
            paddingRight: 10,
            paddingLeft: inputState?.isDisabled ? 10 : 0,
            paddingTop: 5,
        }),
        multiValueRemove: (provided: any, inputState: any) => ({
            ...provided,
            color: "#fff",
            opacity: 0.5,
            padding: 2,
            display: inputState.isDisabled ? "none" : "inline",
            "&:hover": {
                backgroundColor: "transparent",
                color: "#fff",
                opacity: 1,
            },
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
    };
    return (
        <>
            <ReactSelect
                styles={customStyles}
                options={options}
                defaultValue={defaultValue}
                isClearable={isClearable}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isRtl={isRtl}
                isSearchable={isSearchable}
                isMulti={isMulti}
                formatGroupLabel={formatGroupLabel}
                placeholder={placeholder}
                components={{ DropdownIndicator }}
                value={value}
                onChange={onChange}
            />
            {feedbackText && showState && (
                <Feedback state={state} showErrorOnly={showErrorOnly}>
                    {feedbackText}
                </Feedback>
            )}
        </>
    );
};
Select.displayName = "Select";

export default Select;

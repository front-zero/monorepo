import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import { Input, Calendar } from "@ht/components";

interface IProps {
    name: string;
    id: string;
    placeholder?: string;
    getDate: (name: string, date: string) => void;
    currentDate?: Date;
}

const DatePicker: FC<IProps> = ({
    name,
    id,
    placeholder,
    getDate,
    currentDate,
}) => {
    const [value, setValue] = useState<Date | Date[]>(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!currentDate) return;
        setValue(currentDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const dateChangeHandler = (date: Date | Date[]) => {
        console.log(date);
        setValue(date);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        getDate(name, dayjs(date.toString()).format("ll"));
    };

    const inputChangeHandler = () => {
        setValue(value);
    };

    const inputClickHandler = () => {
        setShow(true);
    };
    const inputBlurHandler = () => {
        setTimeout(() => {
            setShow(false);
        }, 300);
    };

    return (
        <div className="relative">
            <Input
                name={name}
                id={id}
                placeholder={placeholder}
                value={dayjs(value.toString()).format("MM-DD-YYYY")}
                onChange={inputChangeHandler}
                onClick={inputClickHandler}
                onBlur={inputBlurHandler}
            />
            <div
                className={clsx(
                    "calendar absolute bg-white z-[9999] transition-opacity shadow-xl",
                    !show && "invisible opacity-0",
                    show && "visible opacity-100"
                )}
            >
                <Calendar value={value} onChange={dateChangeHandler} />
            </div>
        </div>
    );
};

export default DatePicker;

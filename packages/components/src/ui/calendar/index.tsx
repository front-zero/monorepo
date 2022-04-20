import { FC } from "react";
import ReactCalendar from "react-calendar";

interface IProps {
    className?: string;
    value?: Date | Date[] | null | undefined;
    onChange?: (date: Date | Date[]) => void;
}

const Calendar: FC<IProps> = ({ value, onChange }) => {
    const formatShortWeekday = (_locale: string, date: Date): string => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const d = new Date(date);
        const dayName = days[d.getDay()].substring(0, 2);
        return dayName;
    };

    return (
        <ReactCalendar
            value={value}
            onChange={onChange}
            calendarType="US"
            prevLabel={<i className="ion ion-chevron-left" />}
            nextLabel={<i className="ion ion-chevron-right" />}
            next2Label={null}
            prev2Label={null}
            formatShortWeekday={formatShortWeekday}
            showNeighboringMonth={false}
        />
    );
};

export default Calendar;

import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";

import "./style.css";
export default function DatePicker({ holidays, onChangeDate }) {
    const handleDayClick = (day, { selected }) => {
        const { selectedDays } = holidays;
        if (selected) {
            const selectedIndex = selectedDays.findIndex((selectedDay) =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
            onChangeDate({ selectedDays });
        } else {
            if (new Date(day) > new Date()) {
                selectedDays.push(day);
                onChangeDate({ selectedDays });
            }
        }

        // setholidays({ selectedDays });
    };
    return (
        <DayPicker
            className="mx-auto"
            selectedDays={holidays.selectedDays}
            onDayClick={handleDayClick}
            disabledDays={[
                {
                    before: new Date(),
                },
            ]}
        />
    );
}

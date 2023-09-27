import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type HolidayType =
    | "Christmas"
    | "Diwali"
    | "Halloween"
    | "Valentine's"
    | "Navratri";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<HolidayType>("Valentine's");

    function produceNextAlp(): void {
        // eslint-disable-next-line prettier/prettier
        setHoliday(holiday === "Christmas" ? "Diwali" : holiday === "Diwali" ? "Halloween" : holiday === "Halloween" ? "Navratri" : holiday === "Navratri" ? "Valentine's" : "Christmas");
    }

    function produceNextYr(): void {
        // eslint-disable-next-line prettier/prettier
        setHoliday(holiday === "Valentine's" ? "Navratri" : holiday === "Navratri" ? "Halloween" : holiday === "Halloween" ? "Diwali" : holiday === "Diwali" ? "Christmas" : "Valentine's");
    }

    function giveEmoji(): string {
        if (holiday === "Valentine's") {
            return "💖";
        } else if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Diwali") {
            return "🪔";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else {
            return "💃🕺";
        }
    }

    return (
        <div>
            <span>Holiday: {giveEmoji()} </span>
            <br></br>
            <Button onClick={produceNextAlp}>Next Alphabetically</Button>
            <Button onClick={produceNextYr}>Next In Year</Button>
        </div>
    );
}

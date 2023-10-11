import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setColor] = useState<string>("red");

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "black",
        "pink",
        "brown"
    ];

    const colorOptions = colors.map((color) => (
        <Form.Check
            inline
            key={`emotion-check-${color}`}
            type="radio"
            name="colors"
            onChange={updateColor}
            id={`emotion-check-${color}`}
            label={color}
            value={color}
            checked={chosenColor === color}
        />
    ));

    return (
        <div>
            <h3>Change Color</h3>
            <div>{colorOptions}</div>
            You have chosen{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}
            </span>
        </div>
    );
}

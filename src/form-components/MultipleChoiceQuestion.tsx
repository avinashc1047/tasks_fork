import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [selected, setSelected] = useState<string>(options[0]);

    // This is the Control
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="answerOptions">
                <Form.Label>Pick an answer</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === selected ? "✔️" : "❌"}
        </div>
    );
}

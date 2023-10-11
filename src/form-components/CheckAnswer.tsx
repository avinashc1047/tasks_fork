import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [resp, setResp] = useState<string>("");

    // This is the Control
    function updateResp(event: React.ChangeEvent<HTMLInputElement>) {
        setResp(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="checkAnswerBox">
                <Form.Label>Answer</Form.Label>
                <Form.Control value={resp} onChange={updateResp} />
            </Form.Group>
            <h3>Check Answer</h3>
            {resp === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [attemptReq, setAttemptReq] = useState<string>("");

    function updateAttmpt() {
        setAttempt(attempt + (parseInt(attemptReq) || 0));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="giveAttemptBox">
                <Form.Label>Add Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptReq}
                    onChange={(e) => setAttemptReq(e.target.value)}
                />
            </Form.Group>
            <p>Number of attempts left: {attempt}</p>
            <button
                onClick={() => setAttempt(attempt - 1)}
                disabled={attempt === 0}
            >
                Use
            </button>
            <button onClick={updateAttmpt}>Gain</button>
        </div>
    );
}

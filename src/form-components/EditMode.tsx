import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [status, setStatus] = useState<boolean>(true);
    const [mode, setMode] = useState<boolean>(true);

    // This is the Control
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    // This is the Control
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }

    // This is the Control
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="edit?"
                    checked={mode}
                    onChange={updateMode}
                />
            </div>

            {!mode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={status}
                        onChange={updateStatus}
                    />

                    <Form.Group controlId="changeName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            )}

            <p>
                {name} is {status ? "" : "not "}a student
            </p>
        </div>
    );
}

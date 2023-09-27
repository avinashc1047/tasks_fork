import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startProgress(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    function stopProgress(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            {"Number of Attemtps: " + attempts.toString()}
            <br></br>
            <Button
                onClick={startProgress}
                disabled={attempts === 0 || inProgress}
            >
                Start Quiz
            </Button>
            <Button onClick={stopProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}

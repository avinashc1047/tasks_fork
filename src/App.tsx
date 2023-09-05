import React from "react";
import redbull_f1 from "./images/Redbull_f1.jpg";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <p>Avinash Chouhan | Hello World</p>
                <h1>Intial HTML/CSS Practice</h1>
                <img
                    src={redbull_f1}
                    alt="A picture of a Redbull F1 car in the rain."
                    width="1000"
                    height="600"
                />
                <ol className="List_Linking">
                    <li>Get up</li>
                    <li>Workout</li>
                    <li>Go To Class</li>
                </ol>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container className="Table_style">
                    <Row>
                        <Col>
                            <div className="Div_style"></div>
                        </Col>
                        <Col>
                            <div className="Div_style"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

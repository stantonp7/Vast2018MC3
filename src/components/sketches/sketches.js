import { Container } from "@mui/material";
import React from "react";

function Sketches(props) {
    return (
        <div>
            <Container>
                <div className="sketchBox">
                    <img height="500px;" src="https://mc3-files.azurewebsites.net/NetworkGraph_Sketch.jpg"></img>
                    <img height="500px;" src="https://mc3-files.azurewebsites.net/Calendar_Sketch.jpg"></img>
                </div>
            </Container>
        </div>
    )
}

export default Sketches;
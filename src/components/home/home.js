import { Container } from "@mui/material";
import React from "react";
import VisualizationLink from "./visualizationLink";
import visualizations from "./visualizations.json";
function Home(props) {
    var links = visualizations.map((visual) => {
        return <VisualizationLink key={visual.id} visualization={visual}></VisualizationLink>
    });
    return (
       
        <Container>
            <div className={'center'}>
                <div>
                    {links}
                </div>
            </div>
        </Container>
    )
}

export default Home;
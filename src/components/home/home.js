import { Container, Grid } from "@mui/material";
import React from "react";
import VisualizationLink from "./visualizationLink";
import visualizations from "./visualizations.json";
function Home(props) {
    var links = visualizations.map((visual) => {
        return<Grid item xs={4}><VisualizationLink key={visual.id} visualization={visual}></VisualizationLink></Grid>
    });
    return (
       
        <Grid container spacing={2}>
                    {links}
        </Grid>
    )
}

export default Home;
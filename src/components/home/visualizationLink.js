import { Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HubIcon from '@mui/icons-material/Hub';
import Icon from '@mui/material/Icon';

function VisualizationLink({ visualization }) {
    return (
        <div >
            <Card sx={{ width: 400, margin: 5}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {visualization.title} <HubIcon color="primary"></HubIcon>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {visualization.author} - {visualization.visualType}
                        </Typography>
                        <Typography variant="body2">
                            {visualization.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={visualization.url} size="small">View</Button>
                    </CardActions>
                </Card>
        </div>
    )
}

export default VisualizationLink;
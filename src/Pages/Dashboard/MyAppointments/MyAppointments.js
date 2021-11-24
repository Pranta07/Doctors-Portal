import Grid from "@mui/material/Grid";
import React from "react";
import Calendar from "../../../Shared/Calendar/Calendar";

const MyAppointments = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Calendar></Calendar>
            </Grid>
            <Grid item xs={6}>
                <h1>My Appointments Here</h1>
            </Grid>
        </Grid>
    );
};

export default MyAppointments;

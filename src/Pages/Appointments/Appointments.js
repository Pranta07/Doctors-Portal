import { Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Navigation from "../../Shared/Navigation/Navigation";

const Appointments = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation />
            <h1>Select Date to Book Appointments</h1>
            <Divider />
            <Container sx={{ py: 3 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} sm={4} md={6}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <Box>
                            <img
                                src="https://i.ibb.co/fDfFXg8/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg"
                                alt=""
                                width="100%"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <h1>Available Appointments on {date.toDateString()}</h1>
        </div>
    );
};

export default Appointments;

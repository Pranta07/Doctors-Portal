import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Navigation from "../../Shared/Navigation/Navigation";
import Box from "@mui/material/Box";
import AvailableDoctor from "./AvailableDoctor/AvailableDoctor";
import Typography from "@mui/material/Typography";

const doctors = [
    {
        name: "Matthew Reyes",
        field: "Obstetrics & Gynaecology",
        desc: "University of California San Francisco Parnassus Campus",
        availableDay: ["Sat", "Mon", "Wed"],
        time: "6.00 PM - 10.00 PM",
        space: 7,
    },
    {
        name: "Rebecca Gilbert",
        field: "Medicine Specialist",
        desc: "University of San Francisco Parnassus Campus",
        availableDay: ["Sun", "Tue", "Thu"],
        time: "8.00 PM - 11.00 PM",
        space: 8,
    },
    {
        name: "Bobby Stanley",
        field: "Dermatologist",
        desc: "University of California San Francisco Parnassus Campus",
        availableDay: ["Sat", "Mon", "Wed"],
        time: "6.30 PM - 11.00 PM",
        space: 10,
    },
    {
        name: "Kathryn Cooper",
        field: "Cardio Specialist",
        desc: "University of California San Francisco Parnassus Campus",
        availableDay: ["Sun", "Tue", "Thu"],
        time: "7.00 PM - 11.30 PM",
        space: 5,
    },
];

const Appointments = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation />

            <Typography variant="h4">
                <Box
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Monospace",
                        m: 2,
                    }}
                >
                    Pick a Date to Book Appointments
                </Box>
            </Typography>
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

            <Typography variant="h4">
                <Box
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Monospace",
                        m: 2,
                    }}
                >
                    Available Doctors on {date.toDateString()}
                </Box>
            </Typography>
            <Divider />
            <Container sx={{ py: 3 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {doctors.map((doctor) => (
                        <AvailableDoctor
                            doctor={doctor}
                            date={date.toDateString()}
                        />
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Appointments;

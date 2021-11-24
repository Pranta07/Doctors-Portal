import { CalendarToday } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const AvailableDoctor = ({ doctor, date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h5">
                        <Box
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Monospace",
                                m: 1,
                            }}
                        >
                            {doctor.name}
                        </Box>
                    </Typography>
                    <Typography>
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontWeight: "bold",
                                m: 1,
                            }}
                        >
                            {doctor.field}
                        </Box>
                    </Typography>
                    <Typography>
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontWeight: "light",
                                m: 1,
                            }}
                        >
                            {doctor.desc}
                        </Box>
                    </Typography>
                    <CalendarToday></CalendarToday>
                    <Typography>
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontWeight: "bold",
                            }}
                        >
                            {doctor.available.map((day) => (
                                <span>{day} </span>
                            ))}
                        </Box>
                    </Typography>
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        sx={{ my: 1 }}
                    >
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            <BookingModal
                doctor={doctor}
                open={open}
                handleClose={handleClose}
                date={date}
            />
        </>
    );
};

export default AvailableDoctor;

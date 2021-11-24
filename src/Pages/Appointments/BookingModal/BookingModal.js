import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ doctor, open, handleClose, date }) => {
    const handleBooking = (e) => {
        e.preventDefault();
        alert("Your Appointment Booked Successfully!");
        handleClose();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {doctor.name}({doctor.field})
                        </Typography>
                        <form onSubmit={handleBooking}>
                            <TextField
                                sx={{ my: 1 }}
                                disabled
                                label="Date"
                                defaultValue={date}
                                variant="standard"
                                fullWidth
                            />
                            <TextField
                                sx={{ my: 1 }}
                                disabled
                                label="Time"
                                defaultValue={doctor.time}
                                variant="standard"
                                fullWidth
                            />
                            <TextField
                                sx={{ my: 1 }}
                                label="Name"
                                defaultValue="Pranta"
                                variant="standard"
                                fullWidth
                            />
                            <TextField
                                sx={{ my: 1 }}
                                label="Email"
                                defaultValue="xyz@gmail.com"
                                variant="standard"
                                fullWidth
                            />
                            <TextField
                                sx={{ my: 1 }}
                                label="Phone"
                                defaultValue="018********"
                                variant="standard"
                                fullWidth
                            />
                            <Button type="submit" variant="contained">
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;

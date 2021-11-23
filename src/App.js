import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Appointments from "./Pages/Appointments/Appointments";
import MyAppointments from "./Pages/Dashboard/MyAppointments/MyAppointments";
import Pay from "./Pages/Dashboard/Pay/Pay";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route
                            path="myAppointments"
                            element={<MyAppointments />}
                        />
                        <Route path="pay" element={<Pay />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

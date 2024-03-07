import "./App.css";
import Login from "./Pages/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Sidebar from "./Components/sidebar/Sidebar.jsx";
import Cal from "./Pages/calendar/cal.jsx";
import Studentform from "./Pages/Studentform.jsx";
import AdminForm from "./Pages/AdminForm.jsx";
import WhatsApp2 from "./Pages/Whatsapp2.jsx";
import Resources from "./Pages/Resources.jsx";
import CourseDeets from "./Pages/CourseDeets.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <UserProvider>
            <>
                <BrowserRouter>
                    <div className="mt-0 ">
                        <Sidebar />
                    </div>
                    <div className=" grid justify-items-end ">
                        <Navbar />
                    </div>

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cal" element={<Cal />} />
                        <Route path="/Stuform" element={<Studentform />} />
                        <Route path="/adminform" element={<AdminForm />} />
                        <Route path="/company" element={<WhatsApp2 />} />
                        <Route path="/resources" element={<Resources />} />

                        <Route
                            path="/coursedeets/:courseTitle"
                            element={<CourseDeets />}
                        />
                    </Routes>
                    <div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </>
        </UserProvider>
    );
}

export default App;

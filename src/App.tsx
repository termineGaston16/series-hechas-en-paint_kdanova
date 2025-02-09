import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./US/Presentation/Components/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element='Section no Found 404' />

                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
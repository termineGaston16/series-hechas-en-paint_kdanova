import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element='Section no Found 404' />

                <Route path="/" element='Section no Found 404' />
            </Routes>
        </BrowserRouter>
    )
}
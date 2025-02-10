import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./US/Presentation/Components/Home";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {

    const query = new QueryClient;

    return (
        <QueryClientProvider client={query}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element='Section no Found 404' />

                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Modalidades from "./components/Modalidades";
import Diferenciais from "./components/Diferenciais";
import Footer from "./components/Footer";
import CadastroPage from "./pages/CadastroPage";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Modalidades />
            <Diferenciais />
            <Footer />
        </>
    );
}

function AppContent() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            const id = location.hash.substring(1);

            // Aguarda a página inicial ser renderizada
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        } else if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [location.pathname, location.hash]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;

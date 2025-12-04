import { BrowserRouter, Routes, Route } from 'react-router';

// Routes
import Home from 'pages/home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

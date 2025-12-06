import { BrowserRouter, Routes, Route } from 'react-router';

// Routes
import Home from 'pages/home';
import Cursor from 'components/cursor';

const App = () => {
    return (
        <BrowserRouter>
            <Cursor />
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

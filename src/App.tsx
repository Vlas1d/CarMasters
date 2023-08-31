import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './pages/main/Main';
import TestComponents from "./TestComponents";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/test" element={<TestComponents />} />
            </Routes>
        </>
    );
}

export default App;
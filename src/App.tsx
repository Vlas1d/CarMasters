import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from "./components/common/big/Header";
import Footer from "./components/common/big/Footer";

import Main from './pages/main/Main';
import TestComponents from "./TestComponents";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/test" element={<TestComponents />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
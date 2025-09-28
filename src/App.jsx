import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './component/MainLayout.jsx'
import HomePage from './component/HomePage.jsx'
import MovieDetail from './component/MovieDetail.jsx'

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default App

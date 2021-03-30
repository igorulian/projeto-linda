import React from 'react'
import {Routes,Route} from 'react-router-dom' //react-router-dom@6.0.0-beta.0

import Main from './pages/Main/Main.js'
import Test from './pages/Test/Teste.js'
import VideoDisplay from './pages/VideoDisplay/VideoDisplay'

// const PrivateRoute = props => {
//     const vT = validToken()
//     return vT ? <Route {...props} /> : window.location.href = '/login'
// }

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/video" element={<VideoDisplay/>} />
        </Routes>
    )
}
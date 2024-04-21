import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import CounterApplication from './CounterApplication';
import Header from './Components/Header'
import FetchData from './FetchData';
import ConditionalRendering from './ConditionalRendering';
import ConditionalRendering2 from './ConditionalRendering2';
import PropsPractice from './PropsPractice';
import HookCounter from './HookCounter';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CounterApplication' element={<CounterApplication />} />
          <Route path='/FetchData' element={<FetchData />} />
          <Route path='/ConditionalRendering' element={<ConditionalRendering />} />
          <Route path='/ConditionalRendering2' element={<ConditionalRendering2 />} />
          <Route path='/PropsPractice' element={<PropsPractice name="Amrit" />} />
          <Route path='/HookCounter' element={<HookCounter />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

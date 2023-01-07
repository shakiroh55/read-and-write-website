import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Homes from "./pages/Homes/Homes";
import Adds from "./pages/Adds/Adds";
import Posts from "./pages/Posts/Posts";
import AddsContributor from "./pages/Adds/AddsContributor";
import Post2 from "./components/Post/Post2"

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Homes />} />
            <Route path="Homes" element={<Homes />} />
            <Route path="Adds" element={<Adds />} />
            <Route path="Posts" element={<Posts />} />
            <Route path="Post2" element={<Post2 />} />
            <Route path="AddsContributor" element={<AddsContributor />} />

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
import "./App.css";
import "../node_modules/react-modal-video/css/modal-video.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import BookingHistory from "./components/BookingHistory/BookingHistory";

export default function App() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setOpen={setOpen}
                isOpen={isOpen}
                setVideoId={setVideoId}
              />
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/purchase/:id" element={<PurchasePage />} />
        </Routes>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
        <BookingHistory modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </BrowserRouter>
    </div>
  );
}

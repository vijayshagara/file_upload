import { useState } from "react";
import "./App.css";
import "react-bootstrap";
import ExcelUpload from "./component/File_upload/FileUplaod";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // const [Personaldata, setPrsonalData] =

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExcelUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

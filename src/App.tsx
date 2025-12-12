import { BrowserRouter, Routes, Route } from "react-router-dom";
import SantiagoHub from "./components/hub/SantiagoHub";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SantiagoHub />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

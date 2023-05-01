import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, StorePage, ProductDetailPage } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/shoes/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

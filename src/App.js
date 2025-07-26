import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
export default App;

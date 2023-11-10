import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Wish from "./pages/Wish";
import Pnf from "./pages/Pnf";
import Pro from "./pages/Pro";




function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/wish" element={<Wish></Wish>}></Route>
        <Route path='/products' element={<Pro></Pro>}></Route>

        <Route path='*' element={<Pnf></Pnf>}></Route>

    </Routes>

      <Footer></Footer> 
    </div>
  );
}

export default App;

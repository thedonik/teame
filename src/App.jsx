import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import ShareLayout from "./components/ShareLayout";
import SinglePage from "./components/SinglePage";
import AddCard from "./components/AddCard";
// import { useGlobalContext } from "./context";

const App = () => {
  // const { users } = useGlobalContext();

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ShareLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<AddCard/>} />
          <Route path="/single-product/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

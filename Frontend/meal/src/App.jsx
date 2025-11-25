import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryMeals from "./pages/CategoryMeals";
import MealDetails from "./pages/MealDetails";
import RandomMeal from "./pages/RandomMeal";
import Footer from "./components/Footer";


function App() {

  return (
    <>
     <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/category/:name" element={<CategoryMeals />} />
    <Route path="/meal/:id" element={<MealDetails />} />
    <Route path="/random" element={<RandomMeal />} />
  </Routes>
  <Footer/>
</BrowserRouter>
    </>
  )
}

export default App

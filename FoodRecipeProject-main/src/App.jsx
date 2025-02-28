import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import FoodRecipe from "./components/FoodRecipe";
import { RecipeDetailPage } from "./components/RecipeDetailPage";
import LoginPage from "./components/LoginPage";



function App() {
  return (
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
        <Route path="/" element={<LoginPage />} />

          <Route path="/foodRecipe" element={<FoodRecipe />} />
          <Route path="/recipeDetail/:userId" element={<RecipeDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App; 

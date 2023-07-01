import Header from "./components/Header";
import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeModal from "./components/AddRecipeModal";
import { useData } from "./context/DataContext";

const App = () => {
  const {
    state: { showAddRecipeModal },
    dispatch,
  } = useData();

  const closeModalOverlayHandler = (e) => {
    if (e.target.className === "modalOverlay") {
      dispatch({ type: "CloseAddRecipeModal" });
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main_container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </main>

      {showAddRecipeModal && (
        <div className="modalOverlay" onClick={closeModalOverlayHandler}>
          <AddRecipeModal />
        </div>
      )}
    </div>
  );
};

export default App;

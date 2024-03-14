import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import FlashCardPage from "./pages/FlashCardPage/FlashCardPage";
import PracticePage from "./pages/PracticePage/PracticePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import GamePage from "./pages/GamePage/GamePage";
import Quiz from "./components/Quiz/Quiz";
import ProductPage from "./pages/ProductPage/ProductPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import OliPage from "./pages/OliPage/OliPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/oli" element={<OliPage />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/stories/:storyId" element={<StoryPage />} />
          <Route path="/flashcards" element={<FlashCardPage />} />
          <Route path="/flashcards/practice" element={<PracticePage />} />
          <Route
            path="/flashcards/practice/:cardId"
            element={<PracticePage />}
          />
          <Route path="/flashcards/quiz" element={<QuizPage />} />
          {/* <Route path="/flashcards/quiz/:quizId" element={<QuizPage />} /> */}
          <Route path="/flashcards/game" element={<GamePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/books" element={<BooksPage />} />
          <Route path="/products/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>{" "}
    </>
  );
}

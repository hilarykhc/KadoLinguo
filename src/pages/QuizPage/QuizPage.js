import { useParams, useNavigate } from "react-router-dom";
import "./QuizPage.scss";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardPairing from "../../components/CardPairing/CardPairing";
import Quiz from "../../components/Quiz/Quiz";

export default function QuizPage() {
  return (
    <>
      <Quiz />
    </>
  );
}

// WordRotateDemo ajustado para ser un componente React
import React from "react";
import WordRotate from "@/components/magicui/word-rotate";

const WordRotateDemo = () => {
  return (
    <WordRotate
      className="text-2xl font-bold text-secondary dark:text-white"
      words={["Eficiente", "Efectiva", "Rápida", "Segura", "Fácil", "Confiable"]}
    />
  );
};

export default WordRotateDemo;

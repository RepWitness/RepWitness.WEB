import { useState } from "react";

const quotes = [
  "The only bad workout is the one you didn't do.",
  "Push yourself because no one else is going to do it for you.",
  "Success starts with self-discipline.",
  "No pain, no gain.",
  "Your body can stand almost anything. It’s your mind that you have to convince.",
  "Don’t limit your challenges. Challenge your limits.",
  "Train insane or remain the same.",
  "Results happen over time, not overnight.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Discipline is choosing between what you want now and what you want most."
];

export const QuoteOfTheMoment = () => {
  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <div className="h-full w-6/10 flex justify-center items-center px-4">
      <p className="text-xl text-white/30 italic text-center">
        {quote}
      </p>
    </div>
  );
};
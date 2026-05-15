import { useEffect, useState } from "react";

export default function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
      })
      .catch((err) => {
        console.error(err);

        setQuote(
          "Stay focused and keep learning ✨"
        );

        setAuthor("StudyBuddy");
      });
  }, []);

  return (
    <div>
      <h2>✨ Daily Motivation</h2>

      <p>
        "{quote}"
      </p>

      <p>
        - {author}
      </p>
    </div>
  );
}
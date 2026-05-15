import { useEffect, useState } from "react";

export default function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(
    "https://corsproxy.io/?https://zenquotes.io/api/random"
  )
      .then((res) => res.json())

      .then((data) => {
        setQuote(data[0].q);

        setAuthor(data[0].a);

        // ✅ loading pois onnistumisen jälkeen
        setLoading(false);
      })

      .catch((err) => {
        console.error(err);

        setQuote(
          "Stay focused and keep learning ✨"
        );

        setAuthor("StudyBuddy");

        // ✅ loading pois myös errorissa
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h2>✨ Daily Motivation</h2>

      {loading ? (
        <p>
          Loading motivation...
        </p>
      ) : (
        <>
          <p>
            "{quote}"
          </p>

          <p>
            - {author}
          </p>
        </>
      )}
    </div>
  );
}
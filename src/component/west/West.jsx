import React, { useEffect, useState } from "react";
import useDebounce from "../function/DebounceFunction/Debounce";

const fakeData = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "Tailwind",
  "Bootstrap",
];

function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 500); // 500ms debounce

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        const filtered = fakeData.filter((item) =>
          item.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setResults(filtered);
        setLoading(false);
      }, 800); // Fake API delay
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);
  console.log('debouncedQuery:-',  debouncedQuery)
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>🔍 Debounced Search</h2>
      <input
        type="text"
        placeholder="Search tech stack..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.length > 0 ? (
          results.map((item, i) => <li key={i}>{item}</li>)
        ) : (
          !loading && query && <li>No result found</li>
        )}
      </ul>
    </div>
  );
}

export default DebouncedSearch;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [debouncedValue, setdebouncedValue] = useState("");
  const debouncedQuery = useDebounce(query);
  useEffect(() => {
    console.log(`debounced : ${debouncedQuery}`);
  }, [debouncedQuery]);

  return (
    <nav className="Navbar">
      <p className="logo" onClick={() => navigate("/")}>
        재민무비
      </p>
      <div className="navbar-controller">
        <Link to="/">홈</Link>
        <Link to="/movie">영화</Link>
        <Link to="/about">소개</Link>

        <input
          type="text"
          placeholder="검색해"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </div>
      <div className="btn">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  );
}

export function useDebounce(value, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

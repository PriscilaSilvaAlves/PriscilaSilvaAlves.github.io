import { useState } from "react";
import { Search } from "lucide-react";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

type Page = "login" | "register";
type Drop = "darkmode" | "lightmode";

function App() {

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [page, setPage] = useState<Page>("login");
  const [dropdown, setDropdown] = useState<Drop>("darkmode");
  const [search, setSearch] = useState("");
  const [guestMode, setGuestMode] = useState(false);

  function handleExit() {
    if (guestMode) {
      setGuestMode(false); // sai do modo visitante
      setPage("login");
    } else {
      logout(); // logout normal
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setPage("login");
  }

  function enterGuestMode() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setGuestMode(true);
  }

  if (token || guestMode) {
    return (
      <div className={`min-h-screen flex flex-col
                    ${dropdown === "lightmode" ? "bg-white" : "bg-[#070b20]"}`}>
        <nav className={`w-full px-4 py-3 flex flex-wrap items-center gap-2
  ${dropdown === "lightmode"
            ? "bg-gray-100 border-b border-gray-300"
            : "bg-[#070b20] border-b border-gray-800"}`}>

          {/* TÍTULO */}
          <h1 className={`text-lg sm:text-xl font-semibold whitespace-nowrap
    ${dropdown === "lightmode" ? "text-sky-500" : "text-white"}`}>
            Mini Twitter
          </h1>

          {/* INPUT (cresce e ocupa espaço) */}
          <div className="flex-1 min-w-full sm:min-w-0 sm:flex sm:justify-center order-3 sm:order-none">
            <div className="relative w-full sm:max-w-[600px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por post..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-sky-500
          ${dropdown === "lightmode"
                    ? "bg-white text-gray-800 border border-gray-300"
                    : "bg-gray-800 text-white"}`}
              />
            </div>
          </div>

          {/* AÇÕES (dropdown + sair) */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto order-2">
            <select
              className={`rounded-lg px-2 sm:px-3 py-1 border backdrop-blur-md
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${dropdown === "lightmode"
                  ? "bg-white text-black border-gray-300"
                  : "bg-white/10 text-white border-white/20"}`}
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value as "darkmode" | "lightmode")}
            >
              <option className="text-black bg-white" value="darkmode">Darkmode</option>
              <option className="text-black bg-white" value="lightmode">Lightmode</option>
            </select>

            <button
              onClick={handleExit}
              className={`rounded-lg px-2 sm:px-3 py-1 border backdrop-blur-md
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition
        ${dropdown === "lightmode"
                  ? "bg-white text-black border-gray-300 hover:bg-gray-200"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"}`}
            >
              Sair
            </button>
          </div>
        </nav>
        <div className="flex-1">
          <Feed
            dropDown={dropdown}
            search={search}
            isGuest={guestMode}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col items-center overflow-y-auto justify-center 
      ${dropdown === "lightmode" ? "bg-white" : "bg-[#070b20]"}`}>
      <nav className="top-0 gap-2 left-0 w-full bg-transparent flex justify-end items-center p-4">
        <select
          className={`bg-white/10 border border-white/20 rounded-lg 
         px-3 py-1 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 
         ${dropdown === "lightmode" ? "text-black" : "text-white"}`}
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value as Drop)}>
          <option className="text-black bg-white" value="darkmode">DarkMode</option>
          <option className="text-black bg-white" value="lightmode">LightMode</option>
        </select>
        <button
          onClick={enterGuestMode}
          className={`rounded-lg px-3 py-1 border backdrop-blur-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition
              ${dropdown === "lightmode"
              ? "bg-white text-black border-gray-300 hover:bg-gray-200"
              : "bg-white/10 text-white border-white/20 hover:bg-white/20"}`}
        >
          Modo visitante
        </button>
      </nav>
      <div className="w-full max-w-[500px] mx-auto px-4 mb-11">
        <h1 className={`text-5xl text-center mt-11 mb-12 font-semibold
          ${dropdown === "lightmode" ? "text-sky-500" : "text-white"}`}>
          Mini Twitter
        </h1>
        <div className="flex flex-col sm:flex-row gap-0 mb-12">
          <button
            onClick={() => setPage("login")}
            className={`w-full sm:w-[250px] h-[80px] text-lg font-semibold
              ${page === "login" ? "border-blue-400 border-b-4" : "border-blue-100 border-b-2"}
              ${page === "login"
                ? dropdown === "darkmode"
                  ? "text-white"
                  : "text-sky-500"
                : "text-gray-500"
              }`}
          >
            Login
          </button>
          <button
            onClick={() => setPage("register")}
            className={`w-full sm:w-[250px] h-[80px] text-lg font-semibold
              ${page === "register" ? "border-blue-400 border-b-4" : "border-blue-100 border-b-2"}
              ${page === "register"
                ? dropdown === "darkmode"
                  ? "text-white"
                  : "text-sky-500"
                : "text-gray-500"
              }`}
          >
            Cadastrar
          </button>
        </div>
        {page === "login" && <Login setToken={setToken} dropDown={dropdown} />}
        {page === "register" && <Register setToken={setToken} dropDown={dropdown} />}
        <p className="text-center text-gray-500 mt-4 text-[0.800rem]">Ao clicar em continuar, você concorda com os nossos</p>
        <p className="text-center text-gray-500 text-[0.800rem]"><a href="#" className="underline">Termos de Serviço</a> e <a href="#" className="underline">Política de Privacidade</a>.</p>
      </div>
    </div>
  );
}

export default App;

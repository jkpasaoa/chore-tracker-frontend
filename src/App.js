//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import About from "./pages/About"
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";

//COMPONENTS
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/chores" element={<Index />} />
              <Route path="/chores/:id" element={<Show />} />
              <Route path="/chores/new" element={<New />} />
              <Route path="/chores/:id/edit" element={<Edit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;

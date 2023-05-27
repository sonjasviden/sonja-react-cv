import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './scss/style.css';
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";


export default function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
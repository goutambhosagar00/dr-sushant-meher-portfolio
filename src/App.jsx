import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Research5G from "./pages/Research5G";
import Publications from "./pages/Publications";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";

function App() {
  return (
   <BrowserRouter>
  <Layout>
    <Routes>
      {/* ✅ HOME */}
      <Route index element={<Home />} />

      {/* OTHER PAGES */}
      <Route path="about" element={<About />} />
      <Route path="education" element={<Education />} />
      <Route path="research-5g" element={<Research5G />} />
      <Route path="publications" element={<Publications />} />
      <Route path="articles" element={<Articles />} />
      <Route path="articles/:slug" element={<ArticleDetail />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Layout>
</BrowserRouter>

  );
}

export default App;

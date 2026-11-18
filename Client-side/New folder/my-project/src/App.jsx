import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./component/MainLayout";

function Home() {
  return <h1 className="text-2xl font-bold p-4">Home Page</h1>;
}

function About() {
  return <h1 className="text-2xl font-bold p-4">About Page</h1>;
}

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
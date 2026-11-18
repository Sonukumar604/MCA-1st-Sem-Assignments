
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Counter />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
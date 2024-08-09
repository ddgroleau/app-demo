import "./App.css";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="w-[100vw] min-h-[100vh] h-full flex flex-col overflow-hidden">
      <main className="flex-grow flex min-w-fit">
        <Navbar />
        <div className="flex flex-col w-full">
          <TopBar />
          <section className="bg-secondary flex-grow p-4">Main content</section>
        </div>
      </main>
    </div>
  );
}

export default App;

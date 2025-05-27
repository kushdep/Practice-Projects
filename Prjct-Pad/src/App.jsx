import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";

function App() {
  return (
    <div className=" flex flex-row ">
      <section className="w-80 h-screen bg-black rounded-tr-lg mt-10">
        <Sidebar />
      </section>
      <section className="mt-10 ml-10">
        <Pages />
      </section>
    </div>
  );
}

export default App;

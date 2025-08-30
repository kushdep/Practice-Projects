import Sidebar from "./components/Sidebar";
import Pages from "./components/Pages";
import ProjectContextProvider from "./store/projectContext";

function App() {
  return (
    <ProjectContextProvider>
      <div className="flex flex-row h-screen mt-10">
        <section className="w-1/4 bg-black rounded-tr-lg h-full">
          <Sidebar />
        </section>
        <section className="w-4/5 ml-10 h-full">
          <Pages />
        </section>
      </div>
    </ProjectContextProvider>
  );
}

export default App;

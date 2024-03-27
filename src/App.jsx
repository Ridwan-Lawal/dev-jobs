import { AppProvider } from "./contexts/AppContext.jsx";
import MainApp from "./components/MainApp.jsx";

function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;

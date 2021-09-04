import Routes from "./components/nav/Routes";
import { AuthProvider } from "./components/context/AuthContext";
import "./sass/custom.scss";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

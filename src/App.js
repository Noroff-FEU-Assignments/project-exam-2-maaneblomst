import Routes from "./components/nav/Routes";
import { AuthProvider } from "./context/AuthContext";
import ContactModal from "./components/modals/ContactModal";
import "./sass/custom.scss";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <ContactModal />
    </AuthProvider>
  );
}

export default App;

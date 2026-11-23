import "./App.css"
import Header from "./component/Header/Header"
import Destinations from "./component/Destinations/Destinations"
import Footer from "./component/Footer/Footer"
import Login from "./component/Login/Login.jsx"

function App() {
  return (
    <div className="app">
      <Header />
      <Destinations />
      <Login />
      <Footer />
    </div>
  );
}

export default App;

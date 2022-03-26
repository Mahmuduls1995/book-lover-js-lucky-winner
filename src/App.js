import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Book/Card';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;

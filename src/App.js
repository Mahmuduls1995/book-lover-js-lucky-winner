import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Book/Card';


function App() {
  return (
    <div className="App">
     <Header></Header>
      <Card></Card>
      
    </div>
  );
}

export default App;

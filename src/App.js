import './App.css';
import Footer from './components/Footer/Footer';
// YOU CAN CHANGE THE FOOTER / HEADER FILES TO INDEX.JS AND YOU DON'T HAVE TO DO THE FINAL PREFIX /FOOTER BECAUSE SYSTEM WILL ALREADY KNOW TO LOOK FOR INDEX.JS
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <p>Project 3</p>
      <Footer />
    </div>
  );
}

export default App;

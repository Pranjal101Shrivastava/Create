import Nav from './components/Nav';
import './App.css';
import MacbookPro from './components/MacbookPro';
import Footer from './components/Footer';
import Component from './components/Component';
import Down from './components/Down';


function App() {
  return (
    <>
    <div className="App">
        <Nav />
       <MacbookPro />
    </div>
    <div className='Get'>
       <Component />
    </div>
   
    <div>
      <Footer />
    </div>
    <div className='down'>
      <Down />    
    </div>
    </>
  );
}

export default App;

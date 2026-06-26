import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Hero from './components/hero/hero.js'
import Services from './components/services/services.js';
import Quality from './components/quality/quality.js';
import Works from './components/works/works.js';
import About from './components/about/about.js';
import Record from './components/record/record.js';
import Contacts from './components/contacts/contacts.js';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Hero />
        <Services />
        <Quality />
        <Works />
        <About />
        <Record />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;

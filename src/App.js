import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './App.css';
import PageNav from './components/Navbar';
import EduTab from './components/EduTab';
import Warranty from './components/Warranty';

function App() {
  return (
    <>
      <PageNav />
      <EduTab />
      <Warranty />
    </>
  );
}

export default App;

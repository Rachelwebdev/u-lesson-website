import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './App.css';
import PageNav from './components/Navbar';
import EduTab from './components/EduTab';
import Warranty from './components/Warranty';
import Troubleshooting from './components/Troubleshoot';
import WhatsappOTP from './components/Whatsapp';

function App() {
  return (
    <>
      <PageNav />
      <EduTab />
      <Warranty />
      <Troubleshooting />
      <WhatsappOTP />
    </>
  );
}

export default App;

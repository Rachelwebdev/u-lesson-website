import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import './App.css';
import PageNav from './components/Navbar';
import EduTab from './components/EduTab';
import Warranty from './components/Warranty';
import Troubleshooting from './components/Troubleshoot';
import WhatsappOTP from './components/Whatsapp';
import FAQs from './components/Faq';
import Contact from './components/Contact';
import Price from './components/Price';
import ExpCent from './components/ExpCent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <PageNav />
      <EduTab />
      <ExpCent />
      <Warranty />
      <Troubleshooting />
      <WhatsappOTP />
      <FAQs />
      <Contact />
      <Price />
      <Footer />
    </>
  );
}

export default App;

import Accordion from 'react-bootstrap/Accordion';
import '../styles/Faqs.css';

function FAQs() {
  return (
    <>
      <div className="faq-container">
        <h3 className="faq-heading">
          Frequently Asked Questions About Curriculum Team
        </h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What Curriculum Do We Use?</Accordion.Header>
            <Accordion.Body>
              PRE-RECORDED LIBRARY: A blend of British and Nigerian curricula.
              This is inclusive of Cambridge, IGCSE, OSSD, and others. LIVE
              LESSONS: This section contains an inclusive curriculum for all
              regions: West Africa, East Africa, South Africa, the United States
              of America, and the United Kingdom. Our content is tailored to
              each region's curriculum and helps students get ready for exams
              like the KCSE, NCE, WAEC, NECO, UTME, and others.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              You can add another question here!!!
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FAQs;

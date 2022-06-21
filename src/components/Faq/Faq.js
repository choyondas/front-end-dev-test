import React from 'react';
import './Faq.css';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <div className="faq">
            <div className="contentDiv">
                <div className="faqItem">

                    <h2>Frequently Asked Questions</h2>

                    <Accordion defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header>1. When can I mint a PPB?</Accordion.Header>
        <Accordion.Body>
          You can mint your PPB on our website any time after April X, 2022. If you’re
on the whitelist, you can mint your PPB 24 hours in advance of the public
sale.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Are all PPBs the same?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. How much does it cost to mint a PPB?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. How many PPBs are there?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>

            </div>
        </div>
    );
};

export default Faq;
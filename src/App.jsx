import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import Flowcard from './components/card1';


function App() {
  return (
    <>
      <div>
        <Navbar fluid rounded>
          <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Flowcard></Flowcard>
    </>
  );
}

export default App;

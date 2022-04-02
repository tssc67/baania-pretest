import React from 'react';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import lt from '../../assets/img/lt.png';
import gt from '../../assets/img/gt.png';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

const Footer: React.FunctionComponent = () => {
    return <Footer>
        
    </Footer>
}

export const Main: React.FunctionComponent = (props) => {
    const Header: React.FunctionComponent = () => {
        return <header>
            <table className='content-center'>
                <tbody>
                    <tr>
                        <td width='100%'>URL</td>
                        <td width='100%'>PORT</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><input placeholder='http://localhost' id='url' type='text'/></td>
                        {/* Could be number input but styling is not suitable */}
                        <td><input placeholder='8000' id='port' type='text'/></td>
                        <td><button className='blue'>CONNECT</button></td>
                    </tr>
                </tbody>
            </table>
        </header>
    }
    const houselist = [
        {
            "id": 190,
            "name": "cded312",
            "desc": "dasd34312",
            "price": "454.0",
            "post_code": "45412"
        },
        {
            "id": 189,
            "name": "cded3",
            "desc": "dasd343",
            "price": "454.0",
            "post_code": "454"
        },
        {
            "id": 187,
            "name": "ee",
            "desc": "3",
            "price": "2.0",
            "post_code": "1"
        },
    ]
    const Content: React.FunctionComponent = () => {
        return <div id='content' className='content-center'>
            <div id='content-header'>
                <div id='label'>HOUSE LIST</div>
                <button className='green'>CREATE</button>
            </div>
            <table id='houselist-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Post code</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {houselist.map((house) => <tbody key={house.id}>
                    <tr>
                        <td>{house.id}</td>
                        <td>{house.name}</td>
                        <td>{house.post_code}</td>
                        <td>{house.price}</td>
                        <td>
                            <div id='view-detail-btn'>VIEW DETAIL</div>
                            <div id='delete-btn'>DELETE</div>
                        </td>
                    </tr>
                </tbody>)}
            </table>
            <div id='rpp-selector'>
                Rows per page:
                <select>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                </select>
                1 - 5 of 8
                &nbsp;
                <img id='previous-page' src={lt}/>
                <img id='next-page' src={gt}/>
            </div>
        </div>
    }

    const Footer: React.FunctionComponent = () => {
        return <footer className='content-center'>
            {/* <select id="postcode-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
            </select> */}
<>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
</>
        </footer>
    }

    function Example() {
        const [show, setShow] = React.useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      

    React.useEffect(() => {
    }, []);

    return <React.Fragment>
        <Header/>
        <Content/>
        <Footer/>
        <Example/>
    </React.Fragment>
}
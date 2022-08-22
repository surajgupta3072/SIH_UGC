import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CaseList.css'
import MyVerticallyCenteredModal from './Modal.js'
import { useState }  from 'react';

function BasicExample() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='caselist'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>UGC Case 1</Card.Title>
        <Card.Text>
          It all started on the.... 
        </Card.Text>
        <Button onClick={() => setModalShow(true)} variant="primary">View Full Case</Button>
        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;
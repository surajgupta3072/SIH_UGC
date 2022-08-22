import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { useState } from "react";


function MyVerticallyCenteredModal(props) {
 

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="custom-modal-style"
      dialogClassName="modal-w"
      className="mobile_view"
      transparent={true}
    >
      <Modal.Body
        style={{ backgroundColor: "#020312", border: "1px solid #f26c4f" }}
      >
        <div style={{ padding: "7%", color: "#fff"}}>
          <p style={{ fontSize: "18px" }}>
            Here comes the entire description of the case clicked. Mapping must be done acordingly
          </p>
          
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

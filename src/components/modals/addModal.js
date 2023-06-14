import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { addAlcohol } from '../../service/backendCalls';
const ModalButton = ({modalText}) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 5000) + 1,
    name: '',
    price: '',
    concentration: '',
    size: '',
    img: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      id: '',
      name: '',
      price: '',
      concentration: '',
      size: '',
      img: ''
    });
    addAlcohol(formData)
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        {modalText}
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={formData.price} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="concentration">
              <Form.Label>Concentration</Form.Label>
              <Form.Control type="text" name="concentration" value={formData.concentration} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" name="size" value={formData.size} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="img">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name="img" value={formData.img} onChange={handleInputChange} />
            </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" type="reset" data-dismiss="modal">
                Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalButton;

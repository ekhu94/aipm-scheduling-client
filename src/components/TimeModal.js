import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const TimeModal = (props) => {
  const renderOpenTimeString = () => {
    const hours = props.hours > 0 ? `${props.hours} hour(s)` : '';
    const mins = props.mins > 0 ? `${props.mins} minute(s)` : '';
    if (!hours.length) return `${mins} available`;
    if (!mins.length) return `${hours} availabe`;
    return `${hours}, ${mins} available`;
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>
          Advanced IPM
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{renderOpenTimeString()}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='info' onClick={props.onHide}>
          Got It
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimeModal;

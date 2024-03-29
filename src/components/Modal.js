import React, {useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../AppContext';
import '../App.css';

function VerticallyCenteredModal(props) {
  const { error } = useContext(AppContext);
  console.log(error);
  let visibleError;
  
  if (error === 'error') {
    visibleError = "There are no lyrics available for this track";
  } else if (error === 'noTracks') {
    visibleError = "There are no tracks available for this album";
  } else if (error === "noArtists") {
    visibleError = "This artist is not listed, sorry";
  } else if (error === "noAlbums") {
    visibleError = "There are no albums for this artist";
  }

  return(
    <Modal
    {...props}
    size="lg" 
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h1 className="no-lyrics">Sorry!</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{visibleError}</p>
      </Modal.Body>
      <Modal.Footer className="modal-foot">
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal;

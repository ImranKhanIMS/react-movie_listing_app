import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {
    
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return(
        <div className="card text-center bg-secendary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path} />
                <div className="card-body">

                    <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <img className="card-img-top" src={API_IMG+poster_path} />
                            <h1>{title}</h1>
                            <h4>IMDB: {vote_average}</h4>
                            <h5>Released Date: {release_date}</h5>
                            <br /><br />
                            <h6>{overview}</h6>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button varient="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;
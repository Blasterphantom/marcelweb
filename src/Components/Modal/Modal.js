import React, { useState } from 'react';
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyModal() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={handleShow}>
                Launch demo modal
            </button>

            <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal Title</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            Your content here...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                            <button type="button" className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optionally, you might want to add a backdrop */}
            {show && <div className="modal-backdrop fade show"></div>}
        </>
    );
}

export default MyModal;

import React from "react";
import Modal from "react-modal";
import TicketList from "./TicketList";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function BookingHistory({ modalIsOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {/* <button className="bg-red-500 p-2 rounded" onClick={openModal}>
        Open Modal
      </button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button className="bg-amber-500 p-2 rounded" onClick={closeModal}>
          Close
        </button>
        <div>
          <TicketList />
        </div>
      </Modal>
    </div>
  );
}

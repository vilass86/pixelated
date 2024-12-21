import React from "react";
import "./MultiplierTableModal.css";

const MultiplierTableModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Multiplier Table</h2>
        <table className="multiplier-table">
          <thead>
            <tr>
              <th>Card Value</th>
              <th>High Bet Multiplier</th>
              <th>Low Bet Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>1.2x</td>
              <td>4.0x</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1.25x</td>
              <td>3.5x</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1.3x</td>
              <td>3.0x</td>
            </tr>
            <tr>
              <td>5</td>
              <td>1.35x</td>
              <td>2.5x</td>
            </tr>
            <tr>
              <td>6</td>
              <td>1.4x</td>
              <td>2.0x</td>
            </tr>
            <tr>
              <td>7</td>
              <td>1.5x</td>
              <td>1.7x</td>
            </tr>
            <tr>
              <td>8</td>
              <td>1.6x</td>
              <td>1.6x</td>
            </tr>
            <tr>
              <td>9</td>
              <td>1.8x</td>
              <td>1.6x</td>
            </tr>
            <tr>
              <td>10</td>
              <td>2.0x</td>
              <td>1.5x</td>
            </tr>
            <tr>
              <td>Jack</td>
              <td>2.5x</td>
              <td>1.4x</td>
            </tr>
            <tr>
              <td>Queen</td>
              <td>3.0x</td>
              <td>1.3x</td>
            </tr>
            <tr>
              <td>King</td>
              <td>4.0x</td>
              <td>1.2x</td>
            </tr>
            <tr>
              <td>Ace</td>
              <td>1.2x</td>
              <td>1.2x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MultiplierTableModal;

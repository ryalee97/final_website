import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


function openModal() {
  console.log(123);
  var modal = document.getElementById('simpleModal')
  modal.style.display = "block"
}

function closeModal() {
  console.log(123);
  var modal = document.getElementById('simpleModal')
  modal.style.display = "none"
}

export default class Test extends React.Component {  
  render() {
    return (
      <section id="test">
        <div className="test">
          <div id="simpleModal" className="modal">
            <div className = "modal-content">
              <span className="closeBtn" onClick={() => closeModal()}>&times;</span>
              <p>Hello...I am a modal</p>
            </div>
          </div> 
          <button id="modalBtn" className="button" onClick={() => openModal()}>Click Here</button>
        </div>
      </section>
    )
  }
}
import './css/controls.css';

function Controls(props) {
    return (
      <section id="controls" onClick={props.rotateEvent}>
        <div id="wheel">
          <span 
            id="menu-button"
            className="buttons" 
            style={ {top: 20} }
            onClick={props.handleMenuClick}
          >
            Menu
          </span>
          <img className="buttons" draggable="false"
            src="https://image.flaticon.com/icons/png/128/2404/2404395.png" alt="left" 
            style={ {left: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src="https://image.flaticon.com/icons/png/128/2404/2404393.png" alt="right" 
            style={ {right: 13, width: 40} }>
          </img>
          <img className="buttons" draggable="false"
            src="https://image.flaticon.com/icons/png/128/26/26810.png" alt="bottom" 
            style={ {bottom: 13, width: 30, height: 37} }>
          </img>
          {/* <img draggable="false"></img> */}
          <div id="ok-button" onClick={props.handleOk}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  
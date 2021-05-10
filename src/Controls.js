import './Controls.css'

function Controls() {
    return (
      <section id="controls">
        <div id="wheel">
          {/* menu, left, right, fwd */}
          <span className="buttons" style={ {top: 20} }>Menu</span>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404395.png" alt="left" style={ {left: 13, width: 40} }></img>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404393.png" alt="right" style={ {right: 13, width: 40} }></img>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/26/26810.png" alt="bottom" style={ {bottom: 13, width: 30, height: 37} }></img>
          <div id="ok-button">OK</div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  
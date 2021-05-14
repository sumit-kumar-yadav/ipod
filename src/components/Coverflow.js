import coverflowPic from './images/coverflow.png'

function Coverflow(props) {
    return (
      <div id="coverflow">
          <img style={style} src={coverflowPic} alt="Coverflow"></img>
      </div>
    );
  }
  
  export default Coverflow;
  
  const style = {
    width: 100.5 + '%',
    height: 185
  }
import albumsPic from './images/albums.png'

function Albums(props) {
  return (
    <div>
        <img style={style} src={albumsPic} alt="albumPic"></img>
    </div>
  );
}

export default Albums;

const style = {
  width: 100.5 + '%',
  height: 184
}
import gamesPic from './images/games.jpg'

function Games(props) {
  return (
    <div id="games">
        <img style={style} src={gamesPic} alt=""></img>
    </div>
  );
}

export default Games;

const style = {
  width: 100.5 + '%',
  height: 184
}
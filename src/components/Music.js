import MusicMenu from './MusicMenu';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Albums from './Albums';


function Music(props) {
  const {musicMenu, allSongs, artists, albums} = props.display;
  const activeItemInMenu = props.activeItemInMenu;
    return (
      <div className="display">
        {
          !musicMenu
            ?allSongs
              ?<AllSongs />
              :artists
                ?<Artists />
                :<Albums />
            :<MusicMenu activeItemInMenu={activeItemInMenu}/>
        }
      </div>
    );
  }
  
  export default Music;
  
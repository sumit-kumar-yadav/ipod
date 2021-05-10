import './Screen.css'

function Screen(props) {
  return (
    <section id="screen">
      <table id="side-menu">
        <tbody>
          <tr>
            <th>iPod</th>
          </tr>
          <tr>
            <td>Songs<i className="fas fa-chevron-right"></i></td> 
          </tr>
          <tr className="active">
            <td>Albums<i className="fas fa-chevron-right"></i></td>
          </tr>
          <tr>
          <td>Artists<i className="fas fa-chevron-right"></i></td>
          </tr>
          <tr>
          <td>Playlists<i className="fas fa-chevron-right"></i></td>
          </tr>
        </tbody>
      </table>
      {/* <div id="display">Display</div> */}
    </section>
  );
}

export default Screen;

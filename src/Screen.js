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
            <td>Coverflow<i className="fas fa-chevron-right"></i></td> 
          </tr>
          <tr className="active">
            <td>Music<i className="fas fa-chevron-right"></i></td>
          </tr>
          <tr>
          <td>Games<i className="fas fa-chevron-right"></i></td>
          </tr>
          <tr>
          <td>Settings<i className="fas fa-chevron-right"></i></td>
          </tr>
        </tbody>
      </table>
      <div id="display">Display</div>
    </section>
  );
}

export default Screen;

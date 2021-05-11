
function SideMenu(props) {
  return (
    <table id="side-menu">
        <tbody>
        <tr>
            <th>iPod</th>
        </tr>
        <tr data-option="coverflow">
            <td>Coverflow<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="music" className="active">
            <td>Music<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="games">
            <td>Games<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="settings">
            <td>Settings<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
  );
}

export default SideMenu;

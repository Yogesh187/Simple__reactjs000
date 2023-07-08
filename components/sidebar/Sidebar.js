import "./Sidebar.css";
import logo from "../../Assert/background.jpg";




const Sidebar =({sidebaropen,closeSidebar})=>{
    return(
        <div className={sidebaropen ? "sidebar-responsive": ""}id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>BOARD</h1>
                    <div>
                        <i
                          className="fa fa-times"
                          id="sidebarIcon"
                          onClick={() => closeSidebar()}
                          ></i>
                    </div>
                    <div className="sidebar__menu">
                        <div className="sidebar__link active_menu_link">
                            <i className=" fa fa-home"></i>
                            <a href="#">DASHBOARD1</a>
                        </div>
                        <h2>MNG</h2>
                        <div className="sidebar__link">
                             <i className="fa fa-user-secret"></i>
                             <a href="#">ADMIN MANAGEMENT</a>
                        </div>
                        <div className="sidebar__link">
                             <i className="fa fa-building-o"></i>
                             <a href="#">COMPANY MANAGEMENT</a>
                        </div>
                        <div className="sidebar__link">
                             <i className="fa fa-wrench"></i>
                             <a href="#">EMPLOYEE MANAGEMENT</a>
                        </div>
                        <div className="sidebar__link">
                             <i className="fa fa-archive"></i>
                             <a href="#">WAREHOUSE</a>
                        </div>
                        <div className="sidebar__link">
                             <i className="fa fa-handshake-o"></i>
                             <a href="#">CONTRACTS</a>
                        </div>
                        <h2>LEAVE</h2>
                        <div className="sidebar__link">
                            <i className="fa fa-question"></i>
                             <a href="#">REQUEST</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-sign-out"></i>
                             <a href="#">LEAVE POLICY</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-calender-check-o"></i>
                             <a href="#">SPECIAL DAYS</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-files-o"></i>
                             <a href="#">APPLY FOR LEAVE</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-money"></i>
                             <a href="#">PAYROLL</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-breifcase"></i>
                             <a href="#">PAYGRADE</a>
                        </div>
                        <div className="sidebar__logout">
                            <i className="fa fa-power-off"></i>
                             <a href="#">LOG-OUT</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
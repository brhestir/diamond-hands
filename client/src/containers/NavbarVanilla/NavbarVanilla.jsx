import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import diamondHands from "../../assets/images/diamondhands.png";
import GlobalContext from "../../context/GlobalContext";
import M from "materialize-css";
import sidenavInstances from "../../App.js";

const NavbarVanilla = () => {
  const { userObject, setUserObject, token, setToken } = useContext(
    GlobalContext
  );

	let history = useHistory();
	
	useEffect(() => {
		let sidenavElem = document.getElementById('app-sidenav');
		let sidenavInstances = M.Sidenav.init(sidenavElem, { draggable: true });
		sidenavInstances.open();
	}, []);

	const logoutBtnClickHandler = () => {
		setToken(null);
		setUserObject({_id: null});
		sessionStorage.clear("STARK_ETF_TOKEN");
		M.toast({html: 'Logged out successfully!'});
		history.push("/");
	}
	return (
    <>
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper teal darken-4" role="navigation" aria-label="main navigation">
						<Link className="brand-logo center" to="/"><img src={diamondHands} width="300" alt="Diamond Hands Logo"/></Link>
						<Link className="sidenav-trigger" data-target="app-sidenav" to="#"><i class="material-icons">menu</i></Link>
						<ul className="right hide-on-med-and-down">
							{ userObject._id && ( <li><Link to="/positions/add">Add Position</Link></li> )}
							{ userObject._id && ( <li><Link to="/positions/all">View Positions</Link></li> )}
							{ userObject._id && ( <li><Link to="/" onClick={logoutBtnClickHandler}>Logout</Link></li> )}
							{!userObject._id && ( <li><Link to="/signup">Sign up<i className="material-icons right">person_add</i></Link></li> )}
							{!userObject._id && ( <li><Link to="/login">Log in<i className="material-icons right">assignment_ind</i></Link></li> )}
						</ul>

					</div>
				</nav>
			</div>
			<ul class="sidenav" id="app-sidenav">
				{ userObject._id && ( <li><Link className="sidenav-close" to="/positions/add">Add Position</Link></li> )}
				{ userObject._id && ( <li><Link className="sidenav-close" to="/positions/all">View Positions</Link></li> )}
				{ userObject._id && ( <li><Link className="sidenav-close" to="/" onClick={logoutBtnClickHandler}>Logout</Link></li> )}
				{!userObject._id && ( <li><Link className="sidenav-close" to="/signup">Sign up<i className="material-icons right">person_add</i></Link></li> )}
				{!userObject._id && ( <li><Link className="sidenav-close" to="/login">Log in<i className="material-icons right">assignment_ind</i></Link></li> )}
			</ul>
		</>
  );
};

export default NavbarVanilla;

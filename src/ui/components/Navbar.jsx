import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const onLogout = () => {
        logout()

        navigate('/login', {
            replace: true
        })
    }


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Associations
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
                <div className="w-100  d-flex justify-content-md-end ">
                    <div className="navbar-nav">

                        <span className='nav-item nav-link text-danger'>
                            {user?.name}
                        </span>

                        <NavLink
                            className='nav-item nav-link'
                            id='logoutButton'
                            aria-label='logoutButton'
                            onClick={onLogout}
                        >
                        Logout
                        </NavLink>

                    </div>
                </div>
            </div>



        </nav>
    )
}
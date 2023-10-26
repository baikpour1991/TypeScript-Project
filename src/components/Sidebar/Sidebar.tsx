import { NavLink } from 'react-router-dom'
import { CutleryIcon, FavoriteActiveIcon } from '../../assets/icons'
import './sidebar.scss'

interface IIsNavLinkActive {
  isActive: boolean
}

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }: IIsNavLinkActive) => (isActive ? 'sidebar-nav-link' : '')}>
              <CutleryIcon />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/favorites"
              className={({ isActive }: IIsNavLinkActive) => (isActive ? 'sidebar-nav-link' : '')}
            >
              <FavoriteActiveIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

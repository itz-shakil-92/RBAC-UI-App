import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UsersIcon, KeyIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import useAuthStore from '../store/useAuthStore'
import { checkPermission } from '../utils/permissions'
import useStore from '../store/useStore'

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const { roles } = useStore()

  const navigation = [
    { 
      name: 'Users', 
      href: '/', 
      icon: UsersIcon,
      show: checkPermission(user?.role, 'users.view', roles)
    },
    { 
      name: 'Roles', 
      href: '/roles', 
      icon: KeyIcon,
      show: checkPermission(user?.role, 'roles.manage', roles)
    },
  ].filter(item => item.show)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen">
      <div className="flex items-center justify-center h-16 px-4">
        <h1 className="text-white font-bold text-xl">VRV Security RBAC</h1>
      </div>
      <div className="flex-1">
        <nav className="mt-5">
          <div className="space-y-1 px-2">
            {navigation.map((item) => {
              const current = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    ${current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                    group flex items-center px-2 py-2 text-sm font-medium rounded-md
                  `}
                >
                  <item.icon
                    className={`
                      ${current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'}
                      mr-3 flex-shrink-0 h-6 w-6
                    `}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
          <span>{user?.name}</span>
          <span className="bg-gray-700 px-2 py-1 rounded">{user?.role}</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          <ArrowRightOnRectangleIcon className="mr-3 h-6 w-6" />
          Logout
        </button>
      </div>
    </div>
  )
}
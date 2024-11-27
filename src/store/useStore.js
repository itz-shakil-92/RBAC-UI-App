import { create } from 'zustand'

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@vrvsecurity.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@vrvsecurity.com', role: 'manager', status: 'active' },
  { id: 3, name: 'Bob Wilson', email: 'bob@vrvsecurity.com', role: 'user', status: 'inactive' },
]

const initialRoles = [
  {
    id: 'admin',
    name: 'Administrator',
    permissions: ['users.view', 'users.create', 'users.edit', 'users.delete', 'roles.manage'],
  },
  {
    id: 'manager',
    name: 'Manager',
    permissions: ['users.view', 'users.create', 'users.edit'],
  },
  {
    id: 'user',
    name: 'User',
    permissions: ['users.view'],
  },
]

const useStore = create((set) => ({
  users: initialUsers,
  roles: initialRoles,
  addUser: (user) => set((state) => ({ users: [...state.users, { ...user, id: state.users.length + 1 }] })),
  updateUser: (updatedUser) => set((state) => ({
    users: state.users.map((user) => user.id === updatedUser.id ? updatedUser : user)
  })),
  deleteUser: (userId) => set((state) => ({
    users: state.users.filter((user) => user.id !== userId)
  })),
  addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (updatedRole) => set((state) => ({
    roles: state.roles.map((role) => role.id === updatedRole.id ? updatedRole : role)
  })),
  deleteRole: (roleId) => set((state) => ({
    roles: state.roles.filter((role) => role.id !== roleId)
  })),
}))

export default useStore
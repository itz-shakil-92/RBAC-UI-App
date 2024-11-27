export const checkPermission = (userRole, requiredPermission, roles) => {
  const role = roles.find(r => r.id === userRole)
  return role?.permissions.includes(requiredPermission) || false
}

export const hasAdminAccess = (userRole) => userRole === 'admin'
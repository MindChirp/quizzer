import { ROUTES } from '@/router'

/**
 * This function checks if the header should be hidden for å given route
 */
export const ignoreHeader = (route: string) => {
  const ignoreRoutes = [
    ROUTES.LOGIN.path,
    ROUTES.REGISTER.path,
  ]

  return ignoreRoutes.includes(route);
}
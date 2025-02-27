export const navigationMap = {
    Base: '/',
    Home:"/home"
  } as const
  
  export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
  
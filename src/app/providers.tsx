'use client'

import { UserContextProvider } from '@/context/UserContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
      <UserContextProvider>
        {children}
      </UserContextProvider>
  )
}
'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const authRoutes = ['/signin', '/register', '/forgot-password', '/reset-password', '/signup']
  const hideLayout = authRoutes.includes(pathname)

  if (hideLayout) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
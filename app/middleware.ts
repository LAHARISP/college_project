import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export function middleware(request: NextRequest) {
  // Check if user is authenticated and is HOD
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true'
  const userRole = request.cookies.get('userRole')?.value

  if (
    request.nextUrl.pathname.startsWith('/student-mentor-allocation')
    (!isAuthenticated || userRole !== 'HOD')
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/student-mentor-allocation',
}
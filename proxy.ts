import { NextResponse, type NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/players", "/onboarding"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const publicRoute = ["/login"];
  const isPublicRoute = publicRoute.some((route) => pathname.startsWith(route));
  const res = NextResponse.next();
  // Add no-cache headers (prevents back-button access)
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");
  // If user is logged in and tries to access login page, redirect to onboarding
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/players", request.url));
  }
  // If user is NOT logged in and tries to access protected route, redirect to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return res;
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

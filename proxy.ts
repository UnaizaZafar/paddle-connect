import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value; // "PLAYER" | "SUPER_ADMIN"
  const onboardingDone = request.cookies.get("onboarded")?.value === "true";

  const { pathname } = request.nextUrl;
  const PUBLIC_ROUTES = ["/login", "/admin-login", "/sign-up"];

  const USER_PROTECTED = ["/onboarding", "/players"];

  const ADMIN_PROTECTED = ["/invite-gym-owner", "/dashboard"];

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  const isUserProtected = USER_PROTECTED.some((route) =>
    pathname.startsWith(route)
  );

  const isAdminProtected = ADMIN_PROTECTED.some((route) =>
    pathname.startsWith(route)
  );

  const res = NextResponse.next();

  // ✅ BLOCK BACK BUTTON CACHE
  res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");

  // ===============================
  // 🔐 AUTH PROTECTION
  // ===============================

  // ❌ Not logged in → block all protected routes
  if (!token && (isUserProtected || isAdminProtected)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Logged in → block all login/signup pages
  if (token && isPublicRoute) {
    if (role === "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/invite-gym-owner", request.url));
    }
    return NextResponse.redirect(new URL("/players", request.url));
  }

  // ===============================
  // 👤 USER FLOW CONTROL
  // ===============================

  // ✅ User must complete onboarding before players
  if (role === "PLAYER" && pathname.startsWith("/players") && !onboardingDone) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  // ✅ User must NOT access onboarding again if completed
  if (role === "PLAYER" && pathname.startsWith("/onboarding") && onboardingDone) {
    return NextResponse.redirect(new URL("/players", request.url));
  }

  // ===============================
  // 👑 ADMIN FLOW CONTROL
  // ===============================

  // ✅ Admin must go to invite-gym-owner first
  if (
    role === "SUPER_ADMIN" &&
    !pathname.startsWith("/invite-gym-owner") &&
    !pathname.startsWith("/admin-login")
  ) {
    return NextResponse.redirect(new URL("/invite-gym-owner", request.url));
  }

  return res;
}

// ✅ MATCH ALL ROUTES SAFELY
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

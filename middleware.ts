// import type { NextRequest } from "next/server";
import { NextResponse, NextRequest } from "next/server";

// import jwt from "jsonwebtoken";

// import { BASE_URL, REFRESH_TOKEN, SESSION, USER_ID } from "@/constants";

// function isTokenValid(token: string): boolean {
//   try {
//     const decoded = jwt.decode(token) as { exp: number } | null;
//     if (!decoded || !decoded.exp) {
//       return false;
//     }

//     const currentTime = Math.floor(Date.now() / 1000);
//     const bufferTime = 5 * 60;

//     return decoded.exp > currentTime + bufferTime;
//   } catch {
//     return false;
//   }
// }

// async function refreshToken(refreshTokenValue: string): Promise<{
//   success: boolean;
//   tokens?: {
//     accessToken: string;
//     refreshToken: string;
//     userId: string;
//   };
// }> {
//   try {
//     const response = await fetch(`${BASE_URL}/users/refresh-token`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         refreshToken: refreshTokenValue,
//       }),
//     });

//     if (!response.ok) {
//       console.error(
//         "Refresh token request failed:",
//         response.status,
//         response.statusText
//       );
//       return { success: false };
//     }

//     const data = await response.json();

//     // TODO: Remove this
//     console.log(data, "Refresh token response");

//     if (!data) {
//       console.error("No data received from refresh token endpoint");
//       return { success: false };
//     }

//     return {
//       success: true,
//       tokens: {
//         accessToken: data.data?.accessToken || data.access_token || data.token,
//         refreshToken: data.data?.refreshToken || data.refresh_token,
//         userId: data.data?.userId || data.user_id || data.id,
//       },
//     };
//   } catch (error) {
//     console.error("Token refresh failed:", error);
//     return { success: false };
//   }
// }

export async function middleware(request: NextRequest) {
  //   const { pathname } = request.nextUrl;
  //   let token = request.cookies.get(SESSION)?.value;
  //   const refreshTokenValue = request.cookies.get(REFRESH_TOKEN)?.value || "";

  //   // Define route patterns
  //   const isPublicPath = pathname.startsWith("/login");
  //   const isProtectedPath = ["/"].some(
  //     (path) => pathname === path || pathname.startsWith(path + "/")
  //   );

  //   // If not a route we care about, continue
  //   if (!isPublicPath && !isProtectedPath) {
  //     return NextResponse.next();
  //   }

  //   let hasValidToken = token && isTokenValid(token);

  //   if (!hasValidToken && refreshTokenValue && isProtectedPath) {
  //     const refreshResult = await refreshToken(refreshTokenValue);
  //     if (refreshResult.success && refreshResult.tokens) {
  //       token = refreshResult.tokens.accessToken;
  //       hasValidToken = true;
  //       const response = NextResponse.next();

  //       response.cookies.set(SESSION, refreshResult.tokens.accessToken, {
  //         secure: true,
  //         sameSite: "strict",
  //         path: "/",
  //       });
  //       response.cookies.set(REFRESH_TOKEN, refreshResult.tokens.refreshToken, {
  //         secure: true,
  //         sameSite: "strict",
  //         path: "/",
  //       });
  //       response.cookies.set(USER_ID, refreshResult.tokens.userId, {
  //         secure: true,
  //         sameSite: "strict",
  //         path: "/",
  //       });
  //       return response;
  //     }
  //   }

  //   // Handle authenticated users trying to access login
  //   if (hasValidToken && isPublicPath) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   // Handle unauthenticated users trying to access protected routes
  //   if (!hasValidToken && isProtectedPath) {
  //     const response = NextResponse.redirect(new URL("/login", request.url));

  //     // Clear invalid cookies
  //     response.cookies.delete(SESSION);
  //     response.cookies.delete(REFRESH_TOKEN);
  //     response.cookies.delete(USER_ID);

  //     return response;
  //   }

  return NextResponse.next();
}

// export const config = {
//   matcher: [
//     "/",
//     "/signin",
//     "/signup",
//
//   ],
// };

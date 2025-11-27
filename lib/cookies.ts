/**
 * Cookie utility functions for storing and retrieving data
 */

/**
 * Set a cookie with the given name, value, and options
 */
export function setCookie(
  name: string,
  value: string,
  options: {
    maxAge?: number; // in seconds
    // path?: string;
    // sameSite?: "Strict" | "Lax" | "None";
    // secure?: boolean;
  } = {}
) {
  //   const { maxAge, path = "/", sameSite = "Lax", secure = false } = options;
  const { maxAge } = options;

  let cookieString = `${name}=${encodeURIComponent(value)}`;

  if (maxAge) {
    cookieString += `; max-age=${maxAge}`;
  }

//   if (secure) {
//     cookieString += `; Secure`;
//   }

  document.cookie = cookieString;
}

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
    }
  }

  return null;
}

/**
 * Delete a cookie by name
 */
export function deleteCookie(name: string, path: string = "/") {
  document.cookie = `${name}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

/**
 * Set a cookie with JSON data
 */
export function setCookieJSON<T>(
  name: string,
  data: T,
  options?: Parameters<typeof setCookie>[2]
) {
  const jsonString = JSON.stringify(data);
  setCookie(name, jsonString, options);
}

/**
 * Get and parse JSON data from a cookie
 */
export function getCookieJSON<T>(name: string): T | null {
  const cookieValue = getCookie(name);
  if (!cookieValue) return null;

  try {
    return JSON.parse(cookieValue) as T;
  } catch (error) {
    console.error(`Error parsing cookie ${name}:`, error);
    return null;
  }
}

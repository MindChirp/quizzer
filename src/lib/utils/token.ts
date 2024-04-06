import { OpenAPI, TokenControllerService } from '@/lib/api'

const exprityTimeMinutes = 9;

function tokenNeedsRefresh(token:string) {
  if (!token) return true;

  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));

    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = decoded.exp;

    // If its less then 3 minutes until token expires
    return currentTime + exprityTimeMinutes*60 >= expirationTime;

  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
}

export async function refreshTokenIfNeeded(token: string) {
  if (tokenNeedsRefresh(token)) {
    try {
      // Assuming refreshToken now returns a promise that resolves to the new tokens
      const response = await TokenControllerService.refreshToken(token);
      const newAccessToken = response.accessToken;

      sessionStorage.setItem('accessToken', newAccessToken as string);
      OpenAPI.TOKEN = newAccessToken;

      console.log("Token refreshed successfully.");
    } catch (err) {
      console.error("Error refreshing token:", err);
    }
  } else {
    console.log("Token does not need to be refreshed.");
  }
}





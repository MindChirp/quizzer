import { TokenControllerService } from '@/lib/api'
import { signOut } from '@/lib/utils/user.ts'
import toaster from '@/stores/toaster.ts'

// Refresh token if there is at most N minutes remaining
const expiryTimeMinutes = 1;

function tokenNeedsRefresh(token:string) {
  if (!token) return true;

  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));

    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = decoded.exp;


    // If its less then 3 minutes until token expires
    return (currentTime + expiryTimeMinutes*60) >= expirationTime;

  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
}

export async function refreshTokenIfNeeded(token: string) {
  if (tokenNeedsRefresh(token)) {
    try {
      // Assuming refreshToken now returns a promise that resolves to the new tokens
      const response = await TokenControllerService.refreshAccessToken({
        token
      });
      const newAccessToken = response.token;
      sessionStorage.setItem('accessToken', newAccessToken as string);
      console.log("Token refreshed successfully.");
      return true;
    } catch (err) {
      signOut();
      return false;
    }
  } else {
    console.log("Token does not need to be refreshed.");
    return true;
  }
}





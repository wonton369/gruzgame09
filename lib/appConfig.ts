/** Base App dashboard → App ID (meta base:app_id) */
export const BASE_APP_ID = process.env.NEXT_PUBLIC_BASE_APP_ID?.trim() ?? "";

export const APP_DISPLAY_NAME = "Forest Hedgehog Tap";

export function getWalletConnectProjectId(): string {
  return process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID?.trim() ?? "";
}

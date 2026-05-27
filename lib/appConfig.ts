/** Base.dev app verification — meta name="base:app_id" in app/layout.tsx */
export const BASE_APP_ID =
  process.env.NEXT_PUBLIC_BASE_APP_ID?.trim() || "6a16bbcb01ed3a8819166e42";

export const APP_DISPLAY_NAME = "Forest Hedgehog Tap";

export function getWalletConnectProjectId(): string {
  return process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID?.trim() ?? "";
}

import { APP_DISPLAY_NAME } from "./lib/appConfig";
import { getSiteUrl } from "./lib/siteUrl";

const ROOT_URL = getSiteUrl();

export const farcasterConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  miniapp: {
    version: "1",
    name: APP_DISPLAY_NAME,
    subtitle: "Forest tap on Base",
    description:
      "Tap the forest hedgehog, sync taps onchain, check in every 2 minutes, and climb the woodland leaderboard on Base.",
    imageUrl: `${ROOT_URL}/hedgehog.svg`,
    buttonTitle: "Tap Hedgehog",
    screenshotUrls: [`${ROOT_URL}/hedgehog.svg`],
    iconUrl: `${ROOT_URL}/forest-icon.svg`,
    splashImageUrl: `${ROOT_URL}/hedgehog.svg`,
    splashBackgroundColor: "#0d1f12",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["game", "tap", "forest", "hedgehog", "leaderboard", "onchain", "base"],
    heroImageUrl: `${ROOT_URL}/hedgehog.svg`,
    tagline: "Tap. Check in. Grow your streak.",
    ogTitle: APP_DISPLAY_NAME,
    ogDescription: "Forest tap game for Base App.",
    ogImageUrl: `${ROOT_URL}/hedgehog.svg`,
    castShareUrl: ROOT_URL,
  },
} as const;

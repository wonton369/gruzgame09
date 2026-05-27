"use client";

import sdk from "@farcaster/miniapp-sdk";
import { farcasterConfig } from "../../farcaster.config";
import { getSiteUrl } from "@/lib/siteUrl";
import styles from "./page.module.css";

export default function Success() {
  const handleShare = async () => {
    try {
      const text = `Тапаю ежа в ${farcasterConfig.miniapp.name}! `;
      const result = await sdk.actions.composeCast({
        text,
        embeds: [getSiteUrl()],
      });

      if (result?.cast) {
        console.log("Cast created:", result.cast.hash);
      }
    } catch (error) {
      console.error("Error sharing cast:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.successMessage}>
          <div className={styles.checkmark}>
            <div className={styles.checkmarkCircle}>
              <div className={styles.checkmarkStem}></div>
              <div className={styles.checkmarkKick}></div>
            </div>
          </div>

          <h1 className={styles.title}>{farcasterConfig.miniapp.name}</h1>

          <p className={styles.subtitle}>Транзакция отправлена. Продолжай тапать и делай check-in!</p>

          <button onClick={() => void handleShare()} className={styles.shareButton} type="button">
            Поделиться
          </button>
        </div>
      </div>
    </div>
  );
}

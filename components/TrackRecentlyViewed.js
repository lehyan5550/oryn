"use client";

import { useEffect } from "react";

const STORAGE_KEY = "oryn_recently_viewed_v1";
const MAX_ITEMS = 8;

export default function TrackRecentlyViewed({ productId }) {
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const ids = raw ? JSON.parse(raw) : [];
      const next = [productId, ...ids.filter((id) => id !== productId)].slice(
        0,
        MAX_ITEMS
      );
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore malformed storage
    }
  }, [productId]);

  return null;
}

export function readRecentlyViewed() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

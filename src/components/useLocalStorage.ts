import { useState } from "react";

function readValue<T>(key: string, initialValue: T): T {
  if (typeof window === "undefined") {
    return initialValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item === null ? initialValue : (JSON.parse(item) as T);
  } catch {
    return initialValue;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => readValue(key, initialValue));

  const setValue = (value: T | ((prev: T) => T)) => {
    setStoredValue((prev) => {
      const next = value instanceof Function ? value(prev) : value;

      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // localStorage unavailable (e.g. private browsing) — keep in-memory value only
      }

      return next;
    });
  };

  return [storedValue, setValue];
}

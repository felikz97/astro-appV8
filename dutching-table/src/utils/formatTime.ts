// src/utils/formatTime.ts
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }) + 'HRS';
};
// This formats the timestamp to a 24-hour time format with "HRS" suffix
// Example: If timestamp is 1672531199000, it will return "14:30HRS" for 2:30 PM
// Adjust the locale and options as needed for different formats or locales
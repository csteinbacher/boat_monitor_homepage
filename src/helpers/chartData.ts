import { ChartData } from "@/components/BoatChart";
import type {
  ThingSpeakResponse,
  ThingSpeakFeed,
} from "@/types/thingSpeakTypes";

export const createChartDataFromKey = (
  key: string,
  data?: ThingSpeakResponse
): ChartData[] => {
  if (!data) {
    return [];
  }

  // Check if the key exists in the channel object
  const fieldKey = Object.keys(data.channel).find(
    (field) =>
      (data.channel as unknown as Record<string, string | undefined>)[field] ===
      key
  );

  if (!fieldKey) {
    console.error(`Key "${key}" not found in channel fields`);
    return [];
  }

  // Find the corresponding field (e.g., field1, field2)
  const field = Object.keys(data.channel).find(
    (field) =>
      (data.channel as unknown as Record<string, string | undefined>)[field] ===
      key
  );

  if (!field) {
    console.error(`Field for key "${key}" not found`);
    return [];
  }

  // Create chart data from the feeds
  return data.feeds.map((feed: ThingSpeakFeed) => ({
    date: new Date(feed.created_at),
    value: parseFloat(feed[field as keyof ThingSpeakFeed] as string),
  }));
};

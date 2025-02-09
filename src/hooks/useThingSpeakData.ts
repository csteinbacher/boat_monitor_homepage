import { useQuery } from "@tanstack/react-query";
import thingSpeakClient from "@/api/thingSpeakClient";
import type { ThingSpeakResponse } from "@/types/thingSpeakTypes";

interface FetchParams {
  channelId: number;
  start?: string;
  end?: string;
}

const DEFAULT_STALE_TIME = 1000 * 60;

const fetchThingSpeakData = async ({
  channelId,
  start,
  end,
}: FetchParams): Promise<ThingSpeakResponse> => {
  const response = await thingSpeakClient.get(`/${channelId}/feeds.json`, {
    params: { start, end },
  });
  return response.data;
};

export const useThingSpeakData = (
  channelId: number,
  start?: string,
  end?: string
) => {
  return useQuery({
    queryKey: ["thingSpeakData", channelId, start, end],
    queryFn: () => fetchThingSpeakData({ channelId, start, end }),
    staleTime: DEFAULT_STALE_TIME,
    placeholderData: (prev) => prev,
  });
};

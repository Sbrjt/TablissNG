import { Activity } from "react-activity-calendar";

const url = "https://alfa-leetcode-api.onrender.com";
const MAX_LEVEL = 4;

export const fetchCalendar = async (userId: string) => {
  try {
    const res = await fetch(`${url}/${userId}/calendar`);

    if (!res.ok) return null;

    const json = await res.json();
    const calendar = JSON.parse(json.submissionCalendar);

    if (Object.keys(calendar).length === 0) return null;

    const entries: Activity[] = [];

    for (const timestamp in calendar) {
      const date = new Date(Number(timestamp) * 1000);
      const count: number = calendar[timestamp];

      // Levels are for Heatmap intensity
      // Available levels: 1, 2, 3, 4
      // Values above 4 are clamped to 4
      const level = Math.min(count, MAX_LEVEL);

      entries.push({
        date: date.toLocaleDateString("en-CA"),
        count,
        level,
      });
    }

    return entries;
  } catch (e) {
    console.error(e);
    return null;
  }
};

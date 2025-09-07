import { meetings } from "../../data/meetings.json";

export function filterMeetings() {
  const upcomingMeetings = [];
  const previousMeetings = [];

  const currentDate = new Date();

  for (const item of meetings) {
    const date = new Date(item.date.replaceAll(/(st|nd|rd|th),/gu, ""));

    if (date >= currentDate) {
      upcomingMeetings.push(item);
    } else {
      previousMeetings.push(item);
    }
  }

  return { upcomingMeetings, previousMeetings };
}

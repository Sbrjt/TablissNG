import { defineMessages } from "react-intl";

export const monthMessages = defineMessages({
  jan: {
    id: "plugins.leetcode.month.jan",
    defaultMessage: "Jan",
    description: "January short name for leetcode calendar",
  },
  feb: {
    id: "plugins.leetcode.month.feb",
    defaultMessage: "Feb",
    description: "February short name for leetcode calendar",
  },
  mar: {
    id: "plugins.leetcode.month.mar",
    defaultMessage: "Mar",
    description: "March short name for leetcode calendar",
  },
  apr: {
    id: "plugins.leetcode.month.apr",
    defaultMessage: "Apr",
    description: "April short name for leetcode calendar",
  },
  may: {
    id: "plugins.leetcode.month.may",
    defaultMessage: "May",
    description: "May short name for leetcode calendar",
  },
  jun: {
    id: "plugins.leetcode.month.jun",
    defaultMessage: "Jun",
    description: "June short name for leetcode calendar",
  },
  jul: {
    id: "plugins.leetcode.month.jul",
    defaultMessage: "Jul",
    description: "July short name for leetcode calendar",
  },
  aug: {
    id: "plugins.leetcode.month.aug",
    defaultMessage: "Aug",
    description: "August short name for leetcode calendar",
  },
  sep: {
    id: "plugins.leetcode.month.sep",
    defaultMessage: "Sep",
    description: "September short name for leetcode calendar",
  },
  oct: {
    id: "plugins.leetcode.month.oct",
    defaultMessage: "Oct",
    description: "October short name for leetcode calendar",
  },
  nov: {
    id: "plugins.leetcode.month.nov",
    defaultMessage: "Nov",
    description: "November short name for leetcode calendar",
  },
  dec: {
    id: "plugins.leetcode.month.dec",
    defaultMessage: "Dec",
    description: "December short name for leetcode calendar",
  },
});

export const weekdayMessages = defineMessages({
  sun: {
    id: "plugins.leetcode.weekday.sun",
    defaultMessage: "Sun",
    description: "Sunday short name for leetcode calendar",
  },
  mon: {
    id: "plugins.leetcode.weekday.mon",
    defaultMessage: "Mon",
    description: "Monday short name for leetcode calendar",
  },
  tue: {
    id: "plugins.leetcode.weekday.tue",
    defaultMessage: "Tue",
    description: "Tuesday short name for leetcode calendar",
  },
  wed: {
    id: "plugins.leetcode.weekday.wed",
    defaultMessage: "Wed",
    description: "Wednesday short name for leetcode calendar",
  },
  thu: {
    id: "plugins.leetcode.weekday.thu",
    defaultMessage: "Thu",
    description: "Thursday short name for leetcode calendar",
  },
  fri: {
    id: "plugins.leetcode.weekday.fri",
    defaultMessage: "Fri",
    description: "Friday short name for leetcode calendar",
  },
  sat: {
    id: "plugins.leetcode.weekday.sat",
    defaultMessage: "Sat",
    description: "Saturday short name for leetcode calendar",
  },
});

export const legendMessages = defineMessages({
  less: {
    id: "plugins.leetcode.legend.less",
    defaultMessage: "Less",
    description: "Less text for leetcode calendar legend",
  },
  more: {
    id: "plugins.leetcode.legend.more",
    defaultMessage: "More",
    description: "More text for leetcode calendar legend",
  },
});

export const messages = defineMessages({
  totalCount: {
    id: "plugins.leetcode.totalCount",
    defaultMessage: "[count] submissions in [year]",
    description: "Total count text for leetcode calendar",
  },
});

export const tooltipMessages = defineMessages({
  activity: {
    id: "plugins.leetcode.tooltip.activity",
    defaultMessage: "{count, number} submissions on {date}",
    description: "Tooltip text showing submission count on a specific date",
  },
  noActivity: {
    id: "plugins.leetcode.tooltip.noActivity",
    defaultMessage: "No submissions on {date}",
    description: "Tooltip text for days with no submissions",
  },
});

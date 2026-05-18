export const formatMyDate = (date) => {
  if (!date) return null;

  const d = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(d);
};

export const formatDuration = (duration) => {
  if (duration == null) return null;

  const hour = Math.floor(duration / 3600);
  const min = Math.floor((duration % 3600) / 60);
  const sec = Math.floor(duration % 60);

  const pad = (n) => String(n).padStart(2, "0");

  return `${pad(hour)}:${pad(min)}:${pad(sec)}`;
};

export const formatCount = (num) => {
  if (num < 10) return `${num}+`;

  if (num < 100) {
    return `${Math.floor(num / 10) * 10}+`;
  }

  if (num < 1000) {
    return `${Math.floor(num / 100) * 100}+`;
  }

  if (num < 1000000) {
    return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K+`;
  }

  if (num < 1000000000) {
    return `${(num / 1000000).toFixed(num >= 10000000 ? 0 : 1)}M+`;
  }

  return `${(num / 1000000000).toFixed(1)}B+`;
};

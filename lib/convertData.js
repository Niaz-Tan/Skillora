export const replaceMongoIdInArray = (array) => {
  return array.map(({ _id, ...rest }) => ({
    id: _id.toString(),
    ...rest,
  }));
};

export const replaceMongoIdInObj = (obj) => {
  if (!obj || typeof obj !== "object") return null;

  const { _id, ...rest } = obj;
  return {
    id: _id.toString(),
    ...rest,
  };
};

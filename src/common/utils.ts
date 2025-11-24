const epoch_transformer = {
  to: (date: Date | null) => {
    if (date === null) {
      return null;
    }
    return date.getTime();
  },
  from: (epoch: number | null) => {
    if (epoch === null) {
      return null;
    }
    return new Date(epoch);
  },
};

export { epoch_transformer };

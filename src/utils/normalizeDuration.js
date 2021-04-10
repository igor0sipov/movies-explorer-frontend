const normalizeDuration = (duration) => {
  if (duration < 60) {
    return `${duration} минут`;
  } else {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}м`;
  }
};

export default normalizeDuration;

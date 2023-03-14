export const convertTimeAndDate = (created_at) => {
    const date = new Date(created_at);
    return `at ${date.toLocaleTimeString()} on ${date.toDateString()}`;
  };
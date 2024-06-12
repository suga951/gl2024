const requestTime = (_req, res, next) => {
  const start = process.hrtime();
  res.on("finish", () => {
    const diff = process.hrtime(start);
    const elapsedTime = diff[0] * 1e3 + diff[1] / 1e6;
    console.log("##############################");
    console.log(`Request took ${elapsedTime}ms`);
    console.log("##############################");
  });
  next();
};

export default requestTime;

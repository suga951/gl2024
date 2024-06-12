const sayHello = (_req, _res, next) => {
  console.log("This middleware is running!");
  next();
};

export default sayHello;

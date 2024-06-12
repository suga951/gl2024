import fs from "fs";
const requestsMade = (req, res, next) => {
  let methodDetails = `HTTP method: ${req.method} `;
  let dateDetails = `Request was made on: ${new Date()}`;
  let statusDetails = `The response status is: ${res.statusCode}`;

  const requestDetails = {
    method: methodDetails,
    date: dateDetails,
    status: statusDetails,
  };

  const logFile = (data) => {
    const parsedData = JSON.stringify(data);
    try {
      fs.appendFileSync(
        "./Middlewares/requests.txt",
        parsedData + "\n",
        "utf8",
      );
    } catch (err) {
      console.error(err);
    }
  };
  console.log(requestDetails.method);
  logFile(requestDetails);
  next();
};

export default requestsMade;

import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "public/views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { welcome: "Hello, World!" });
});

app.use((req, res, next) => {
  res.status(404).render("404", { notFound: "404 Page Not Found :(" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

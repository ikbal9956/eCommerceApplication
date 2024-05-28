import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`server listen at PORT ${process.env.PORT}`);
});

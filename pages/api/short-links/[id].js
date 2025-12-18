export default function handler(req, res) {
  // res.send("안녕 API");
  // res.send(req.query);
  // res.send(req.body);
  // res.send(req.cookies);
  // res.send(req.method);

  switch (req.method) {
    case "PATCH":
      res.send("PATCH 입니다.");
      break;

    case "GET":
      res.send("조회");
      break;
  }
}

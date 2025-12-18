import mongoose from "mongoose";
import dbConnect from "../../../db/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  console.log(mongoose.connection.readyState);
  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org",
      });
      break;

    case "GET":
      res.send([
        {
          id: "abc",
          title: "위키피디아 Next.js",
          url: "https://en.wikipedia.org",
        },
        {
          id: "def",
          title: "코드잇 자유게시판",
          url: "https://codeit.kr",
        },
        {
          id: "ghi",
          title: "코드잇 질문답변",
          url: "https://codeit.kr",
        },
      ]);
      break;

    default:
      res.status(404).send();
  }
}

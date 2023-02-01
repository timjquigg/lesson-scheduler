import { getUser } from "lib/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const user = await getUser(email);

    res.status(201).send(user);
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.$connect();
  const { email, teamName, username, name } = req.body;
  await prisma.user.create({
    data: {
      email,
      teamName,
      username,
      name,
    },
  });
  res.status(201).json({ message: "Thanks for subscribing!" });
}

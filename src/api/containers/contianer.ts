import { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // 임시 데이터 생성
  const container = {
    id,
    name: faker.commerce.productName(),
    status: faker.helpers.arrayElement(["running", "stopped", "paused"]),
    createdAt: faker.date.past().toISOString(),
    imageName: faker.system.fileName(),
  };

  res.status(200).json(container);
}

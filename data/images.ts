import { DockerImageDetail } from "../types/images";

export type DockerImage = {
  id: string;
  name: string;
  tag: string;
};

export const IMAGE_DATA: DockerImageDetail = {
  id: "image 1",
  name: "nginx",
  tag: "latest",
  createdAt: "2021-07-01T12:34:56Z",
  size: "133MB",
};

export const IMAGES = [
  {
    id: "1",
    name: "nginx",
    tag: "latest",
    description: "Official build of Nginx.",
  },
  {
    id: "2",
    name: "node",
    tag: "14-alpine",
    description: "Node.js 14 on Alpine Linux.",
  },
  {
    id: "3",
    name: "redis",
    tag: "6.2",
    description: "Redis is an in-memory database that persists on disk.",
  },
  {
    id: "4",
    name: "mysql",
    tag: "8.0",
    description: "MySQL is a widely used, open-source relational database.",
  },
  {
    id: "5",
    name: "mongo",
    tag: "4.4",
    description:
      "MongoDB is a document database with the scalability and flexibility.",
  },
];

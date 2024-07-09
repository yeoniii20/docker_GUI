import { DockerImageDetail } from "../types/images";

export type DockerImage = {
  id: string;
  name: string;
  tag: string;
};

export const IMAGE_DATA: DockerImageDetail[] = [
  {
    id: "1",
    name: "nginx",
    tag: "latest",
    description: "Official build of Nginx.",
    createdAt: "2023-07-08",
    size: "133MB",
    repository: "nginx",
    dockerVersion: "20.10.7",
    author: "NGINX, Inc.",
    labels: {
      maintainer: "NGINX Docker Maintainers <docker-maint@nginx.com>",
    },
    architecture: "amd64",
    os: "linux",
    ports: ["80", "443"],
    environmentVariables: {
      NGINX_VERSION: "1.21.0",
      NJS_VERSION: "0.5.3",
      PKG_RELEASE: "1",
    },
    volumes: ["/var/cache/nginx"],
  },
];

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

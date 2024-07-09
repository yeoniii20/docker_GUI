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

export const IMAGES: DockerImage[] = [
  { id: "1", name: "nginx", tag: "latest" },
  { id: "2", name: "node", tag: "14-alpine" },
  { id: "3", name: "redis", tag: "6.2" },
];

import { ContainerDetailTypes } from "../types/containers";

export const CONTAINER_DETAIL_DATA: ContainerDetailTypes = {
  id: "example_id",
  name: "example_container",
  status: "running",
  createdAt: "2023-07-09T12:00:00Z",
  imageName: "example_image",
  ports: ["80:80", "443:443"],
  mounts: ["/var/www/html", "/var/log/nginx"],
  env: {
    NODE_ENV: "production",
    PORT: "80",
  },
  logs: "Container started\nListening on port 80\nError: Something went wrong",
};

export const CONTAINER_LIST_DATA = [
  { id: "1", name: "web", status: "running" },
  { id: "2", name: "db", status: "stopped" },
];

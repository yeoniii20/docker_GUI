import { ContainerDetailTypes } from "../types/containers";

export const CONTAINER_DETAIL_DATA: ContainerDetailTypes = {
  id: "example_id",
  name: "example_container",
  status: "running",
  createdAt: "2023-07-09T12:00:00Z",
  imageName: "example_image",
};

export const CONTAINER_LIST_DATA = [
  { id: "1", name: "web", status: "running" },
  { id: "2", name: "db", status: "stopped" },
];

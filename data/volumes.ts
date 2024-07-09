import { Volume } from "../types/volumes";

export const VOLUMES_DATA: Volume[] = [
  {
    id: "1",
    name: "volume1",
    driver: "local",
    mountpoint: "/var/lib/docker/volumes/volume1",
  },
  {
    id: "2",
    name: "volume2",
    driver: "local",
    mountpoint: "/var/lib/docker/volumes/volume2",
  },
  {
    id: "3",
    name: "volume3",
    driver: "local",
    mountpoint: "/var/lib/docker/volumes/volume3",
  },
];

export const VOLUME_DETAIL_DATA: Volume = {
  id: "12345",
  name: "example_volume",
  driver: "local",
  mountpoint: "/var/lib/docker/volumes/example_volume",
};

export const MOUNTED_VOLUMES = [
  { containerId: "container1", mountPath: "/app/data" },
  { containerId: "container2", mountPath: "/app/logs" },
];

export const FILE_SYSTEM = [
  "/app",
  "/app/data",
  "/app/data/file1.txt",
  "/app/data/file2.txt",
  "/app/logs",
  "/app/logs/log1.txt",
  "/app/logs/log2.txt",
];

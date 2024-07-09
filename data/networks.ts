import { Network, NetworkDetail } from "../types/networks";

export const NETWORKS_LIST: Network[] = [
  { id: "1", name: "network1", driver: "bridge" },
  { id: "2", name: "network2", driver: "host" },
  { id: "3", name: "network3", driver: "overlay" },
];

export const NETWORK_DATA: NetworkDetail = {
  id: "12345",
  name: "example_network",
  driver: "bridge",
  subnet: "192.168.1.0/24",
  gateway: "192.168.1.1",
};

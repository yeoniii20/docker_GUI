export interface Network {
  id: string;
  name: string;
  driver: string;
}

export interface NetworkListProps {
  networks: Network[];
  onDelete: (id: string) => void;
}

export interface NetworkDetail {
  id: string;
  name: string;
  driver: string;
  subnet: string;
  gateway: string;
}

export interface Container {
  id: string;
  name: string;
  status: string;
}

export interface ContainerListProps {
  containers: Container[];
  onStart: (id: string) => void;
  onStop: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface ContainerDetailTypes {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  imageName: string;
  ports: any[];
  mounts: any[];
  env: any;
  logs: string;
}

export interface DockerImageDetail {
  id: string;
  name: string;
  tag: string;
  description: string;
  createdAt: string;
  size: string;
  repository: string;
  dockerVersion: string;
  author: string;
  labels: { [key: string]: string };
  architecture: string;
  os: string;
  ports: string[];
  environmentVariables: { [key: string]: string };
  volumes: string[];
}

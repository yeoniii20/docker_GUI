import { NextResponse } from "next/server";
import axios from "axios";
import { ContainerDetailTypes } from "../../../../types/containers";

const DOCKER_API_URL = "http://localhost:2375";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log("id >>>", id);

  if (!id) {
    return NextResponse.json(
      { error: "Container ID is required" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `${DOCKER_API_URL}/containers/${id}/json`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

    console.log("DETAIL >>> ", response);

    const container: ContainerDetailTypes = {
      id: response.data.Id,
      name: response.data.Name,
      status: response.data.State.Status,
      createdAt: response.data.Created,
      imageName: response.data.Config.Image,
      ports: response.data.NetworkSettings.Ports
        ? Object.keys(response.data.NetworkSettings.Ports)
        : [],
      mounts: response.data.Mounts.map((mount: any) => mount.Source),
      env: response.data.Config.Env.reduce((env: any, variable: string) => {
        const [key, value] = variable.split("=");
        env[key] = value;
        return env;
      }, {}),
      logs: "",
    };

    return NextResponse.json(container);
  } catch (error) {
    console.error("Failed to fetch container details:", error);
    return NextResponse.json(
      { error: "Failed to fetch container details" },
      { status: 500 }
    );
  }
}

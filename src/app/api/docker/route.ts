// import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// const DOCKER_API_URL = "http://localhost:2375";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const param = {
//     all: true,
//   };
//   try {
//     const response = await axios.get(`${DOCKER_API_URL}/containers/json`, {
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       params: param,
//     });
//     res.status(200).json(response.data);
//     console.log("API 실행되었습니다 :::", response);
//   } catch (error) {
//     console.error("Failed to fetch containers:", error);
//     res.status(500).json({ error: "Failed to fetch containers" });
//   }
// }

// export async function GET() {
//   const param = {
//     all: true,
//   };
//   const res = await fetch(`${DOCKER_API_URL}/containers/json`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // params: param,
//   });

//   const data = await res.json();
//   console.log("data", data);

//   return Response.json(data);
// }

// const DOCKER_API_URL = "http://localhost:2375";
// const fetchData = async () => {
//   try {
//     const response = await axios.get(`${DOCKER_API_URL}/containers/json`);
//     // setContainers(response.data);
//     console.log("Container Data >>>", response);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// useEffect(() => {
//   fetchData();
//   console.log("api 호출됨");
// }, []);

import { NextResponse } from "next/server";
import axios from "axios";
import { Container } from "../../../../types/containers";

const DOCKER_API_URL = "http://localhost:2375";

export async function GET(request: Request) {
  const param = {
    all: true,
  };

  try {
    const response = await axios.get(`${DOCKER_API_URL}/containers/json`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      params: param,
    });

    const containers: Container[] = response.data.map((container: any) => ({
      id: container.Id,
      name: container.Names[0],
      status: container.State,
    }));

    return NextResponse.json(containers);
  } catch (error) {
    console.error("Failed to fetch containers:", error);
    return NextResponse.json(
      { error: "Failed to fetch containers" },
      { status: 500 }
    );
  }
}

import { LoaderFunctionArgs, json } from "@remix-run/node";
import { cors } from "remix-utils/cors";

import { fakeItems } from "~/models/static.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return await cors(request, json({ data: fakeItems }));
}

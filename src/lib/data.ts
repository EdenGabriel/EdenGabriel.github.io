import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

export function readData<T = unknown>(name: string): T {
  const filePath = path.join(process.cwd(), "src", "data", `${name}.yaml`);
  return parse(fs.readFileSync(filePath, "utf8")) as T;
}

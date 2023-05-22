import { readFileSync } from "fs";
import * as path from "path";

export default function getFileData(filePath: string): string {
	return readFileSync(filePath).toString();
}

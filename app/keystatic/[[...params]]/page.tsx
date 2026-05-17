import type { Metadata } from "next";
import { makePage } from "@keystatic/next/ui/app";
import config from "../../../keystatic.config";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default makePage(config);

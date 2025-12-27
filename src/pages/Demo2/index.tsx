import { lazy } from "react";

const Demo3 = lazy(() => import("./demo3"));

export default function Index() {
  return <Demo3 />;
}

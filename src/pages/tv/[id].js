import { useRouter } from "next/router";

export default function detail() {
  const router = useRouter();
  console.log(router);
  return "detail";
}

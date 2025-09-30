import { useEffect } from "react";
import { useRouter } from "next/router";

export default function WhyFairviaPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to how-it-works since content has been consolidated
    router.replace("/how-it-works");
  }, [router]);

  return null;
}
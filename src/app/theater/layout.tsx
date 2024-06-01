import type { Metadata } from "next";
import PageWrapper from "@/components/wrapper/page-wrapper";

export const metadata: Metadata = {
  title: "FJKT48 | Theater",
  description: "",
};

export default function TheaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageWrapper>{children}</PageWrapper>;
}

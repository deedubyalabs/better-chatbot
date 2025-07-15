import DubyaCommandCenter from "@/components/dubya-command-center";
import { generateUUID } from "lib/utils";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const id = generateUUID();
  return <DubyaCommandCenter initialMessages={[]} threadId={id} key={id} />;
}

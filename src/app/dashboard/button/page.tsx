import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Default</Button>
      <Button variant="ghost">Default</Button>
      <Button variant="link">Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="secondary">Default</Button>
      <Button disabled>Secondary</Button>
    </div>
  );
}

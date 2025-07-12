import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


export default function Home() {
  return (
    <div className="flex flex-col m-10 gap-y-2 " >
      <Button variant={"elevated"} >i am a button</Button>
      <Textarea>i am a button</Textarea>
      <Checkbox/>
    </div>
  );
}

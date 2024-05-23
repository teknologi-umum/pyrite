import { Button } from "@/components/ui/button"

type ButtonPrimaryProps = {
    name: string;
};
  
export function ButtonPrimary({name}: ButtonPrimaryProps) {
  return <Button variant="ghost">{name}</Button>
}

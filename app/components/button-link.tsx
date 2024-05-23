import { Button } from "@/components/ui/button";

type ButtonLinkProps = {
  name?: string;
};

export function ButtonLink({ name }: ButtonLinkProps) {
  return <Button variant="link">{name}</Button>;
}

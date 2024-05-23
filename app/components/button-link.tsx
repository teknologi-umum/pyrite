import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";

type ButtonLinkProps = {
  name?: string;
  to: string;
};

export function ButtonLink({ name, to }: ButtonLinkProps) {
  return (
    <Link to={to}>
      <Button variant="link">{name}</Button>
    </Link>
  );
}

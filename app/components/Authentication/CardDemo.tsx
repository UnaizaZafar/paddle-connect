import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginUser } from "@/public/utils/svgs";
type AuthenticationCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};
export function CardDemo({
  title,
  subtitle,
  children,
}: AuthenticationCardProps) {
  return (
    <Card className="w-full max-w-110 ">
      <CardHeader>
        <CardTitle>{loginUser}</CardTitle>
        <div className="flex flex-col gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex items-center gap-2.5">
        <div className="dark:bg-soft-200 bg-soft-200 w-full h-px" />
        <span className="font-inter dark:text-soft-200 text-soft-400 text-xs">
          OR
        </span>
        <div className="dark:bg-soft-200 bg-soft-200 w-full h-px" />
      </div>
      {children}
    </Card>
  );
}

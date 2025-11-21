import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type AuthenticationCardProps = {
  cardIcon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  showFullLine?: boolean;
};
export function CardDemo({
  cardIcon,
  title,
  subtitle,
  children,
  showFullLine=false,
}: AuthenticationCardProps) {
  return (
    <Card className="w-full max-w-110 ">
      <CardHeader>
        <CardTitle>{cardIcon}</CardTitle>
        <div className="flex flex-col gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
      </CardHeader>
      {showFullLine ? (
        <div className="dark:bg-soft-200 bg-soft-200 w-full h-px" />
      ) : (
        <div className="flex items-center gap-2.5">
          <div className="dark:bg-soft-200 bg-soft-200 w-full h-px" />
          <span className="font-inter dark:text-soft-200 text-soft-400 text-xs">
            OR
          </span>
          <div className="dark:bg-soft-200 bg-soft-200 w-full h-px" />
        </div>
      )}

      {children}
    </Card>
  );
}

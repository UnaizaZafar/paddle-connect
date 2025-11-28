import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { reject_warn, approved_alert } from "@/utils/svgs";

export default function StatusModal({ isApprove }: { isApprove: boolean }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-120 font-inter">
          <DialogHeader className="items-center gap-6">
            {isApprove ? approved_alert : reject_warn}
            <div className="flex flex-col gap-4 items-center max-w-3/4 w-full text-center">
              <DialogTitle>
                {isApprove
                  ? "Approve Level Upgrade Request"
                  : "Reject Level Upgrade Request"}
              </DialogTitle>
              <DialogDescription>
                {isApprove
                  ? "Are you sure you want to approve Hassan Ali’s level upgrade request?"
                  : "Are you sure you want to reject Hassan Ali’s level upgrade request?"}
              </DialogDescription>
            </div>
          </DialogHeader>
          {!isApprove && (
            <div className="grid gap-1">
              <Label
                htmlFor="name-1"
                className="font-medium text-sm tracking-tightest leading-5 text-main-900 "
              >
                Short Reason
              </Label>
              <Input
                id="name-1"
                name="name"
                placeholder="describe reason in one line"
                className="text-soft-400 text-sm tracking-tightest"
              />
            </div>
          )}
          <div className="w-full bg-soft-200 h-px mt-2" />
          <DialogFooter className="w-full">
            <DialogClose asChild>
              <Button variant="outline" className="w-1/2  py-3.5" size={"xl"}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className={`w-1/2 ${
                isApprove
                  ? "bg-primary hover:bg-primary/90 text-charcoal-black"
                  : "bg-red-base text-white hover:bg-red-base/90"
              }  py-3.5`}
              size={"xl"}
            >
              {isApprove ? "Approve" : "Reject"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

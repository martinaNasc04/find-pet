import { Loader2Icon } from "lucide-react";

export default function SpinnerSizesDemo() {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Loader2Icon className="h-6 w-6 animate-spin" />
            <Loader2Icon className="h-8 w-8 animate-spin" />
            <Loader2Icon className="h-9 w-9 animate-spin" />
            <Loader2Icon className="h-10 w-10 animate-spin" />
        </div>
    );
}

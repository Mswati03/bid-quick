/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HPolyoRBCMb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface Bid {
    username: string;
    time: string;
    amount: string;
}

const bids: Bid[] = [
    { username: "Jared Palmer", time: "2 days ago", amount: "$150" },
    { username: "Emily Davis", time: "3 days ago", amount: "$200" },
    { username: "Alex Smith", time: "5 days ago", amount: "$250" },
];

export default function BidHistory() {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6">
            {bids.map((bid, index) => (
                <div key={index}>
                    <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://randomuser.me/api/portraits/lego/5.jpg" alt={`@${bid.username}`} />
                            <AvatarFallback>{bid.username.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1 text-sm">
                            <div className="font-medium line-clamp-1">{bid.username}</div>
                            <time className="text-xs text-gray-500 dark:text-gray-400">{bid.time}</time>
                        </div>
                        <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">{bid.amount}</div>
                    </div>
                    {index < bids.length - 1 && <Separator />}
                </div>
            ))}
        </div>
    );
}

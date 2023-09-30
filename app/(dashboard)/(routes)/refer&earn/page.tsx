import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ReferPage = () => {
  return (
    <main className="flex flex-col space-y-8 items-center pt-12">
      <h1 className="font-semibold text-primary text-5xl">$0.00</h1>
      <p className="font-normal text-lg text-primary min-[450px]:text-left text-center min-[450px]:p-0 px-4">
        Refer your friends and earn 0.05% on all trades
      </p>
      <div className="flex flex-col space-y-6 min-[450px]:p-0 px-4">
        <div className="flex flex-col items-start space-y-4">
          <Label htmlFor="your referral id">Your Referral ID</Label>
          <Input
            readOnly
            value="1234567890"
            className="bg-transparent text-center"
          />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Label htmlFor="total number of referrals">
            Total Number of Referrals
          </Label>
          <Input readOnly value="$0" className="bg-transparent text-center" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Label htmlFor="balance and total earnings">
            Balance and Total Earnings
          </Label>
          <Input readOnly value="$0" className="bg-transparent text-center" />
        </div>
      </div>
    </main>
  );
};

export default ReferPage;

import { Button } from "@/components/ui/button";
import { BitcoinRefresh } from "iconsax-react";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col space-y-8 items-center pt-12">
      <h1 className="text-5xl font-semibold text-primary">$300.00</h1>
      <div className="flex flex-col space-y-8">
        <div className="font-medium text-lg">
          Kindly pay the above amount to the payment details below:
        </div>
        <div className="flex justify-between text-lg font-medium">
          <span>Bank Name:</span> <span>KudaMFB</span>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <span>Account Number:</span> <span>2002750082</span>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <span>Account Name:</span> <span>Eloquent Exchange</span>
        </div>
        <Button variant="custom">
          Proceed <BitcoinRefresh className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OFFICIAL_RATES } from "@/constants";

const BuyandSellPage = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <Tabs defaultValue="Buy Crypto" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 gap-x-8 bg-transparent">
          <TabsTrigger
            value="Buy Crypto"
            className="bg-transparent font-normal text-black dark:border-white dark:text-white data-[state=active]:bg-[#4168B7] data-[state=active]:text-white dark:data-[state=active]:bg-[#A77700] border border-black data-[state=active]:border-none transition"
          >
            Buy Crypto
          </TabsTrigger>
          <TabsTrigger
            value="Sell Crypto"
            className="bg-transparent text-black dark:text-white border border-black dark:border-white font-normal data-[state=active]:bg-[#4168B7] data-[state=active]:text-white dark:data-[state=active]:bg-[#A77700] data-[state=active]:border-none transition"
          >
            Sell Crypto
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Buy Crypto">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="space-y-12 py-2">
              <div className="space-y-4">
                <Label htmlFor="coin type" className="font-normal">
                  Coin type
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-transparent">
                    <SelectValue placeholder="Select coin name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="bitcoin">Bitcoin</SelectItem>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="usdt">USDT</SelectItem>
                      <SelectItem value="dodge">Dodge</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <Label
                  htmlFor="amount"
                  className="font-normal flex justify-between"
                >
                  <span>Amount</span>{" "}
                  <span className="text-muted-foreground">
                    Rate: {OFFICIAL_RATES} / %
                  </span>
                </Label>
                <Input id="amount" type="text" required />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuyandSellPage;

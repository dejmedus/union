import { ButtonRound } from "./Button";

const Pricing = () => {
    return (
      <div className="grid gap-2 p-4 md:p-6 lg:px-8 lg:py-12">
        <h3 className="text-xl font-extrabold">Pricing</h3>
        <div className="my-4 gap-1 grid md:mx-8 lg:mx-12 md:flex md:gap-3">
          <PricingCard title="Basic" features={["meet people"]} price="Free" />
          <PricingCard
            title="Gold"
            features={["meet people", "have fun"]}
            price="$9/month"
          />
          <PricingCard
            title="Premium"
            features={["meet people with dogs", "have fun", "eat food"]}
            price="$12/month"
          />
        </div>
      </div>
    );
}

export default Pricing

interface PricingCardProps {
    title: string,
    features: string[],
    price: string
}
function PricingCard({title, features, price}: PricingCardProps) {
    return (
      <div className="px-4 py-12 flex md:flex-1 flex-col bg-zinc-50 border-2 border-pink-200 gap-2 md:w-3/12">
        <div className="flex-1">
          <h3 className="font-bold text-xl md:text-lg">{title}</h3>
          <ul className="ml-2 p-2">
            {features.map((feature) => {
              return (
                <li key={feature}>
                  <p className="text-xl md:text-lg">&rarr; {feature}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <ButtonRound content={price} />
      </div>
    );
}
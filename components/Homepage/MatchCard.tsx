import { HeartBadge, StarBadge, DialogBadge } from "@/homepage/Badges";

interface MatchCardProps {
  photo: React.ReactNode | null;
  intro: string;
  badges?: string[];
  name: string;
  values: string[];
  gender: string;
  multi_gender: boolean;
  match_level: string;
}

const genderKey = {
  h: "group-hover:bg-red-400 ",
  s: "group-hover:bg-pink-300",
  t: "group-hover:bg-violet-400",
  o: "group-hover:bg-orange-300",
};

export default function MatchCard({
  photo,
  intro,
  name,
  values,
  badges,
  gender,
  multi_gender,
  match_level,
}: MatchCardProps) {
  const cardColor = genderKey[gender as keyof typeof genderKey];
  return (
    <li>
      <a href="MATCH-PROFILE" className="block overflow-hidden group">
        <div
          className={`${
            multi_gender ? cardColor : "group-hover:bg-zinc-400"
          } max-w-md md:max-w-none h-[350px] sm:h-[250px] w-full transition duration-500 bg-blue-400`}
        >
          {match_level == "level_1" ? (
            <h3 className=" p-1 text-zinc-100 dark:text-zinc-900 text-3xl overflow-scroll font-semibold opacity-30 transition duration-500 group-hover:opacity-60">
              &quot;{intro}&quot;
            </h3>
          ) : (
            <div className="aspect-square">{photo}</div>
          )}
        </div>

        <div className="relative pt-3 min-h-[6em]">
          <div className="flex flex-wrap gap-2">
            {badges
              ? badges.map((badge) => {
                  return badge == "heart" ? (
                    <HeartBadge />
                  ) : badge == "star" ? (
                    <StarBadge />
                  ) : (
                    <DialogBadge />
                  );
                })
              : null}
            {values.map((value) => {
              return (
                <p
                  key={value}
                  className="text-sm text-zinc-700 group-hover:underline group-hover:underline-offset-4"
                >
                  {value}
                </p>
              );
            })}
          </div>

          <h3 className="mt-2">
            <span className="tracking-wider text-zinc-900"> {name} </span>
          </h3>
        </div>
      </a>
    </li>
  );
}

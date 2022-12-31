import { RightArrowSVG, DownArrowSVG } from "@/images/svg/arrows";
import { HeartBadge, StarBadge, DialogBadge } from "@/homepage/Badges";
const Match = () => {
  return (
    <div className="max-w-screen-xl px-4 py-2 mx-auto sm:px-6 sm:py-4 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-zinc-900 sm:text-xl">Matches</h2>
      </header>

      <div className="mt-4 mb-12 sm:flex sm:items-center gap-2 md:gap-6">
        <div className="block sm:hidden">
          <button className="flex items-center gap-2 pb-1 text-zinc-900 transition border-b border-zinc-400 cursor-pointer hover:border-zinc-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>
            <RightArrowSVG />
          </button>
        </div>

        <Dropdown name="Filter">
          <DropdownCheckbox>
            <DropdownCheckboxEntry name="Matches" />
            <DropdownCheckboxEntry name="Connections" />
          </DropdownCheckbox>
        </Dropdown>

        <Dropdown name="Sort">
          <DropdownRadio>
            <DropdownRadioEntry name="Match Date ASC" dropdownName="sort" />
            <DropdownRadioEntry name="Match Date DESC" dropdownName="sort" />
          </DropdownRadio>
        </Dropdown>
      </div>

      <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
        <MatchCard
          photo={
            "I found a rock in a Waltmart parking lot yesterday shaped like a poptart"
          }
          gender="t"
          name="sam"
          values={["honesty", "kindness", "acceptance", "loyalty"]}
          badges={["heart", "star", "dialog"]}
        />
        <MatchCard
          photo={"Seeking a step-dad for my pomeranian Mikey Bobikey"}
          gender="s"
          name="claire"
          values={["honesty", "kindness"]}
          badges={["heart"]}
        />
        <MatchCard
          photo={"I dunno what to write here"}
          gender="o"
          name="terry"
          values={["honesty", "kindness"]}
          badges={["star"]}
        />
        <MatchCard
          photo={"Beer. Fishing. Trucks. Hallmark Movies."}
          gender="h"
          name="craig"
          values={["honesty", "kindness"]}
          badges={[]}
        />
        <MatchCard
          photo={":)"}
          gender="h"
          name="frederick"
          values={["honesty", "kindness"]}
          badges={["dialog"]}
        />
        <MatchCard
          photo={null}
          gender="h"
          name="wade"
          values={["honesty", "kindness"]}
          badges={[]}
        />
      </ul>
    </div>
  );
};

export default Match;

interface MatchCardProps {
  photo: string | React.ReactNode | null;
  badges?: string[];
  name: string;
  values: string[];
  gender: string;
}

const genderKey = {
  h: "group-hover:bg-red-400 ",
  s: "group-hover:bg-pink-300",
  t: "group-hover:bg-violet-400",
  o: "group-hover:bg-orange-300",
};

function MatchCard({ photo, name, values, badges, gender }: MatchCardProps) {
  const cardColor = genderKey[gender as keyof typeof genderKey];
  return (
    <li>
      <a href="PROFILE-LINK" className="block overflow-hidden group">
        <div
          className={`${cardColor} h-[150px] sm:h-[250px] w-full transition duration-500 bg-blue-400`}
        >
          {typeof photo == "string" ? (
            <h3 className=" p-1 text-zinc-100 dark:text-zinc-900 text-3xl overflow-scroll font-semibold opacity-30 transition duration-500 group-hover:opacity-60">
              &quot;{photo}&quot;
            </h3>
          ) : (
            <>{photo}</>
          )}
        </div>

        <div className="relative pt-3 bg-white">
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

interface DropdownProps {
  children: React.ReactNode;
  name?: string;
}

function Dropdown({ name, children }: DropdownProps) {
  return (
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center gap-2 pb-1 text-zinc-900 transition border-b border-zinc-400 cursor-pointer hover:border-zinc-600">
          <p className="text-sm font-medium"> {name}</p>

          <span className="transition group-open:-rotate-180">
            <DownArrowSVG />
          </span>
        </summary>

        <div className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2">
          <div className="bg-white border border-zinc-200 rounded w-96">
            <header className="flex items-center justify-between p-4">
              <button className="text-sm text-zinc-900 underline underline-offset-4">
                Reset
              </button>
            </header>
            <>{children}</>
          </div>
        </div>
      </details>
    </div>
  );
}
interface DropdownChildrenProps {
  children: React.ReactNode;
}

function DropdownCheckbox({ children }: DropdownChildrenProps) {
  return (
    <ul className="p-4 space-y-1 border-t border-zinc-200">
      <>{children}</>
    </ul>
  );
}

function DropdownRadio({ children }: DropdownChildrenProps) {
  return (
    <ul className="p-4 space-y-1 border-t border-zinc-200">
      <>{children}</>
    </ul>
  );
}

interface DropdownEntryRadioProps {
  name: string;
  dropdownName: string;
}
interface DropdownEntryCheckboxProps {
  name: string;
}

function DropdownRadioEntry({ dropdownName, name }: DropdownEntryRadioProps) {
  return (
    <li>
      <label htmlFor={name} className="inline-flex items-center gap-2">
        <input
          type="radio"
          id={name}
          name={dropdownName}
          value={name}
          className="w-5 h-5 border-zinc-300 rounded"
        ></input>
        <span className="text-sm font-medium text-zinc-700">{name}</span>
      </label>
    </li>
  );
}

function DropdownCheckboxEntry({ name }: DropdownEntryCheckboxProps) {
  return (
    <li>
      <label htmlFor={name} className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          id={name}
          className="w-5 h-5 border-zinc-300 rounded"
        />

        <span className="text-sm font-medium text-zinc-700">{name}</span>
      </label>
    </li>
  );
}

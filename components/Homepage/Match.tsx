import { useState } from "react";
import { RightArrowSVG, DownArrowSVG } from "@/images/svg/arrows";
import { HeartBadge, StarBadge, DialogBadge } from "@/homepage/Badges";

const Match = ({ session }: { session: object }) => {
  const matchCardGenericProps = {
    multi_gender: session.multi_gender_pref,
  };

  const [filters, setFilters] = useState({
    level_1: false,
    level_2: false,
  });
  const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    // if Matches is toggled on, we want level 1 matches from db
    // if Connections is toggle on, we want level 2 matches from db
    // if nothing is toggled on, we want all level matches
    const matchLevel = name == "Matches" ? "level_1" : "level_2";
    setFilters({
      ...filters,
      [matchLevel]: checked,
    });
  };

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

        <Dropdown
          name="Match Level"
          onDropdownReset={() => {
            setFilters({ level_1: false, level_2: false });
          }}
        >
          <DropdownCheckbox>
            <DropdownCheckboxEntry
              name="Matches"
              onChange={handleFilters}
              value={filters.level_1}
            />
            <DropdownCheckboxEntry
              name="Connections"
              onChange={handleFilters}
              value={filters.level_2}
            />
          </DropdownCheckbox>
        </Dropdown>

        {/* <Dropdown name="Sort">
          <DropdownRadio>
            <DropdownRadioEntry name="Match Date ASC" dropdownName="sort" />
            <DropdownRadioEntry name="Match Date DESC" dropdownName="sort" />
          </DropdownRadio>
        </Dropdown> */}
      </div>

      <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* if user has not filtered at all, show all matches */}
        {/* if user has filtered by match level, only show those levels */}
        {session.matches.map((match) => {
          return (filters.level_1 == false && filters.level_2 == false) ||
            filters[match.match_level] == true ? (
            <MatchCard
              key={match.id}
              photo={match.photo}
              intro={match.intro}
              gender={match.gender}
              name={match.name}
              values={match.values}
              badges={match.badges}
              match_level={match.match_level}
              {...matchCardGenericProps}
            />
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default Match;

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

function MatchCard({
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
          } h-[200px] sm:h-[250px] w-full transition duration-500 bg-blue-400`}
        >
          {match_level == "level_1" ? (
            <h3 className=" p-1 text-zinc-100 dark:text-zinc-900 text-3xl overflow-scroll font-semibold opacity-30 transition duration-500 group-hover:opacity-60">
              &quot;{intro}&quot;
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
interface DropdownEntryCheckboxProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

function DropdownCheckboxEntry({
  name,
  onChange,
  value,
}: DropdownEntryCheckboxProps) {
  return (
    <li>
      <label htmlFor={name} className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          id={name}
          name={name}
          className="w-5 h-5 border-zinc-300 rounded"
          onChange={onChange}
          checked={value}
        />

        <span className="text-sm font-medium text-zinc-700">{name}</span>
      </label>
    </li>
  );
}

interface DropdownEntryRadioProps {
  name: string;
  dropdownName: string;
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

interface DropdownProps {
  children: React.ReactNode;
  name?: string;
  onDropdownReset(event: React.MouseEvent<HTMLButtonElement>): void;
}

function Dropdown({ name, children, onDropdownReset }: DropdownProps) {
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
              <button
                onClick={onDropdownReset}
                className="text-sm text-zinc-900 underline underline-offset-4"
              >
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

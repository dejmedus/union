import { useState } from "react";
import {
  Dropdown,
  DropdownCheckbox,
  DropdownCheckboxEntry,
} from "@/homepage/Filters";
import MatchCard from "@/homepage/MatchCard";

const Match = ({ session, user }) => {
  console.log(user.gender_pref.length > 1);
  const matchCardGenericProps = {
    multi_gender: user.gender_pref.length > 1,
  };

  const [filters, setFilters] = useState({
    LEVEL_1: false,
    LEVEL_2: false,
  });
  const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    // if Matches is toggled on, we want level 1 matches from db
    // if Connections is toggle on, we want level 2 matches from db
    // if nothing is toggled on, we want all level matches
    const matchLevel = name == "Matches" ? "LEVEL_1" : "LEVEL_2";
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

      <div className="mt-4 mb-12 flex sm:items-center gap-2 md:gap-6">
        <Dropdown
          name="Level"
          onDropdownReset={() => {
            setFilters({ LEVEL_1: false, LEVEL_2: false });
          }}
        >
          <DropdownCheckbox>
            <DropdownCheckboxEntry
              name="Matches"
              onChange={handleFilters}
              value={filters.LEVEL_1}
            />
            <DropdownCheckboxEntry
              name="Connections"
              onChange={handleFilters}
              value={filters.LEVEL_2}
            />
          </DropdownCheckbox>
        </Dropdown>
      </div>

      <ul className="grid justify-center sm:justify-start gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* if user has not filtered at all, show all matches */}
        {/* if user has filtered by match level, only show those levels */}
        {user.matches &&
          user.matches.map((match) => {
            return (filters.LEVEL_1 == false && filters.LEVEL_2 == false) ||
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

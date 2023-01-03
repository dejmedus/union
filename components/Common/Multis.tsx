interface MultiChildProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
  groupName: string;
  label: string;
}

export function MultiCheckbox({
  name,
  onChange,
  groupName,
  label,
  value,
}: MultiChildProps) {
  return (
    <li>
      <label htmlFor={name} className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          id={name}
          data-groupname={groupName}
          name={name}
          className="w-5 h-5 border-zinc-300 rounded  enabled:checked:bg-blue-400 checked:bg-blue-400 hover:checked:bg-blue-400"
          onChange={onChange}
          checked={value}
        />

        <span className="text-sm font-medium text-zinc-700">{label}</span>
      </label>
    </li>
  );
}

export function MultiRadio({
  groupName,
  name,
  onChange,
  value,
  label,
}: MultiChildProps) {
  return (
    <li>
      <label htmlFor={name} className="inline-flex items-center gap-2">
        <input
          onChange={onChange}
          type="radio"
          id={name}
          name={groupName}
          checked={value}
          className="w-5 h-5 border-zinc-300 rounded enabled:checked:bg-blue-400 checked:bg-blue-400 hover:checked:bg-blue-400"
        ></input>
        <span className="text-sm font-medium text-zinc-700">{label}</span>
      </label>
    </li>
  );
}

interface MultiProps {
  children: React.ReactNode;
  half: boolean;
  groupLabel: string;
}

export function Multi({ children, half, groupLabel }: MultiProps) {
  return (
    <ul
      className={`${
        half ? "col-span-6 sm:col-span-3" : "col-span-6"
      } p-4 space-y-1`}
    >
      <p className="text-sm font-medium border-b  mb-2">{groupLabel}</p>
      <>{children}</>
    </ul>
  );
}

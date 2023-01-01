import { DownArrowSVG } from "@/images/svg/arrows";

interface DropdownEntryCheckboxProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

export function DropdownCheckboxEntry({
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

export function DropdownRadioEntry({
  dropdownName,
  name,
}: DropdownEntryRadioProps) {
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

export function Dropdown({ name, children, onDropdownReset }: DropdownProps) {
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

export function DropdownCheckbox({ children }: DropdownChildrenProps) {
  return (
    <ul className="p-4 space-y-1 border-t border-zinc-200">
      <>{children}</>
    </ul>
  );
}

export function DropdownRadio({ children }: DropdownChildrenProps) {
  return (
    <ul className="p-4 space-y-1 border-t border-zinc-200">
      <>{children}</>
    </ul>
  );
}

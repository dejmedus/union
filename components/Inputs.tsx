interface InputProps {
  type: string;
  validationText: string;
  placeholder: string;
  label: string;
  name: string;
  min: number;
  half: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | false;
}

export function Input({
  type,
  validationText,
  placeholder,
  label,
  name,
  min,
  half,
  onChange,
  value,
}: InputProps) {
  return (
    <div className={half ? "col-span-6 sm:col-span-3" : "col-span-6"}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>

      <div className="relative mt-1">
        <input
          type={type}
          id={name}
          className="w-full rounded-md py-3 focus:invalid:border-red-200 focus:invalid:ring-red-200 placeholder:font-normal placeholder:text-zinc-400 border-zinc-200 text-zinc-700  text-sm shadow-sm peer valid:border-zinc-200 invalid:border-red-200 "
          placeholder={placeholder}
          minLength={min}
          onChange={onChange}
          name={name}
          value={value !== false ? value : undefined}
        />
        <p className="invisible peer-focus:invisible peer-invalid:visible ml-2 mt-1 text-red-700 font-light text-xs">
          {validationText}
        </p>
      </div>
    </div>
  );
}

interface CheckboxProps {
  label: string;
  name: string;
  half: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export function Checkbox({
  label,
  name,
  half,
  onChange,
  isChecked,
}: CheckboxProps) {
  return (
    <div className={half ? "col-span-6 sm:col-span-3" : "col-span-6"}>
      <label htmlFor={name} className="flex gap-4">
        <input
          type="checkbox"
          name={name}
          id={name}
          className="h-5 w-5 rounded-md border-zinc-200 bg-white shadow-sm"
          onChange={onChange}
          defaultChecked={isChecked}
        />

        <span className="text-sm text-zinc-700">{label}</span>
      </label>
    </div>
  );
}

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
          key={name}
          type={type}
          id={name}
          className="w-full rounded-md py-3 text-sm shadow-sm peer placeholder:text-zinc-400 border-zinc-200 text-zinc-700   valid:border-zinc-200 focus:invalid:border-red-200 focus:invalid:ring-red-200 placeholder:font-normal invalid:border-red-200 dark:focus:invalid:border-red-400 dark:focus:invalid:ring-red-200 dark:valid:border-zinc-400 dark:invalid:border-red-400"
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
          className="h-5 w-5 rounded-md border-zinc-200 bg-white shadow-sm enabled:checked:bg-blue-400 checked:bg-blue-400 hover:checked:bg-blue-400"
          onChange={onChange}
          defaultChecked={isChecked}
        />

        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
}

interface NumberProps {
  validationText: string;
  placeholder: string;
  label: string;
  name: string;
  min: number;
  max: number;
  half: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | false;
}

export function Number({
  validationText,
  placeholder,
  label,
  name,
  min,
  max,
  half,
  onChange,
  value,
}: NumberProps) {
  return (
    <div className={half ? "col-span-3 sm:col-span-2" : "col-span-3"}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>

      <div className="relative mt-1">
        <input
          key={name}
          type="number"
          id={name}
          className="w-full rounded-md py-3 text-sm shadow-sm peer placeholder:text-zinc-400 border-zinc-200 text-zinc-700   valid:border-zinc-200 focus:invalid:border-red-200 focus:invalid:ring-red-200 placeholder:font-normal invalid:border-red-200 dark:focus:invalid:border-red-400 dark:focus:invalid:ring-red-200 dark:valid:border-zinc-400 dark:invalid:border-red-400"
          placeholder={placeholder}
          min={min}
          max={max}
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

interface TextAreaProps {
  validationText: string;
  placeholder: string;
  label: string;
  name: string;
  min: number;
  half: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | false;
}
export function TextArea({
  validationText,
  placeholder,
  label,
  name,
  min,
  half,
  onChange,
  value,
}: TextAreaProps) {
  return (
    <div
      key={name}
      className={half ? "col-span-6 sm:col-span-3" : "col-span-6"}
    >
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>

      <div className="relative mt-1">
        <textarea
          id={name}
          className="w-full resize-y rounded-md py-3 text-sm shadow-sm peer placeholder:text-zinc-400 border-zinc-200 text-zinc-700   valid:border-zinc-200 focus:invalid:border-red-200 focus:invalid:ring-red-200 placeholder:font-normal invalid:border-red-200 dark:focus:invalid:border-red-400 dark:focus:invalid:ring-red-200 dark:valid:border-zinc-400 dark:invalid:border-red-400"
          placeholder={placeholder}
          minLength={min}
          onChange={onChange}
          rows={4}
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

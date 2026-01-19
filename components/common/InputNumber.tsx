import React from "react";

type Props = {
  value?: number;
  onValueChange: (data: number) => void;
  onChange?: (data: number) => void;
  min?: number;
  max?: number;
  useGrouping?: boolean;
  required?: boolean;
  suffix?: string;
  prefix?: string;
  disabled?: boolean;
  placeholder?: string;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  inputRef?: React.Ref<HTMLInputElement>;
  onBlur?: any;
  name?: string;
};

function InputNumber({
  value,
  onValueChange,
  min,
  max,
  useGrouping,
  required,
  suffix,
  placeholder,
  prefix,
  disabled,
  minFractionDigits,
  name,
  maxFractionDigits,
  onBlur,
  onChange,
  inputRef,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) return;

    if (onChange) onChange(val);
    onValueChange(val);
  };

  return (
    <div className="inline-flex w-full">
      <input
        ref={inputRef}
        type="number"
        className="main-input w-full rounded-lg border border-gray-300 p-2"
        value={value}
        min={min}
        max={max}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onBlur={onBlur}
        required={required}
      />
    </div>
  );
}

export default InputNumber;

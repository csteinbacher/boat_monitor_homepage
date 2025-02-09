import { useEffect, useRef, useState } from "react";
import { DropdownItem, DropdownMenu, DropdownWrapper } from "./styles";

type DropdownOption<T> = {
  label: string;
  value: T;
};

type DropdownProps<T> = {
  children: React.ReactNode;
  options: DropdownOption<T>[];
  selectedOption: T;
  onSelect: (value: T) => void;
};

const Dropdown = <T,>({
  children,
  options,
  selectedOption,
  onSelect,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const showDropdown = () => {
    setShouldRender(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const hideDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        hideDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: DropdownOption<T>) => {
    onSelect(option.value);
    hideDropdown();
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <div onClick={() => (isOpen ? hideDropdown() : showDropdown())}>
        {children}
      </div>
      {shouldRender ? (
        <DropdownMenu
          $isOpen={isOpen}
          onTransitionEnd={() => {
            if (!isOpen) {
              setShouldRender(false);
            }
          }}
        >
          {options.map((option, index) => (
            <DropdownItem
              key={`dropdown_item_${option.value}_${index}`}
              onClick={() => handleSelect(option)}
              $selected={option.value === selectedOption}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      ) : null}
    </DropdownWrapper>
  );
};

export default Dropdown;

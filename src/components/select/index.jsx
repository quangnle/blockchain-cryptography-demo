import useOutsideClick from '@/hooks/useOutsideClick';
import React, { useRef, useState } from 'react';
import ArrowDown from '@/assets/images/icon/arrow-down.svg';

const Select = ({
  options,
  width = 240,
  onChange,
  className,
  defaultValue
}) => {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState(
    options.find(opt => opt.value === defaultValue) || options[0]
  );
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    show === true && setShow(false);
  });

  function handleSelectDropdown(option) {
    const opt = options.find(opt => opt.value === option.value);

    typeof onChange === 'function' && onChange(opt);
    setOption(opt);
    setShow(false);
  }
  return (
    <div
      ref={selectRef}
      style={{ width }}
      className={`dropdown ${className || ''}`}
    >
      <div onClick={() => setShow(true)} className="dropdown-select">
        <span className="dropdown-selected">{option.label}</span>
        <ArrowDown className={`dropdown-caret ${show ? 'up' : 'down'}`} />
      </div>
      <ul className={`dropdown-list ${show ? 'show' : ''}`}>
        {options.map(opt => (
          <li
            key={opt.value}
            onClick={() => handleSelectDropdown(opt)}
            className="dropdown-item"
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

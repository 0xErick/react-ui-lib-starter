import React from 'react';

export interface Btn2Props {
  icon?: String;
  name: String;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Btn2: React.FC<Btn2Props> = ({ style, icon = '', name = 'button', disabled = false, onClick }) => {
  return (
    <div
      style={style}
      className={`tui-btn2 ${disabled ? 'disabled' : ''}`}
      onClick={() => {
        if (!disabled && onClick) {
          onClick();
        }
      }}
    >
      {icon !== '' && <i className={`fa ${icon}`} aria-hidden="true"></i>}
      <span>{name}</span>
    </div>
  );
};
export default Btn2;

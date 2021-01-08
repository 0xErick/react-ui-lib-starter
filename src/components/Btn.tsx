import React from 'react';

export interface BtnProps {
  name: string;
}

const Btn: React.FC<BtnProps> = (props) => <div>{props.name}</div>;
export default Btn;

import React from 'react';
import './checkbox.scss';

export function Checkbox(props: { checked: boolean; onClick: () => void }) {
  const { checked, onClick } = props;
  return <div className={checked ? 'checkbox checked' : 'checkbox'} onClick={() => onClick()} />;
}

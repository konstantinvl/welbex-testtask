import React from 'react';
import './checkbox.scss';

export function Checkbox(props: { checked: boolean }) {
  const { checked } = props;
  return <div className={checked ? 'checkbox checked' : 'checkbox'} />;
}

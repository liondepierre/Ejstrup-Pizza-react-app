import * as React from 'react';
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IEliteSmileyProps {
}

export default function EliteSmiley (props: IEliteSmileyProps) {
  return (
    <div>
      <img src={eliteSmiley} alt="Smiley - Fødevarestyrelsen"/>
    </div>
  );
}

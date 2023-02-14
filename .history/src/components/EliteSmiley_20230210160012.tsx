import * as React from 'react';
import eliteSmiley from '../assets/img/eliteSmiley.png'

export interface IEliteSmileyProps {
  width: string;
  height: string;
  marginTop: string;
}

export default function EliteSmiley (props: IEliteSmileyProps) {
  return (
    <div>
      <img style={{ marginTop: props.marginTop, width: props.width, height: props.height }} 
      src={eliteSmiley} alt="Smiley - Fødevarestyrelsen"/>
    </div>
  );
}

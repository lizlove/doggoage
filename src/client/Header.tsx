import { IProps } from 'App';
import { IProps } from 'App';
import React from 'react';

export const Header = (props: IProps): JSX.Element => (
  <div>
    <p>
      🐶{props.dogage} and 🇦🇪 {props.unit} and 🧛🏻‍♂️ {props.humanage}
    </p>
  </div>
);

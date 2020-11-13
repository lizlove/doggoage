import * as React from 'react';

import { Header } from './Header';
import { Form } from './Form';

export interface IProps {
  dogage: number;
  unit: string;
  humanage: number;
  children: JSX.Element;
}

export const App = (props: IProps): JSX.Element => (
  <div>
    <Header props={props} />
    <Form props={props} />
  </div>
);

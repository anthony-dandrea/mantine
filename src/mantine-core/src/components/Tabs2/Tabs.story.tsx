import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs2',
};

export const Usage = () => (
  <Tabs defaultValue="react">
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react">React Panel</Tabs.Panel>
    <Tabs.Panel value="sv">Svelte Panel</Tabs.Panel>
    <Tabs.Panel value="ng">Angular Panel</Tabs.Panel>
  </Tabs>
);

import React from 'react';
import classes from './App.module.scss';
import TabList from '../TabList/TabList';
import TabItem from '../TabItem/TabItem';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import { builders, contractors, jobs } from '../../data';

function App() {
  return (
    <div className={classes.container}>
      <Banner title='The Contractor Exchange' subTitle='By Joe Johnson' />
      <TabList>
        <TabItem title='Builders'>
          <Search data={builders} type='Builder' />
        </TabItem>
        <TabItem title='Contractors'>
          <Search data={contractors} type='Contractor' />
        </TabItem>
        <TabItem title='Jobs'>
          <Search data={jobs} type='Job' />
        </TabItem>
      </TabList>
    </div>
  );
}

export default App;

import React from 'react';
import {ContentHeader, SmallBox} from '../components/index';

export interface BoxItems {
  type: string,
  icon: string,
  count: number,
  navigateTo: string
}

const Dashboard = () => {
  const boxItems = [
    {
      title: 'New Orders',
      count: 150,
      type: 'info',
      icon: 'ion-bag'
    },
    {
      title: 'Bounce Rate',
      count: 53,
      type: 'success',
      icon: 'ion-stats-bars'
    },
    {
      title: 'User Registrations',
      count: 44,
      type: 'warning',
      icon: 'ion-person-add'
    },
    {
      title: 'Unique Visitors',
      count: 65,
      type: 'danger',
      icon: 'ion-pie-graph'
    }
  ];

  return (
    <div>
      <ContentHeader title="Dashboard" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {boxItems.map((item: {
              type: string,
              icon: string,
              title: string,
              count: number
            }, index) => (
              <div className="col-lg-3 col-6" key={index}>
              <SmallBox
                type={item.type}
                icon={item.icon}
                title={item.title}
                navigateTo="/"
                count={150}
              />
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
import React, { useEffect, useState } from 'react';
import MainIndexUI from '../component/IndexUI';
import MainDashbaordUI from '../component/Dashboard';

const MainIndex: React.FC = () => {
  return (
    <div className="panel">
      <MainIndexUI />
    </div>
  );
};

const MainDashboardIndex: React.FC = () => {
  return (
    <div className="panel">
      <MainDashbaordUI />
    </div>
  );
};

export default MainIndex;
export {MainDashboardIndex};

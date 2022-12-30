import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useWindowSize } from './hooks/useWindowSize';

import Dashboard from './pages/Dashboard';
import { setWindowSize } from './store/reducers/ui';
import { calculateWindowSize } from './utils/helpers';


const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width)
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
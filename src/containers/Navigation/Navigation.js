import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { homeURL } from '../../constants/pagesRoute';
import { NotFound } from '../../components/PageNotFound/PageNotFound';
import { Board } from '../../pages/Board/Board';

export const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={homeURL} element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RouteHome from '../../routes/RouteHome';
import RouteAbout from '../../routes/RouteAbout';
import RouteEquipment from '../../routes/RouteEquipment';
import RouteBlog from '../../routes/RouteBlog';
import RouteAccount from '../../routes/RouteAccount';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import pathes from '../../constants/pathes';

function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index path={pathes.home} element={<RouteHome />} />
        <Route path={pathes.equipment} element={<RouteEquipment />} />
        <Route path={pathes.blog} element={<RouteBlog />} />
        <Route path={pathes.about} element={<RouteAbout />} />
        <Route path={pathes.account} element={<RouteAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Layout;
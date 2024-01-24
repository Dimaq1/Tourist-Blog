import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteHome from '../../routes/RouteHome'
import RouteAbout from '../../routes/RouteAbout';
import RouteEquipment from '../../routes/RouteEquipment'
import RouteBlog from '../../routes/RouteBlog'
import RouteAccount from '../../routes/RouteAccount'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import pathes from '../../constants/pathes';


function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path={pathes.home} element={<RouteHome />}></Route>
        <Route path={pathes.equipment} element={<RouteEquipment />}></Route>
        <Route path={pathes.blog} element={<RouteBlog />}></Route>
        <Route path={pathes.about} element={<RouteAbout />}></Route>
        <Route path={pathes.account} element={<RouteAccount />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
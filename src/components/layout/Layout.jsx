import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RouteHome from '../../routes/RouteHome';
import RouteAbout from '../../routes/RouteAbout';
import RouteEquipment from '../../routes/RouteEquipment';
import RouteBlog from '../../routes/RouteBlog';
import RouteAccount from '../../routes/RouteAccount';
import Header from '../layout/Header/index';
import Footer from '../layout/Footer/index';
import pathes from '../../constants/pathes';
import BackgroundMain from '../common/BackgroundMain/BackgroundMain';
import RouteContact from '../../routes/RouteContact';
import RoutePrivacyPolicy from '../../routes/RoutePrivacyPolicy';
import RouteJobs from '../../routes/RouteJobs';
import RouteTeam from '../../routes/RouteTeam';

function Layout() {
  return (
    <Router>
      <Header />
      <BackgroundMain />
      <main>
        <Routes>
          <Route index path={pathes.home} element={<RouteHome />} />
          <Route path={pathes.equipment} element={<RouteEquipment />} />
          <Route path={pathes.blog} element={<RouteBlog />} />
          <Route path={pathes.about} element={<RouteAbout />} />
          <Route path={pathes.account} element={<RouteAccount />} />
          <Route path={pathes.contact} element={<RouteContact />} />
          <Route path={pathes.privacyPolicy} element={<RoutePrivacyPolicy />} />
          <Route path={pathes.jobs} element={<RouteJobs />} />
          <Route path={pathes.team} element={<RouteTeam />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default Layout;
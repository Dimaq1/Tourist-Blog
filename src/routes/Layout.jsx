import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RouteHome from './RouteHome';
import RouteAbout from './RouteAbout';
import RouteEquipment from './RouteEquipment';
import RouteBlog from './RouteBlog';
import RouteAccount from './RouteAccount';
import Header from '../pages/Header/index';
import Footer from '../pages/Footer/index';
import pathes from '../constants/pathes';
import RouteContact from './RouteContact';
import RoutePrivacyPolicy from './RoutePrivacyPolicy';
import RouteJobs from './RouteJobs';
import RouteTeam from './RouteTeam';
import RouteBlogPost from './RouteBlogPost';
import Main from '../pages/Main';

function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index path={pathes.home} element={<RouteHome />} />
          <Route path={pathes.equipment} element={<RouteEquipment />} />
          <Route path={pathes.blog} element={<RouteBlog />} />
          <Route path={pathes.blogPost} element={<RouteBlogPost />} />
          <Route path={pathes.about} element={<RouteAbout />} />
          <Route path={pathes.account} element={<RouteAccount />} />
          <Route path={pathes.contact} element={<RouteContact />} />
          <Route path={pathes.privacyPolicy} element={<RoutePrivacyPolicy />} />
          <Route path={pathes.jobs} element={<RouteJobs />} />
          <Route path={pathes.team} element={<RouteTeam />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Layout;
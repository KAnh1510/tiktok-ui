import Routesconfig from "~/config/routes";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

// layouts
import { HeaderOnly } from "~/layouts";

const publicRoutes = [
  { path: Routesconfig.home, component: Home },
  { path: Routesconfig.following, component: Following },
  { path: Routesconfig.profile, component: Profile },
  { path: Routesconfig.upload, component: Upload, layout: HeaderOnly },
  { path: Routesconfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

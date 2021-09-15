const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  { path: ["/news"], 
    exact: false, 
    component: "News" 
  },
  { path: ["/contact"], 
    exact: false,
    component: "Contact" 
  },
  {
    path: ["/about"],
    exact: false,
    component: "About",
  },
  {
    path: ["/login"],
    exact: false,
    component: "Login"
  }
];

export default routes;

let siteNames = [];
const myProjectsAnchor = document.querySelectorAll(
  ".my-project > .live-version"
);
const myProjects = document.querySelectorAll(".my-project");

for (let i = 0; i < myProjects.length; i++) {
  siteNames.push(myProjectsAnchor[i].href);
  myProjects[i].addEventListener(
    "click",
    () => (window.location = siteNames[i])
  );
}

/**
 * @typedef {Object} Route
 * @property {string} name - The display name of the route.
 * @property {string} link - The URL or file path the route points to.
 */

/**
 * A list of application routes used for navigation.
 * Each route contains a name and a corresponding link.
 * 
 * @type {Route[]}
 */
const routes = [
    { name: "about us", link: "./about.html" },
    { name: "services", link: "./services.html" },
    { name: "works", link: "./works.html" },
    { name: "blog", link: "./blog.html" },
    { name: "contact", link: "./contact.html" },
];

export default routes;

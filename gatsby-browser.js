const React = require("react");
require("normalize.css");
require("boxicons/css/boxicons.min.css");
require("./src/sass/main.scss");
require("@fortawesome/fontawesome-free/css/all.min.css");
const Layout = require("./src/components/Layout").default;
const SiteContextProvider = require("./src/context").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <SiteContextProvider>
      <Layout {...props}>{element}</Layout>
    </SiteContextProvider>
  );
};

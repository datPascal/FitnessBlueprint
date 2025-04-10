/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  tailwind: true,
  postcss: true,
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};

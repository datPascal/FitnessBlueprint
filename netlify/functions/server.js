// Netlify function for Remix
const { createRequestHandler } = require("@remix-run/netlify");

// Import the build file directly
let build;
try {
  build = require('../../.netlify/functions-internal/server');
} catch (error) {
  console.error("Failed to load build:", error);
  throw error;
}

// Create the request handler
exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext(event, context) {
    // Get auth token from event headers
    let netlifyGraphToken;
    let rawAuthorizationString;

    if (event.authlifyToken != null) {
      netlifyGraphToken = event.authlifyToken;
    }

    const authHeader = event.headers["authorization"];
    const graphSignatureHeader = event.headers["x-netlify-graph-signature"];

    if (authHeader != null && /Bearer /gi.test(authHeader)) {
      rawAuthorizationString = authHeader.split(" ")[1];
    }

    const loadContext = {
      clientNetlifyGraphAccessToken: rawAuthorizationString,
      netlifyGraphToken: netlifyGraphToken,
      netlifyGraphSignature: graphSignatureHeader,
    };

    // Remove keys with undefined values
    Object.keys(loadContext).forEach((key) => {
      if (loadContext[key] == null) {
        delete loadContext[key];
      }
    });

    return loadContext;
  }
});
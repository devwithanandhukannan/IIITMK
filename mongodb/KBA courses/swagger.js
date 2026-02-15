import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "KBA API",
      version: "1.0.0",
    },
  },
  apis: ["./server.js", "./routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

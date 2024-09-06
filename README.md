### Node.js Project for Front-End Practice

This is a basic project built with Node.js, Express, MongoDB, and TypeScript to practice working with various front-end technologies.

---
Online API: [https://node-express-mongo-typescript.onrender.com](https://node-express-mongo-typescript.onrender.com)
*The first time will take approximately 20 seconds because the server is in sleep mode.*

***Main Routes***

**Auth**
- [POST] /auth/register
- [POST] /auth/login

**Product (without authentication)**
- [GET]     /api/v1/product
- [GET]     /api/v1/product/:id
- [POST]    /api/v1/product
- [PUT]     /api/v1/product/:id
- [DELETE]  /api/v1/product/:id

**Product (with authentication)**
- [GET]     /api/v2/product
- [GET]     /api/v2/product/:id
- [POST]    /api/v2/product
- [PUT]     /api/v2/product/:id
- [DELETE]  /api/v2/product/:id

---

**Running the Project**

1. **Development Mode**
```sh
npm run dev
```

2. **Building the Project**
```sh
npm run build
```

3. **Starting the Project**
```sh
npm start
```

---

I recommend using the Postman collection, which is already prepared for testing the project's functionality.

### Author

Fernando Dominguez

- __Email__: fernando.dom1992@gmail.com
- __LinkedIn__: [/in/fernando-dominguez1992/](https://www.linkedin.com/in/fernando-dominguez1992/)
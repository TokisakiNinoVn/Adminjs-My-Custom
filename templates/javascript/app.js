import express from 'express';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
const app = express();

const adminJs = new AdminJS({
  rootPath: '/admin', // Đường dẫn gốc cho AdminJS
});

const router = AdminJSExpress.buildRouter(adminJs);

app.use(adminJs.options.rootPath, router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`>> AdminJS Board: http://localhost:${PORT}/admin`);
});

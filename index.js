const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
    origin: '*', // Aquí puedes especificar dominios específicos en lugar de '*' para mayor seguridad
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Conexión a MongoDB
const dbURI = process.env.DB_URI || 'mongodb+srv://diegod7:wnRKITEJ08jwU7UJ@powerconsulting.zva8cz7.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

// Modelos
require('./src/models/Employee');
require('./src/models/Project');
require('./src/models/Aportador');
require('./src/models/Residente');
require('./src/models/Aporte');

// Rutas
const employeeRoutes = require('./src/routes/employees.routes');
const projectRoutes = require('./src/routes/projects.routes');
const aportadorRoutes = require('./src/routes/aportadores.routes');
const residenteRoutes = require('./src/routes/residentes.routes');
const aporteRoutes = require('./src/routes/aporte.routes');

app.use('/employees', employeeRoutes);
app.use('/projects', projectRoutes);
app.use('/aportadores', aportadorRoutes);
app.use('/residentes', residenteRoutes);
app.use('/aportes', aporteRoutes);

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta a tus archivos de rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

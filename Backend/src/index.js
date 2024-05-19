
// Start Generation Here
require('./database');
const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('prueba 4000');
});


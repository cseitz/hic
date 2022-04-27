try {
    require('express');
} catch(e) {
    require('child_process').execSync('npm install', {
        stdio: 'inherit'
    });
}

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/files', {
    extensions: ['html']
}))

app.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
    console.log('Press Ctrl + C to quit');
})
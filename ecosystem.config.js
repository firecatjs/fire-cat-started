const { name } = require('./package.json');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, './app/index.js'),
      instances: 1 || require('os').cpus().length,
      autorestart: true,
      // watch: true,
      env_production: {
        NODE_ENV: 'prod',
      }
    }
  ]
};
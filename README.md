# FireCat Started
FireCat Project Template

## Run
`npm run dev`

## Build

`npm run build`

output

```bash
dist
└── app
   ├──...
   └──index.js
├── .env
├── ecosystem.config.js
└── package.json
```

## Deploy
### Deploy by pm2

```bash
cd dist

yarn

pm2 start ecosystem.config.js
```

### Deploy by docker

```bash
docker build -t your-app-name .

docker run -p 3000:3000 your-app-name
```
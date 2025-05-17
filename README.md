
Your City's CryptoArt Community

# Bitbasel

## Description

Frontend part on NextJS for [Bitbasel](https://app.bitbasel.miami)

## Deployment

- Need info

## Main dependency

- NextJS (^12.0.10)
- MobX (^6.6)
- Axios
- Ant Design
- React Helmet
- Prettier & ESLint

## State management

- `/src/store` - Root MobX folder
- `/src/store/StoreProvider.js` - Root store and HOC provider
- `/src/redux/HomeStore/` - Main page store
- `/src/redux/DebugStore.js/` - Store for debug and testing

## SEO management

- `/src/services/getSEOOptions.js` - generating SEO options
- `/src/constants/routes.js` - SEO settings for different pages

## Requirements

- Installed [NodeJS](https://nodejs.org/uk/) v16.13.0

## How to start

- Download dependencies via YARN `yarn`
- To start local build run `yarn dev`

## How to lint/prettier

- `yarn prettier`
- `yarn lint`

## Environment variables

- `API` - Url of API
- `BASE_URL` - Base URL

Located in: `/.env` , `/.env.production` , `/.env.development`

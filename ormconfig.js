// eslint-disable-next-line @typescript-eslint/no-var-requires
const process = require('process');

const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'example';

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 7770,
  username,
  password,
  database: 'restaurantdb',
  synchronize: true, // dev
  dropSchema: false, // dev
  logging: true,
  entities: [
    __dirname + '/src/**/*.entity.ts',
    __dirname + '/dist/**/*.entity.js',
  ],
  migrations: ['migrations/**/*.ts'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'migrations',
    subscribersDir: 'subscriber',
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const process = require('process');
console.log(22, process.env);
console.log(22, process.env.POSTGRES_HOST);
module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
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

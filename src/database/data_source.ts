import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  entities: ['dist/*/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  database: 'doc_manager',
});

export default dataSource;

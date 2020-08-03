
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      name: 'docker',
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'lerndb',
      entities: [
          'dist/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
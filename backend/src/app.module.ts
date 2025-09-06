import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';  // adjust path
import { User } from './entities/user.model';        

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,
      envFilePath: '../.env',
     }),
    

    SequelizeModule.forRoot({
      dialect: 'mysql', // or your DB
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User],
      autoLoadModels: true,
      synchronize: true,  // careful in production
    }),
    AuthModule,
  ],
})
export class AppModule {}

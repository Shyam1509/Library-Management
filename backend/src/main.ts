import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// ⬇️ Auto DB + Migration
import { initDatabase } from './database-init';

async function bootstrap() {
  // 1. Init database & run migrations before app starts
  await initDatabase();

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // 2. Swagger Config
  const config = new DocumentBuilder()
    .setTitle('Library Management API')
    .setDescription('API for managing users, books, and transactions')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
        description: 'Enter your JWT token',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  

  // Optional: Mark some routes as public (skip JWT)
  const publicRoutes = ['/auth/login', '/auth/register'];
  Object.entries(document.paths).forEach(([path, pathItem]: [string, any]) => {
    Object.keys(pathItem).forEach((method) => {
      const isPublicRoute = publicRoutes.some((publicPath) =>
        path.toLowerCase().includes(publicPath.toLowerCase()),
      );

      if (!isPublicRoute) {
        pathItem[method].security = [{ 'JWT-auth': [] }];
      } else {
        delete pathItem[method].security;
      }
    });
  });

  SwaggerModule.setup('/', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      security: [{ 'JWT-auth': [] }],
    },
  });

  // 3. Global Pipes
  app.useGlobalPipes(new ValidationPipe());

  // 4. Enable CORS
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
    exposedHeaders: ['Authorization'],
  });

  // 5. Start app
  await app.listen(process.env.PORT || 3500, '0.0.0.0');
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 3500}`);
}
bootstrap();

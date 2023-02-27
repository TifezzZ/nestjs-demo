/*
 * @Author: TifezzZ
 * @Date: 2023-02
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-02
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/game');
  await app.listen(3000);
}
bootstrap();

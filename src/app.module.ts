/*
 * @Author: TifezzZ
 * @Date: 2023-02
 * @LastEditors: yujingbo
 * @LastEditTime: 2023-03
 * @Description:
 */
import { Module } from '@nestjs/common';
import { GenshinModule } from './genshin/genshin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenshinController } from './genshin/genshin.controller';
import { GenshinService } from './genshin/genshin.service';

// @Module({
//   imports: [GenshinModule],
// })
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: '1.116.165.62', // 数据库的连接地址host
      port: 3306, // 数据库的端口 3306
      username: 'root', // 连接账号
      password: '123456', // 连接密码
      database: 'test_db', // 连接的库
      retryDelay: 500, // 重试连接数据库间隔
      retryAttempts: 3, // 允许重连次数
    }),
  ],
  controllers: [GenshinController],
  providers: [GenshinService],
})
export class AppModule {}

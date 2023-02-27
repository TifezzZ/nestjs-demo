/*
 * @Author: TifezzZ
 * @Date: 2023-02
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-02
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';

@Controller('genshin')
export class GenshinController {
  @Get()
  getCharacter(): any {
    return {
      code: 0,
      data: ['胡桃', '绫华'],
      msg: '请求成功',
    };
  }
}

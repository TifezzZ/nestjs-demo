/*
 * @Author: TifezzZ
 * @Date: 2023-02
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-03
 * @Description:
 */
import { Controller, Get, Post, Request, Query, Req } from '@nestjs/common';
import { GenshinService } from './genshin.service';

@Controller('genshin')
export class GenshinController {
  constructor(private genshinService: GenshinService) {}

  @Get()
  getCharacter(): any {
    return this.genshinService.getCharacter();
  }

  @Post('/add')
  addCharacter(): any {
    return this.genshinService.addCharacter();
  }

  @Get('/getCharacterById')
  getCharacterById(@Query() query) {
    const id = parseInt(query.id);
    return this.genshinService.getCharacterById(id);
  }

  @Get('/getCharacterById/:id/:name')
  findCharacterById(@Req() req) {
    console.log(req.params.name);
    const id = parseInt(req.params.id);
    return this.genshinService.getCharacterById(id);
  }
}

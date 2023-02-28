import { Injectable } from '@nestjs/common';

@Injectable()
export class GenshinService {
  getCharacter(): any {
    return {
      code: 0,
      data: ['胡桃', '绫华'],
      msg: '请求成功',
    };
  }

  addCharacter() {
    return {
      code: 200,
      data: { id: 1, name: '胡桃', age: 18 },
      msg: '添加成功',
    };
  }

  getCharacterById(id: number) {
    switch (id) {
      case 1:
        return { id: 1, name: '胡桃', age: 18 };
      case 2:
        return { id: 2, name: '胡桃2', age: 18 };
      case 3:
        return { id: 3, name: '胡桃3', age: 18 };
    }
  }
}

import { ChineseModule } from './chinese.module';

describe('ChineseModule', () => {
  let chineseModule: ChineseModule;

  beforeEach(() => {
    chineseModule = new ChineseModule();
  });

  it('should create an instance', () => {
    expect(chineseModule).toBeTruthy();
  });
});

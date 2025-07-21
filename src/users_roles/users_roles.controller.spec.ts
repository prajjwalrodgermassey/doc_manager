import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolesController } from './users_roles.controller';
import { UsersRolesService } from './users_roles.service';

describe('UsersRolesController', () => {
  let controller: UsersRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRolesController],
      providers: [UsersRolesService],
    }).compile();

    controller = module.get<UsersRolesController>(UsersRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

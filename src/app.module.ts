import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { DocumentsModule } from './documents/documents.module';
import { RolesPermissionsModule } from './roles_permissions/roles_permissions.module';
import { UsersRolesModule } from './users_roles/users_roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'doc_manager',
      entities: ['dist/*/entities/*.entity.js'],
      migrations: ['dist/migrations/*.js'],
    }),
    UsersModule,
    RolesModule,
    PermissionsModule,
    DocumentsModule,
    RolesPermissionsModule,
    UsersRolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

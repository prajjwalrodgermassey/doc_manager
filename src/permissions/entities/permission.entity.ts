import { RolesPermissions } from 'src/roles_permissions/entities/roles_permissions.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  permission_id: number;

  @Column('varchar')
  permission_name: string;

  @Column('varchar')
  permission_description: string;

  @Column('varchar')
  created_by: string;

  @Column('varchar')
  updated_by: string;

  @Column('varchar', { nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: number;

  @UpdateDateColumn()
  updated_at: number;

  @DeleteDateColumn()
  deleted_at: number;

  @OneToMany(
    () => RolesPermissions,
    (role_permission) => role_permission.permission,
  )
  roles_permissions: RolesPermissions[];
}

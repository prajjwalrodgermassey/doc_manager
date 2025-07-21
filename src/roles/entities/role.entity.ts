import { RolesPermissions } from 'src/roles_permissions/entities/roles_permissions.entity';
import { UsersRoles } from 'src/users_roles/entities/users_role.entity';
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
export class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column('varchar')
  role_name: string;

  @Column('varchar')
  role_description: string;

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

  @OneToMany(() => RolesPermissions, (role_permission) => role_permission.role)
  roles_permissions: RolesPermissions[];

  @OneToMany(() => UsersRoles, (user_role) => user_role.role)
  users_roles: UsersRoles[];

  //   @ManyToMany(() => Permission)
  //   @JoinTable({
  //     name: 'roles_permissions',
  //     joinColumn: {
  //       name: 'role_id',
  //       referencedColumnName: 'role_id',
  //     },
  //     inverseJoinColumn: {
  //       name: 'permission_id',
  //       referencedColumnName: 'permission_id',
  //     },
  //   })
  //   permissions: Permission[];
}

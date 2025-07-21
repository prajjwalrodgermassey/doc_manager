import { Permission } from 'src/permissions/entities/permission.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  // PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RolesPermissions {
  @PrimaryColumn('int')
  role_id: number;

  @PrimaryColumn('int')
  permission_id: number;

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

  @ManyToOne(() => Role, (ref_role) => ref_role.roles_permissions)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'role_id' })
  role: Role;

  @ManyToOne(
    () => Permission,
    (ref_permission) => ref_permission.roles_permissions,
  )
  @JoinColumn({ name: 'permission_id', referencedColumnName: 'permission_id' })
  permission: Permission;
}

import { Role } from 'src/roles/entities/role.entity';
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
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  email: string;

  @Column('int')
  age: number;

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

  @OneToMany(() => UsersRoles, (user_role) => user_role.user)
  users_roles: UsersRoles[];

  // @ManyToMany(() => Role)
  // @JoinTable({
  //   name: 'users_roles',
  //   joinColumn: {
  //     name: 'user_id',
  //     referencedColumnName: 'user_id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'role_id',
  //     referencedColumnName: 'role_id',
  //   },
  // })
  role: Role;
}

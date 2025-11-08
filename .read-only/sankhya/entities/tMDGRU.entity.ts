import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { TmdvarEntity } from './tMDVAR.entity';

@Index('PK_TMDGRU', ['codgrupo'], { unique: true })
@Entity('TMDGRU', { schema: 'SANKHYA' })
export class TmdgruEntity {
  @Column('int', { primary: true, name: 'CODGRUPO' })
  codgrupo: number;

  @Column('char', { name: 'DESCRGRUPO', length: 40 })
  descrgrupo: string;

  @Column('int', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('datetime', {
    name: 'DTALTER',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtalter: Date;

  @ManyToMany(() => TmdvarEntity, (tmdvarEntity) => tmdvarEntity.tmdgrus)
  @JoinTable({
    name: 'TMDGRV',
    joinColumns: [{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }],
    inverseJoinColumns: [{ name: 'CODVAR', referencedColumnName: 'codvar' }],
    schema: 'SANKHYA',
  })
  tmdvars: TmdvarEntity[];
}

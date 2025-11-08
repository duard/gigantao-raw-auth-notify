import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfphisEntity } from './tFPHIS.entity';

@Index('PK_TFPGHO', ['codgrupooco'], { unique: true })
@Entity('TFPGHO', { schema: 'SANKHYA' })
export class TfpghoEntity {
  @Column('int', { primary: true, name: 'CODGRUPOOCO' })
  codgrupooco: number;

  @Column('varchar', { name: 'DESCRGRUPOOCO', length: 50 })
  descrgrupooco: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('int', { name: 'CODGRUPOOCOPAI' })
  codgrupoocopai: number;

  @Column('int', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'MODULO', length: 10, default: () => "'SSSSSSSSSS'" })
  modulo: string;

  @OneToMany(() => TfphisEntity, (tfphisEntity) => tfphisEntity.codgrupooco)
  tfphis: TfphisEntity[];
}

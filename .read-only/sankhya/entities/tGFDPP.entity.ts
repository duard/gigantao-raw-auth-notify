import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfdfdEntity } from './tGFDFD.entity';

@Index('PK_TGFDPP', ['codparc', 'coddepend'], { unique: true })
@Entity('TGFDPP', { schema: 'SANKHYA' })
export class TgfdppEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODDEPEND' })
  coddepend: number;

  @Column('varchar', { name: 'NOME', length: 40 })
  nome: string;

  @Column('varchar', { name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'DEPENDIR', nullable: true, length: 1 })
  dependir: string | null;

  @Column('varchar', { name: 'ESTUDANTE', nullable: true, length: 1 })
  estudante: string | null;

  @Column('datetime', { name: 'DTINIVIG' })
  dtinivig: Date;

  @Column('datetime', { name: 'DTFIMVIG', nullable: true })
  dtfimvig: Date | null;

  @Column('smallint', { name: 'RELACIONAMENTO', nullable: true })
  relacionamento: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 30 })
  descricao: string | null;

  @OneToMany(() => TgfdfdEntity, (tgfdfdEntity) => tgfdfdEntity.tgfdpp)
  tgfdfds: TgfdfdEntity[];
}

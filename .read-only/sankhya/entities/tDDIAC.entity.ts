import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDIAC', ['idacesso', 'sigla'], { unique: true })
@Entity('TDDIAC', { schema: 'SANKHYA' })
export class TddiacEntity {
  @Column('varchar', { primary: true, name: 'IDACESSO', length: 100 })
  idacesso: string;

  @Column('varchar', { primary: true, name: 'SIGLA', length: 10 })
  sigla: string;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;
}

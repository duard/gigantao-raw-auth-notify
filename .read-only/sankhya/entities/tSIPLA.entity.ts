import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIPLA', ['numplan', 'codplan'], { unique: true })
@Entity('TSIPLA', { schema: 'SANKHYA' })
export class TsiplaEntity {
  @Column('int', { primary: true, name: 'NUMPLAN' })
  numplan: number;

  @Column('int', { primary: true, name: 'CODPLAN' })
  codplan: number;

  @Column('int', { name: 'CODPLANPAI', nullable: true })
  codplanpai: number | null;

  @Column('varchar', { name: 'DESCRPLAN', nullable: true, length: 30 })
  descrplan: string | null;

  @Column('smallint', { name: 'GRAU', nullable: true })
  grau: number | null;

  @Column('varchar', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('varchar', { name: 'NOMTABELA', nullable: true, length: 10 })
  nomtabela: string | null;

  @Column('text', { name: 'SCRIPT', nullable: true })
  script: string | null;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true, default: () => '(0)' })
  codusu: number | null;
}

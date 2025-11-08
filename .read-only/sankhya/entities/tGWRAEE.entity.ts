import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWRAEE', ['codraee', 'codprod', 'sequencia', 'nunota'], {
  unique: true,
})
@Entity('TGWRAEE', { schema: 'SANKHYA' })
export class TgwraeeEntity {
  @Column('int', { primary: true, name: 'CODRAEE' })
  codraee: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', { name: 'DESCRPROD', nullable: true, length: 90 })
  descrprod: string | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 11 })
  controle: string | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('varchar', { name: 'REFERENCIA', nullable: true, length: 50 })
  referencia: string | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 6 })
  unidade: string | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 3103 })
  situacao: string | null;

  @Column('varchar', { name: 'SOLUCAO', nullable: true, length: 3103 })
  solucao: string | null;

  @Column('varchar', { name: 'ROTINA', nullable: true, length: 255 })
  rotina: string | null;

  @Column('varchar', { name: 'CHAVEROTINA', nullable: true, length: 255 })
  chaverotina: string | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;
}

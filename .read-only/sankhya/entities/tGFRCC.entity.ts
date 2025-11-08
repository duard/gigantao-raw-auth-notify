import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRCC', ['nunota', 'sequencia'], { unique: true })
@Entity('TGFRCC', { schema: 'SANKHYA' })
export class TgfrccEntity {
  @Column('int', { name: 'CODMAQ' })
  codmaq: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODVEND' })
  codvend: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'VLRUNIT', precision: 53 })
  vlrunit: number;

  @Column('char', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('varchar', { name: 'CONTROLE', length: 100 })
  controle: string;

  @Column('float', { name: 'VLRDESC', precision: 53 })
  vlrdesc: number;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFITERATV', ['nunota', 'sequencia', 'codveiculo'], { unique: true })
@Entity('TGFITERATV', { schema: 'SANKHYA' })
export class TgfiteratvEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}

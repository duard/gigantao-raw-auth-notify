import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFRER', ['codemp', 'codprod'], { unique: true })
@Entity('TGFRER', { schema: 'SANKHYA' })
export class TgfrerEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'TIPOERRO', nullable: true, length: 2 })
  tipoerro: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CHAVE', nullable: true })
  chave: number | null;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;
}

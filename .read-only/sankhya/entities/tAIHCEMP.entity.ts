import { Column, Entity, Index } from 'typeorm';

@Index('PK_TAIHCEMP', ['codemp', 'sequencia'], { unique: true })
@Entity('TAIHCEMP', { schema: 'SANKHYA' })
export class TaihcempEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOMECAMPO', nullable: true, length: 50 })
  nomecampo: string | null;

  @Column('varchar', { name: 'OLDVALUE', nullable: true, length: 300 })
  oldvalue: string | null;

  @Column('varchar', { name: 'NEWVALUE', nullable: true, length: 300 })
  newvalue: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}

import { Column, Entity, Index } from 'typeorm';

@Index('TGWESI_PK', ['nuajuste', 'codprod', 'controle'], { unique: true })
@Entity('TGWESI', { schema: 'SANKHYA' })
export class TgwesiEntity {
  @Column('int', { primary: true, name: 'NUAJUSTE' })
  nuajuste: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'QTDESTVOLPAD', nullable: true, precision: 53 })
  qtdestvolpad: number | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;
}

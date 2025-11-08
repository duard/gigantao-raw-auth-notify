import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TRIETC',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'natrend', 'codreceita'],
  {
    unique: true,
  },
)
@Entity('TRIETC', { schema: 'SANKHYA' })
export class TrietcEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NATREND' })
  natrend: number;

  @Column('int', { primary: true, name: 'CODRECEITA' })
  codreceita: number;

  @Column('float', { name: 'VLRTRIBRETINF', nullable: true, precision: 53 })
  vlrtribretinf: number | null;

  @Column('float', { name: 'VLRTRIBEXISUSINF', nullable: true, precision: 53 })
  vlrtribexisusinf: number | null;

  @Column('float', { name: 'VLRTRIBRETCALCRFB', nullable: true, precision: 53 })
  vlrtribretcalcrfb: number | null;

  @Column('float', {
    name: 'VLRTRIBEXISUSPCALCRFB',
    nullable: true,
    precision: 53,
  })
  vlrtribexisuspcalcrfb: number | null;

  @Column('float', {
    name: 'VLRTRIBRETCALCDCTFWEB',
    nullable: true,
    precision: 53,
  })
  vlrtribretcalcdctfweb: number | null;

  @Column('float', {
    name: 'VLRTRIBEXISUSPCALCDCTFWEB',
    nullable: true,
    precision: 53,
  })
  vlrtribexisuspcalcdctfweb: number | null;
}

import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TGWITTVAL',
  ['nutarefa', 'sequencia', 'codprod', 'controle', 'dtval'],
  { unique: true },
)
@Entity('TGWITTVAL', { schema: 'SANKHYA' })
export class TgwittvalEntity {
  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('datetime', { primary: true, name: 'DTVAL' })
  dtval: Date;

  @Column('float', {
    name: 'QUANTIDADEVOLPAD',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  quantidadevolpad: number | null;
}

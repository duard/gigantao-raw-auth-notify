import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2240Entity } from './tFPS2240.entity';

@Index(
  'PK_TFPS2240_RESPREG',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2240', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2240_RESPREG', { schema: 'SANKHYA' })
export class Tfps2240RespregEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2240', length: 100 })
  chave2240: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFRESP', nullable: true, length: 11 })
  cpfresp: string | null;

  @Column('varchar', { name: 'NISRESP', nullable: true, length: 11 })
  nisresp: string | null;

  @Column('varchar', { name: 'NMRESP', nullable: true, length: 70 })
  nmresp: string | null;

  @Column('smallint', { name: 'IDEOC', nullable: true })
  ideoc: number | null;

  @Column('varchar', { name: 'DSCOC', nullable: true, length: 20 })
  dscoc: string | null;

  @Column('varchar', { name: 'NROC', nullable: true, length: 14 })
  nroc: string | null;

  @Column('varchar', { name: 'UFOC', nullable: true, length: 2 })
  ufoc: string | null;

  @ManyToOne(
    () => Tfps2240Entity,
    (tfps2240Entity) => tfps2240Entity.tfps2240Respregs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2240', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2240Entity;
}

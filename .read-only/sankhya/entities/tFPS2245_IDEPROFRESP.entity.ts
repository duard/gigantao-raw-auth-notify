import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2245Entity } from './tFPS2245.entity';

@Index(
  'PK_TFPS2245_IDEPROFRESP',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'chave2245', 'chave'],
  {
    unique: true,
  },
)
@Entity('TFPS2245_IDEPROFRESP', { schema: 'SANKHYA' })
export class Tfps2245IdeprofrespEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2245', length: 100 })
  chave2245: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'CPFPROF', nullable: true, length: 11 })
  cpfprof: string | null;

  @Column('varchar', { name: 'NMPROF', nullable: true, length: 70 })
  nmprof: string | null;

  @Column('smallint', { name: 'TPPROF', nullable: true })
  tpprof: number | null;

  @Column('varchar', { name: 'MATRICULA', nullable: true, length: 30 })
  matricula: string | null;

  @Column('varchar', { name: 'FORMPROF', nullable: true, length: 255 })
  formprof: string | null;

  @Column('varchar', { name: 'CODCBO', nullable: true, length: 6 })
  codcbo: string | null;

  @Column('smallint', { name: 'NACPROF', nullable: true })
  nacprof: number | null;

  @ManyToOne(
    () => Tfps2245Entity,
    (tfps2245Entity) => tfps2245Entity.tfps2245Ideprofresps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVE2245', referencedColumnName: 'chave' },
  ])
  tfps2: Tfps2245Entity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps2501InfocrirrfEntity } from './tFPS2501_INFOCRIRRF.entity';

@Index(
  'PK_TFPS2501_INFOIR',
  [
    'codemp',
    'dtref',
    'tpamb',
    'chave2501',
    'sequencia',
    'chaveinfocrirrf',
    'chave',
  ],
  { unique: true },
)
@Entity('TFPS2501_INFOIR', { schema: 'SANKHYA' })
export class Tfps2501InfoirEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'TPAMB',
    length: 1,
    default: () => "'T'",
  })
  tpamb: string;

  @Column('varchar', { primary: true, name: 'CHAVE2501', length: 100 })
  chave2501: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CHAVEINFOCRIRRF', length: 100 })
  chaveinfocrirrf: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;

  @Column('float', { name: 'VRRENDTRIB', nullable: true, precision: 53 })
  vrrendtrib: number | null;

  @Column('float', { name: 'VRRENDTRIB13', nullable: true, precision: 53 })
  vrrendtrib13: number | null;

  @Column('float', { name: 'VRRENDMOLEGRAVE', nullable: true, precision: 53 })
  vrrendmolegrave: number | null;

  @Column('float', { name: 'VRRENDISEN65', nullable: true, precision: 53 })
  vrrendisen65: number | null;

  @Column('float', { name: 'VRJUROSMORA', nullable: true, precision: 53 })
  vrjurosmora: number | null;

  @Column('float', { name: 'VRRENDISENNTRIB', nullable: true, precision: 53 })
  vrrendisenntrib: number | null;

  @Column('varchar', { name: 'DESCISENNTRIB', nullable: true, length: 60 })
  descisenntrib: string | null;

  @Column('float', { name: 'VRPREVOFICIAL', nullable: true, precision: 53 })
  vrprevoficial: number | null;

  @Column('float', { name: 'VLRDIARIAS', nullable: true, precision: 53 })
  vlrdiarias: number | null;

  @Column('float', { name: 'VLRAUXMORADIA', nullable: true, precision: 53 })
  vlrauxmoradia: number | null;

  @Column('float', { name: 'VRPREVOFICIAL13', nullable: true, precision: 53 })
  vrprevoficial13: number | null;

  @Column('float', { name: 'VRJUROSMORA13', nullable: true, precision: 53 })
  vrjurosmora13: number | null;

  @Column('float', { name: 'VLRABONOPEC', nullable: true, precision: 53 })
  vlrabonopec: number | null;

  @Column('float', { name: 'VLRINDRESCONTRATO', nullable: true, precision: 53 })
  vlrindrescontrato: number | null;

  @Column('float', { name: 'VRRENDISEN65DEC', nullable: true, precision: 53 })
  vrrendisen65Dec: number | null;

  @Column('float', { name: 'VRRENDMOLEGRAVE13', nullable: true, precision: 53 })
  vrrendmolegrave13: number | null;

  @Column('float', { name: 'VLRAJUDACUSTO', nullable: true, precision: 53 })
  vlrajudacusto: number | null;

  @ManyToOne(
    () => Tfps2501InfocrirrfEntity,
    (tfps2501InfocrirrfEntity) => tfps2501InfocrirrfEntity.tfps2501Infoirs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'CHAVE2501', referencedColumnName: 'chave2501' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
    { name: 'CHAVEIDETRAB', referencedColumnName: 'chaveidetrab' },
    { name: 'CHAVEINFOCRIRRF', referencedColumnName: 'chave' },
  ])
  tfps2501Infocrirrf: Tfps2501InfocrirrfEntity;
}

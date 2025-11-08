import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriresEntity } from './tRIRES.entity';

@Index(
  'PK_TRIREADRES',
  ['codemp', 'dtref', 'tpamb', 'sequencia', 'cnpjassocdesp'],
  {
    unique: true,
  },
)
@Entity('TRIREADRES', { schema: 'SANKHYA' })
export class TrireadresEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'CNPJASSOCDESP', length: 14 })
  cnpjassocdesp: string;

  @Column('float', { name: 'VLRTOTALREPSIS', nullable: true, precision: 53 })
  vlrtotalrepsis: number | null;

  @Column('float', { name: 'VLRTOTALRETSIS', nullable: true, precision: 53 })
  vlrtotalretsis: number | null;

  @Column('float', { name: 'VLRTOTALNRETSIS', nullable: true, precision: 53 })
  vlrtotalnretsis: number | null;

  @Column('float', { name: 'VLRTOTALREPRET', nullable: true, precision: 53 })
  vlrtotalrepret: number | null;

  @Column('float', { name: 'VLRTOTALRETRET', nullable: true, precision: 53 })
  vlrtotalretret: number | null;

  @Column('float', { name: 'VLRTOTALNRETRET', nullable: true, precision: 53 })
  vlrtotalnretret: number | null;

  @ManyToOne(() => TriresEntity, (triresEntity) => triresEntity.trireadres, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
    { name: 'TPAMB', referencedColumnName: 'tpamb' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  trires: TriresEntity;
}

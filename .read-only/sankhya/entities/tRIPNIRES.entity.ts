import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TriresEntity } from './tRIRES.entity';

@Index('PK_TRIPNIRES', ['codemp', 'dtref', 'tpamb', 'sequencia', 'natrend'], {
  unique: true,
})
@Entity('TRIPNIRES', { schema: 'SANKHYA' })
export class TripniresEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'NATREND' })
  natrend: number;

  @Column('varchar', { name: 'CODRECDARF', nullable: true, length: 10 })
  codrecdarf: string | null;

  @Column('float', { name: 'VLRBASECALSIS', nullable: true, precision: 53 })
  vlrbasecalsis: number | null;

  @Column('float', {
    name: 'VLRBASECALEXISUSSIS',
    nullable: true,
    precision: 53,
  })
  vlrbasecalexisussis: number | null;

  @Column('float', { name: 'VLRTRIRETINFSIS', nullable: true, precision: 53 })
  vlrtriretinfsis: number | null;

  @Column('float', {
    name: 'VLRTRIEXISUSINFSIS',
    nullable: true,
    precision: 53,
  })
  vlrtriexisusinfsis: number | null;

  @Column('float', { name: 'VLRBASECALRET', nullable: true, precision: 53 })
  vlrbasecalret: number | null;

  @Column('float', {
    name: 'VLRBASECALEXISUSRET',
    nullable: true,
    precision: 53,
  })
  vlrbasecalexisusret: number | null;

  @Column('float', { name: 'VLRTRIRETINFRET', nullable: true, precision: 53 })
  vlrtriretinfret: number | null;

  @Column('float', {
    name: 'VLRTRIEXISUSINFRET',
    nullable: true,
    precision: 53,
  })
  vlrtriexisusinfret: number | null;

  @ManyToOne(() => TriresEntity, (triresEntity) => triresEntity.tripnires, {
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

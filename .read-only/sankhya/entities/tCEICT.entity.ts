import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCEICT', ['siglaict'], { unique: true })
@Entity('TCEICT', { schema: 'SANKHYA' })
export class TceictEntity {
  @Column('varchar', { primary: true, name: 'SIGLAICT', length: 3 })
  siglaict: string;

  @Column('varchar', { name: 'DESCRICT', length: 40 })
  descrict: string;

  @Column('varchar', { name: 'GRUPOICT', length: 1 })
  grupoict: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'TPRATFRETE', length: 1, default: () => "'P'" })
  tpratfrete: string;

  @Column('varchar', { name: 'TPRATSEGURO', length: 1, default: () => "'P'" })
  tpratseguro: string;

  @Column('varchar', { name: 'TPRATTHC', length: 1, default: () => "'P'" })
  tpratthc: string;

  @Column('varchar', { name: 'TPRATSISCOMEX', length: 1, default: () => "'V'" })
  tpratsiscomex: string;

  @Column('varchar', {
    name: 'TPRATOUTRASDESP',
    length: 1,
    default: () => "'V'",
  })
  tpratoutrasdesp: string;

  @Column('varchar', { name: 'OBSNOTANAC', nullable: true, length: 30 })
  obsnotanac: string | null;

  @Column('char', {
    name: 'ATUALFINIMP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  atualfinimp: string | null;

  @Column('char', { name: 'TPRATAFRMM', length: 1, default: () => "'P'" })
  tpratafrmm: string;
}

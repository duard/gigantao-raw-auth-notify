import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPTANP', ['nuptanp'], { unique: true })
@Index('TFPPTANP_I01', ['codemp', 'dtref'], {})
@Entity('TFPPTANP', { schema: 'SANKHYA' })
export class TfpptanpEntity {
  @Column('int', { primary: true, name: 'NUPTANP' })
  nuptanp: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('float', { name: 'VLRBASEREMUN', nullable: true, precision: 53 })
  vlrbaseremun: number | null;

  @Column('float', { name: 'VLRBASEREMUN13', nullable: true, precision: 53 })
  vlrbaseremun13: number | null;

  @Column('float', { name: 'VLRBASEFGTS', nullable: true, precision: 53 })
  vlrbasefgts: number | null;

  @Column('float', { name: 'VLRTOTDESCINSS', nullable: true, precision: 53 })
  vlrtotdescinss: number | null;

  @Column('float', { name: 'VLRBASEAPOS15', nullable: true, precision: 53 })
  vlrbaseapos15: number | null;

  @Column('float', { name: 'VLRBASEAPOS20', nullable: true, precision: 53 })
  vlrbaseapos20: number | null;

  @Column('float', { name: 'VLRBASEAPOS25', nullable: true, precision: 53 })
  vlrbaseapos25: number | null;
}

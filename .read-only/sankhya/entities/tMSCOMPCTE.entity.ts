import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSCOMPCTE', ['codemp', 'ordemcarga', 'nunota'], { unique: true })
@Entity('TMSCOMPCTE', { schema: 'SANKHYA' })
export class TmscompcteEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODEMPANT', nullable: true })
  codempant: number | null;

  @Column('int', { name: 'ORDEMCARGAANT', nullable: true })
  ordemcargaant: number | null;

  @Column('int', { name: 'CODPARCREMETENTE', nullable: true })
  codparcremetente: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @Column('float', { name: 'VLRNOTA', nullable: true, precision: 53 })
  vlrnota: number | null;

  @Column('datetime', { name: 'DHCOMPOSICAO', nullable: true })
  dhcomposicao: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}

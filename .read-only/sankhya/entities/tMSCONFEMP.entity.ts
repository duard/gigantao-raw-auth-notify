import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TMSCONFEMP', ['chave', 'codemp'], { unique: true })
@Entity('TMSCONFEMP', { schema: 'SANKHYA' })
export class TmsconfempEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'EXIGEFINAFRE', nullable: true, length: 10 })
  exigefinafre: string | null;

  @Column('int', { name: 'CODTIPCOBVALEABAST', nullable: true })
  codtipcobvaleabast: number | null;

  @Column('varchar', { name: 'IMPRIMIRXMLLOG', nullable: true, length: 10 })
  imprimirxmllog: string | null;

  @Column('varchar', { name: 'AMBIENTE', nullable: true, length: 10 })
  ambiente: string | null;

  @Column('int', { name: 'CODPARCFORNPAM', nullable: true })
  codparcfornpam: number | null;

  @Column('int', { name: 'CODTIPTIT', nullable: true })
  codtiptit: number | null;

  @Column('int', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('int', { name: 'CODTIPOPERBADIANT', nullable: true })
  codtipoperbadiant: number | null;

  @Column('int', { name: 'CODTIPOPERSAL', nullable: true })
  codtipopersal: number | null;

  @Column('varchar', { name: 'BLOQEFETIVDEPOSITO', nullable: true, length: 10 })
  bloqefetivdeposito: string | null;

  @Column('varchar', { name: 'USUARIOEFRETE', nullable: true, length: 100 })
  usuarioefrete: string | null;

  @Column('varchar', { name: 'TOKENEFRETE', nullable: true, length: 100 })
  tokenefrete: string | null;

  @Column('varchar', { name: 'IMPXMLLOGEFRETE', nullable: true, length: 10 })
  impxmllogefrete: string | null;

  @Column('varchar', { name: 'AMBIENTEEFRETE', nullable: true, length: 10 })
  ambienteefrete: string | null;

  @Column('int', { name: 'CODTIPTITEFRETE', nullable: true })
  codtiptitefrete: number | null;

  @Column('int', { name: 'CODCTABCOINTEFRETE', nullable: true })
  codctabcointefrete: number | null;

  @Column('varchar', { name: 'AMBIENTEPB', nullable: true, length: 10 })
  ambientepb: string | null;

  @Column('int', { name: 'CODPARCPB', nullable: true })
  codparcpb: number | null;

  @Column('varchar', { name: 'IMPXMLLOGPB', nullable: true, length: 10 })
  impxmllogpb: string | null;

  @Column('int', { name: 'CODCTABCOINTPB', nullable: true })
  codctabcointpb: number | null;

  @Column('int', { name: 'CODTIPTITPB', nullable: true })
  codtiptitpb: number | null;

  @Column('varchar', { name: 'EXIGEFINAFREEFRETE', nullable: true, length: 10 })
  exigefinafreefrete: string | null;

  @Column('varchar', { name: 'EXIGEFINAFREPB', nullable: true, length: 10 })
  exigefinafrepb: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsconfemps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}

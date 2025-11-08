import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGAPEA', ['codpesav'], { unique: true })
@Entity('TGAPEA', { schema: 'SANKHYA' })
export class TgapeaEntity {
  @Column('int', { primary: true, name: 'CODPESAV' })
  codpesav: number;

  @Column('varchar', { name: 'MOTORIS', nullable: true, length: 100 })
  motoris: string | null;

  @Column('varchar', { name: 'PLACA', nullable: true, length: 100 })
  placa: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('varchar', { name: 'PRODUTO', nullable: true, length: 100 })
  produto: string | null;

  @Column('datetime', { name: 'DHPEINIC', default: () => 'getdate()' })
  dhpeinic: Date;

  @Column('datetime', { name: 'DHPEFIM', nullable: true })
  dhpefim: Date | null;

  @Column('float', { name: 'PESINI', nullable: true, precision: 53 })
  pesini: number | null;

  @Column('float', { name: 'PESFIN', nullable: true, precision: 53 })
  pesfin: number | null;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('varchar', { name: 'PESAGEMMANUAL', nullable: true, length: 1 })
  pesagemmanual: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 100 })
  observacao: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'CODVEI', nullable: true })
  codvei: number | null;

  @Column('int', { name: 'KMINICIAL', nullable: true })
  kminicial: number | null;

  @Column('int', { name: 'KMFINAL', nullable: true })
  kmfinal: number | null;

  @Column('int', { name: 'KMPERCORRIDO', nullable: true })
  kmpercorrido: number | null;

  @Column('int', { name: 'PESODECLARADO', nullable: true })
  pesodeclarado: number | null;

  @Column('int', { name: 'CODMOTO', nullable: true })
  codmoto: number | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('int', { name: 'CODUSUPB', nullable: true })
  codusupb: number | null;

  @Column('int', { name: 'CODUSUTARA', nullable: true })
  codusutara: number | null;

  @Column('datetime', { name: 'DHPESAGEM', nullable: true })
  dhpesagem: Date | null;

  @Column('varchar', { name: 'NMBALTARA', nullable: true, length: 50 })
  nmbaltara: string | null;

  @Column('varchar', { name: 'NMBALPESBRUTO', nullable: true, length: 50 })
  nmbalpesbruto: string | null;

  @Column('varchar', { name: 'NOMEBALANCA', nullable: true, length: 50 })
  nomebalanca: string | null;

  @Column('smallint', { name: 'CODUSUCANCEL', nullable: true })
  codusucancel: number | null;

  @Column('datetime', { name: 'DHCANCEL', nullable: true })
  dhcancel: Date | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgapeas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgapeas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}

import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFTEF', ['nufin'], { unique: true })
@Index('TGFTEF_I01', ['numnsu'], {})
@Entity('TGFTEF', { schema: 'SANKHYA' })
export class TgftefEntity {
  @Column('smallint', { name: 'REDE', nullable: true })
  rede: number | null;

  @Column('smallint', { name: 'TIPODOC', nullable: true })
  tipodoc: number | null;

  @Column('varchar', { name: 'NUMCV', nullable: true, length: 15 })
  numcv: string | null;

  @Column('varchar', { name: 'NUMDOC', nullable: true, length: 15 })
  numdoc: string | null;

  @Column('varchar', { name: 'NUMNSU', nullable: true, length: 15 })
  numnsu: string | null;

  @Column('varchar', { name: 'NUMPV', nullable: true, length: 15 })
  numpv: string | null;

  @Column('varchar', { name: 'AUTORIZACAO', nullable: true, length: 15 })
  autorizacao: string | null;

  @Column('smallint', { name: 'DESDOBRAMENTO', nullable: true })
  desdobramento: number | null;

  @Column('datetime', { name: 'DTTRANSACAO', nullable: true })
  dttransacao: Date | null;

  @Column('float', { name: 'VLRTRANSACAO', nullable: true, precision: 53 })
  vlrtransacao: number | null;

  @Column('float', { name: 'VLRTAXA', nullable: true, precision: 53 })
  vlrtaxa: number | null;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('varchar', { name: 'BANDEIRA', nullable: true, length: 30 })
  bandeira: string | null;

  @Column('varchar', { name: 'CONFIRMADO', nullable: true, length: 1 })
  confirmado: string | null;

  @Column('text', { name: 'COMPROVANTE', nullable: true })
  comprovante: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'PROCESSO', nullable: true, length: 20 })
  processo: string | null;

  @Column('varchar', { name: 'NOMEREDE', nullable: true, length: 50 })
  nomerede: string | null;

  @Column('varchar', { name: 'NSUSEFAZ', nullable: true, length: 20 })
  nsusefaz: string | null;

  @Column('int', { name: 'CODRESPOSTA', nullable: true })
  codresposta: number | null;

  @Column('varchar', { name: 'BIN', nullable: true, length: 10 })
  bin: string | null;

  @Column('varchar', { name: 'DTEXPIRACAO', nullable: true, length: 10 })
  dtexpiracao: string | null;

  @Column('varchar', { name: 'DONOCARTAO', nullable: true, length: 100 })
  donocartao: string | null;

  @Column('varchar', { name: 'ULTIMOSDIGITOS', nullable: true, length: 10 })
  ultimosdigitos: string | null;

  @Column('int', { name: 'IDENTIFICACAOTEF', nullable: true })
  identificacaotef: number | null;

  @Column('varchar', { name: 'OPERACAOTEF', nullable: true, length: 10 })
  operacaotef: string | null;

  @OneToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgftef, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin2: TgffinEntity;
}

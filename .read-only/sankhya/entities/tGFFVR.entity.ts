import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcvrEntity } from './tGFCVR.entity';

@Index('PK_TGFFVR', ['nufvr'], { unique: true })
@Entity('TGFFVR', { schema: 'SANKHYA' })
export class TgffvrEntity {
  @Column('int', { primary: true, name: 'NUFVR' })
  nufvr: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('smallint', { name: 'CODTIPTIT' })
  codtiptit: number;

  @Column('smallint', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('smallint', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('datetime', { name: 'DHTIPOPER', nullable: true })
  dhtipoper: Date | null;

  @Column('datetime', { name: 'DTVENC', nullable: true })
  dtvenc: Date | null;

  @Column('datetime', { name: 'DTNEG', nullable: true })
  dtneg: Date | null;

  @Column('datetime', { name: 'DTENTSAI', nullable: true })
  dtentsai: Date | null;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 1 })
  origem: string | null;

  @Column('varchar', { name: 'PROVISAO', nullable: true, length: 1 })
  provisao: string | null;

  @Column('smallint', { name: 'RECDESP', nullable: true })
  recdesp: number | null;

  @Column('varchar', { name: 'DESDOBRAMENTO', nullable: true, length: 2 })
  desdobramento: string | null;

  @Column('varchar', { name: 'DESDOBDULP', nullable: true, length: 2 })
  desdobdulp: string | null;

  @Column('float', { name: 'VLRDESDOB', precision: 53, default: () => '(0)' })
  vlrdesdob: number;

  @Column('float', { name: 'CARTAODESC', precision: 53, default: () => '(0)' })
  cartaodesc: number;

  @Column('float', { name: 'DESPCART', precision: 53, default: () => '(0)' })
  despcart: number;

  @Column('varchar', { name: 'HISTORICO', nullable: true, length: 255 })
  historico: string | null;

  @ManyToOne(() => TgfcvrEntity, (tgfcvrEntity) => tgfcvrEntity.tgffvrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCVR', referencedColumnName: 'nucvr' }])
  nucvr: TgfcvrEntity;
}

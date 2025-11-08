import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfcfoEntity } from './tGFCFO.entity';

@Index('PK_TGFLIT', ['codemp', 'dtmov', 'uf', 'codcfo'], { unique: true })
@Entity('TGFLIT', { schema: 'SANKHYA' })
export class TgflitEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('char', { primary: true, name: 'UF', length: 2 })
  uf: string;

  @Column('int', { primary: true, name: 'CODCFO' })
  codcfo: number;

  @Column('money', { name: 'BASEICMS', nullable: true })
  baseicms: number | null;

  @Column('money', { name: 'VLRICMS', nullable: true })
  vlricms: number | null;

  @Column('money', { name: 'ISENTASICMS', nullable: true })
  isentasicms: number | null;

  @Column('money', { name: 'OUTRASICMS', nullable: true })
  outrasicms: number | null;

  @Column('money', { name: 'BASERETENCAO', nullable: true })
  baseretencao: number | null;

  @Column('money', { name: 'ICMSRETENCAO', nullable: true })
  icmsretencao: number | null;

  @Column('money', { name: 'BASEIPI', nullable: true })
  baseipi: number | null;

  @Column('money', { name: 'VLRIPI', nullable: true })
  vlripi: number | null;

  @Column('money', { name: 'ISENTASIPI', nullable: true })
  isentasipi: number | null;

  @Column('money', { name: 'OUTRASIPI', nullable: true })
  outrasipi: number | null;

  @Column('money', { name: 'VLRCTB', nullable: true })
  vlrctb: number | null;

  @Column('char', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  digitado: string | null;

  @Column('money', { name: 'DIFICMS', nullable: true })
  dificms: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgflits)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgflits)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo2: TgfcfoEntity;
}

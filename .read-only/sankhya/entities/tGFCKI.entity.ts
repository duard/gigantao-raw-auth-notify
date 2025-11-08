import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfckcEntity } from './tGFCKC.entity';

@Index('PK_TGFCKI', ['nuckc', 'seqcki'], { unique: true })
@Entity('TGFCKI', { schema: 'SANKHYA' })
export class TgfckiEntity {
  @Column('int', { primary: true, name: 'NUCKC' })
  nuckc: number;

  @Column('smallint', { primary: true, name: 'SEQCKI' })
  seqcki: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'USOPROD', nullable: true, length: 1 })
  usoprod: string | null;

  @Column('varchar', { name: 'CODBARRA', length: 25 })
  codbarra: string;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { name: 'CODLOCALORIG', default: () => '(0)' })
  codlocalorig: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'VLRUNIT', precision: 53, default: () => '(0)' })
  vlrunit: number;

  @Column('float', { name: 'VLRTOT', precision: 53, default: () => '(0)' })
  vlrtot: number;

  @Column('float', { name: 'VLRDESC', precision: 53, default: () => '(0)' })
  vlrdesc: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('int', { name: 'NUTAB', nullable: true })
  nutab: number | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'L'" })
  status: string;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;

  @Column('float', { name: 'PRECOBASE', nullable: true, precision: 53 })
  precobase: number | null;

  @Column('int', { name: 'NUPROMOCAO', nullable: true })
  nupromocao: number | null;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'VLRIPI', nullable: true, precision: 53 })
  vlripi: number | null;

  @Column('float', { name: 'VLRSUBST', nullable: true, precision: 53 })
  vlrsubst: number | null;

  @Column('float', { name: 'BASESUBSTIT', nullable: true, precision: 53 })
  basesubstit: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'BASEISS', nullable: true, precision: 53 })
  baseiss: number | null;

  @Column('float', { name: 'VLRISS', nullable: true, precision: 53 })
  vlriss: number | null;

  @Column('float', { name: 'BASEIPI', nullable: true, precision: 53 })
  baseipi: number | null;

  @ManyToOne(() => TgfckcEntity, (tgfckcEntity) => tgfckcEntity.tgfckis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCKC', referencedColumnName: 'nuckc' }])
  nuckc2: TgfckcEntity;
}

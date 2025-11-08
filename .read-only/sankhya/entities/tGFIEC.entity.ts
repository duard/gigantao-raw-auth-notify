import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfecfEntity } from './tGFECF.entity';
import { TgfcfoEntity } from './tGFCFO.entity';

@Index('PK_TGFIEC', ['nuecf', 'sequencia'], { unique: true })
@Index('TGFIEC_I01', ['cfo'], {})
@Entity('TGFIEC', { schema: 'SANKHYA' })
export class TgfiecEntity {
  @Column('int', { primary: true, name: 'NUECF' })
  nuecf: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TRIBUTACAO', nullable: true, length: 7 })
  tributacao: string | null;

  @Column('int', { name: 'CFO', nullable: true })
  cfo: number | null;

  @Column('float', { name: 'VLRACUM', nullable: true, precision: 53 })
  vlracum: number | null;

  @Column('money', { name: 'BASECALC', nullable: true })
  basecalc: number | null;

  @Column('money', { name: 'VLRCONTAB', nullable: true })
  vlrcontab: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('varchar', { name: 'MD5PAF', nullable: true, length: 32 })
  md5Paf: string | null;

  @ManyToOne(() => TgfecfEntity, (tgfecfEntity) => tgfecfEntity.tgfiecs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUECF', referencedColumnName: 'nuecf' }])
  nuecf2: TgfecfEntity;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgfiecs)
  @JoinColumn([{ name: 'CFO', referencedColumnName: 'codcfo' }])
  cfo2: TgfcfoEntity;
}

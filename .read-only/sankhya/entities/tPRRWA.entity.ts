import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprcreEntity } from './tPRCRE.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TprefxEntity } from './tPREFX.entity';

@Index('PK_TPRLRW', ['idefx', 'seqrec'], { unique: true })
@Entity('TPRRWA', { schema: 'SANKHYA' })
export class TprrwaEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('smallint', { primary: true, name: 'SEQREC' })
  seqrec: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('float', { name: 'QTDUTILIZACAO', precision: 53 })
  qtdutilizacao: number;

  @Column('float', {
    name: 'MULTUTILIZACAO',
    precision: 53,
    default: () => '(1)',
  })
  multutilizacao: number;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tprrwas)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre: TprcreEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprrwas)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa: TgfproEntity;

  @ManyToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprrwas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;
}

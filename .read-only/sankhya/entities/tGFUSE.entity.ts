import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFUSE', ['codtipoper', 'codemp'], { unique: true })
@Entity('TGFUSE', { schema: 'SANKHYA' })
export class TgfuseEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODTIPOPERSEP' })
  codtipopersep: number;

  @Column('char', { name: 'USOSEPARACAO', length: 1 })
  usoseparacao: string;

  @Column('varchar', { name: 'SERIESEPARACAO', nullable: true, length: 3 })
  serieseparacao: string | null;

  @Column('smallint', { name: 'CODTIPOPERPRINC', nullable: true })
  codtipoperprinc: number | null;

  @Column('varchar', { name: 'SERIEPRINC', nullable: true, length: 3 })
  serieprinc: string | null;

  @Column('varchar', { name: 'AGRUPFINNOTAS', nullable: true, length: 1 })
  agrupfinnotas: string | null;

  @Column('varchar', { name: 'CONFIRMNOTASFAT', nullable: true, length: 1 })
  confirmnotasfat: string | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfuses)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}

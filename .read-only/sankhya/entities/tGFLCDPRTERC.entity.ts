import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFLCDPRTERC', ['codemp', 'codparc'], { unique: true })
@Entity('TGFLCDPRTERC', { schema: 'SANKHYA' })
export class TgflcdprtercEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'PERCEXPLORACAO', nullable: true, precision: 53 })
  percexploracao: number | null;

  @Column('varchar', { name: 'TIPOEXPLORACAO', nullable: true, length: 1 })
  tipoexploracao: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflcdprtercs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgflcdprtercs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

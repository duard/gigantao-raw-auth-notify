import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFNFENT', ['codemp', 'versaont'], { unique: true })
@Entity('TGFNFENT', { schema: 'SANKHYA' })
export class TgfnfentEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'VERSAONT' })
  versaont: number;

  @Column('datetime', { name: 'DTENTHOMOLOG', nullable: true })
  dtenthomolog: Date | null;

  @Column('datetime', { name: 'DTENTPROD', nullable: true })
  dtentprod: Date | null;

  @Column('char', { name: 'ATIVONT', nullable: true, length: 1 })
  ativont: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfnfents, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

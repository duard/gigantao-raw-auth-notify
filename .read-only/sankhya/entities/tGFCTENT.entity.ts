import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFCTENT', ['codemp', 'versaont'], { unique: true })
@Entity('TGFCTENT', { schema: 'SANKHYA' })
export class TgfctentEntity {
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

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfctents, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

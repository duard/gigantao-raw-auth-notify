import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFPAEM', ['codemp', 'codparc'], { unique: true })
@Entity('TGFPAEM', { schema: 'SANKHYA' })
export class TgfpaemEntity {
  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(1)' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('int', { name: 'GRUPOICMS', nullable: true })
  grupoicms: number | null;

  @Column('float', { name: 'INDPRECOEMBUT', nullable: true, precision: 53 })
  indprecoembut: number | null;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('char', { name: 'CLASSIFICMS', length: 1, default: () => "'Z'" })
  classificms: string;

  @Column('char', {
    name: 'RETEMISS',
    nullable: true,
    length: 1,
    default: () => "'Z'",
  })
  retemiss: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpaems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfpaems)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfpaems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

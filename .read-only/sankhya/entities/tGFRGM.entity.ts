import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFRGM', ['codemp', 'dtiniregime'], { unique: true })
@Entity('TGFRGM', { schema: 'SANKHYA' })
export class TgfrgmEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINIREGIME' })
  dtiniregime: Date;

  @Column('datetime', { name: 'DTFIMREGIME', nullable: true })
  dtfimregime: Date | null;

  @Column('smallint', { name: 'CODINCTRIB' })
  codinctrib: number;

  @Column('smallint', { name: 'CODTIPOCONT' })
  codtipocont: number;

  @Column('smallint', { name: 'INDAPROPCRED' })
  indapropcred: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'INDREGCUM', nullable: true })
  indregcum: number | null;

  @Column('varchar', {
    name: 'EXCLUIPISCOFINSBASEDEP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  excluipiscofinsbasedep: string | null;

  @Column('char', {
    name: 'CONSMOVDEVVENDF550',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  consmovdevvendf550: string | null;

  @Column('char', { name: 'CONSVALJURMULF525', nullable: true, length: 1 })
  consvaljurmulf525: string | null;

  @Column('char', { name: 'DESCITETERCF525', nullable: true, length: 1 })
  descitetercf525: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrgms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfrgms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}

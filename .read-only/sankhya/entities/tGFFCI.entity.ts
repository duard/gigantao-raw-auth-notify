import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFFCI', ['codtipoper', 'codemp', 'sequencia'], { unique: true })
@Entity('TGFFCI', { schema: 'SANKHYA' })
export class TgffciEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'CODTIPOPERDEST' })
  codtipoperdest: number;

  @Column('varchar', { name: 'SERIEDEST', nullable: true, length: 3 })
  seriedest: string | null;

  @Column('varchar', { name: 'CONFIRMDOCFAT', nullable: true, length: 1 })
  confirmdocfat: string | null;

  @Column('text', { name: 'CRITERIOSEP' })
  criteriosep: string;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgffcis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}

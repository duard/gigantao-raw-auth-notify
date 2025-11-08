import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfpmpEntity } from './tGFPMP.entity';

@Index('PK_TGFPMC', ['codpmp', 'sequencia'], { unique: true })
@Entity('TGFPMC', { schema: 'SANKHYA' })
export class TgfpmcEntity {
  @Column('int', { primary: true, name: 'CODPMP' })
  codpmp: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'CORFONTE', nullable: true, length: 20 })
  corfonte: string | null;

  @Column('char', { name: 'CORFUNDO', nullable: true, length: 20 })
  corfundo: string | null;

  @Column('float', { name: 'MEDIDACOR', nullable: true, precision: 53 })
  medidacor: number | null;

  @Column('smallint', { name: 'TIPO', nullable: true })
  tipo: number | null;

  @ManyToOne(() => TgfpmpEntity, (tgfpmpEntity) => tgfpmpEntity.tgfpmcs)
  @JoinColumn([{ name: 'CODPMP', referencedColumnName: 'codpmp' }])
  codpmp2: TgfpmpEntity;
}

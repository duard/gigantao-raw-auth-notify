import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdppEntity } from './tGFDPP.entity';

@Index('PK_TGFDFD', ['nufin', 'coddepend'], { unique: true })
@Entity('TGFDFD', { schema: 'SANKHYA' })
export class TgfdfdEntity {
  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODDEPEND' })
  coddepend: number;

  @Column('smallint', { name: 'TPDEDUCAO', nullable: true })
  tpdeducao: number | null;

  @Column('float', { name: 'VLRDEDUCAO', nullable: true, precision: 53 })
  vlrdeducao: number | null;

  @ManyToOne(() => TgfdppEntity, (tgfdppEntity) => tgfdppEntity.tgfdfds)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODDEPEND', referencedColumnName: 'coddepend' },
  ])
  tgfdpp: TgfdppEntity;
}

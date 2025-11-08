import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimpoiEntity } from './tIMPOI.entity';

@Index('CK_RESOURCEID', ['codpoi', 'resourceid'], { unique: true })
@Index('PK_TIMPOT', ['codpoi', 'sequencia'], { unique: true })
@Entity('TIMPOT', { schema: 'SANKHYA' })
export class TimpotEntity {
  @Column('int', { primary: true, name: 'CODPOI' })
  codpoi: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', {
    name: 'RESOURCEID',
    nullable: true,
    unique: true,
    length: 50,
  })
  resourceid: string | null;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('char', { name: 'POTLEGADO', nullable: true, length: 1 })
  potlegado: string | null;

  @Column('int', { name: 'CODPOI_BKP', nullable: true })
  codpoiBkp: number | null;

  @Column('int', { name: 'SEQUENCIA_BKP', nullable: true })
  sequenciaBkp: number | null;

  @ManyToOne(() => TimpoiEntity, (timpoiEntity) => timpoiEntity.timpots)
  @JoinColumn([{ name: 'CODPOI', referencedColumnName: 'codpoi' }])
  codpoi2: TimpoiEntity;
}

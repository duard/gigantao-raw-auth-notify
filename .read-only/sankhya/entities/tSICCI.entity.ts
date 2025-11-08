import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicarEntity } from './tSICAR.entity';
import { TsicidEntity } from './tSICID.entity';

@Index('PK_TSICCI', ['codcartorio', 'sequencia'], { unique: true })
@Entity('TSICCI', { schema: 'SANKHYA' })
export class TsicciEntity {
  @Column('int', { primary: true, name: 'CODCARTORIO' })
  codcartorio: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARCRESP', nullable: true })
  codparcresp: number | null;

  @ManyToOne(() => TsicarEntity, (tsicarEntity) => tsicarEntity.tsiccis)
  @JoinColumn([{ name: 'CODCARTORIO', referencedColumnName: 'codcartorio' }])
  codcartorio2: TsicarEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsiccis)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;
}

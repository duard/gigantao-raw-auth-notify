import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsigruEntity } from './tSIGRU.entity';
import { TsiitaEntity } from './tSIITA.entity';

@Index('PK_TSIILA', ['codila'], { unique: true })
@Entity('TSIILA', { schema: 'SANKHYA' })
export class TsiilaEntity {
  @Column('int', { primary: true, name: 'CODILA' })
  codila: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiilas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsigruEntity, (tsigruEntity) => tsigruEntity.tsiilas)
  @JoinColumn([{ name: 'CODGRUPO', referencedColumnName: 'codgrupo' }])
  codgrupo: TsigruEntity;

  @ManyToOne(() => TsiitaEntity, (tsiitaEntity) => tsiitaEntity.tsiilas)
  @JoinColumn([{ name: 'CODITA', referencedColumnName: 'codita' }])
  codita: TsiitaEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIMPA', ['numpa'], { unique: true })
@Entity('TSIMPA', { schema: 'SANKHYA' })
export class TsimpaEntity {
  @Column('smallint', { primary: true, name: 'NUMPA' })
  numpa: number;

  @Column('datetime', { name: 'DHPARADA' })
  dhparada: Date;

  @Column('smallint', { name: 'HRINDISP' })
  hrindisp: number;

  @Column('varchar', { name: 'MSGMP', length: 400 })
  msgmp: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsimpas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

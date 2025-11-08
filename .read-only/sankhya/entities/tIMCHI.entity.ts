import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimickEntity } from './tIMICK.entity';
import { TimchkEntity } from './tIMCHK.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMCHI', ['chichknucheck', 'chinuitem'], { unique: true })
@Entity('TIMCHI', { schema: 'SANKHYA' })
export class TimchiEntity {
  @Column('int', { primary: true, name: 'CHICHKNUCHECK' })
  chichknucheck: number;

  @Column('int', { primary: true, name: 'CHINUITEM' })
  chinuitem: number;

  @Column('char', { name: 'CHIOBIGATORIO', nullable: true, length: 1 })
  chiobigatorio: string | null;

  @Column('char', { name: 'CHIMARCADO', nullable: true, length: 1 })
  chimarcado: string | null;

  @Column('datetime', { name: 'CHIDTMARCADO', nullable: true })
  chidtmarcado: Date | null;

  @Column('varchar', { name: 'CHIOBSERVACAO', nullable: true, length: 400 })
  chiobservacao: string | null;

  @ManyToOne(() => TimickEntity, (timickEntity) => timickEntity.timchis)
  @JoinColumn([{ name: 'CHINUITEM', referencedColumnName: 'icknuitem' }])
  chinuitem2: TimickEntity;

  @ManyToOne(() => TimchkEntity, (timchkEntity) => timchkEntity.timchis)
  @JoinColumn([{ name: 'CHICHKNUCHECK', referencedColumnName: 'chknucheck' }])
  chichknucheck2: TimchkEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timchis)
  @JoinColumn([{ name: 'CHIUSUARIO', referencedColumnName: 'codusu' }])
  chiusuario: TsiusuEntity;
}

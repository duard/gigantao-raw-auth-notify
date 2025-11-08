import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSICONF', ['form', 'codusu'], { unique: true })
@Index('TSICONF_IFK', ['codusu'], {})
@Entity('TSICONF', { schema: 'SANKHYA' })
export class TsiconfEntity {
  @Column('varchar', { primary: true, name: 'FORM', length: 60 })
  form: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'CONF', nullable: true })
  conf: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiconfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}

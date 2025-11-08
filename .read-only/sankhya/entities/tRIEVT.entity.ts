import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRIEVT', ['tipoevento'], { unique: true })
@Entity('TRIEVT', { schema: 'SANKHYA' })
export class TrievtEntity {
  @Column('varchar', { primary: true, name: 'TIPOEVENTO', length: 20 })
  tipoevento: string;

  @Column('varchar', { name: 'DESCRTIPOEVENTO', length: 250 })
  descrtipoevento: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'GRUPO', length: 1 })
  grupo: string;

  @Column('smallint', { name: 'ORDEMEVENTO', default: () => '(1)' })
  ordemevento: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trievts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

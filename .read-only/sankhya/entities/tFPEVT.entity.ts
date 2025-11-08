import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEVT', ['tipoevento'], { unique: true })
@Entity('TFPEVT', { schema: 'SANKHYA' })
export class TfpevtEntity {
  @Column('varchar', { primary: true, name: 'TIPOEVENTO', length: 20 })
  tipoevento: string;

  @Column('varchar', { name: 'DESCRTIPOEVENTO', length: 250 })
  descrtipoevento: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'GRUPOESOCIAL', nullable: true })
  grupoesocial: number | null;

  @Column('smallint', {
    name: 'ORDEMEVENTO',
    nullable: true,
    default: () => '(0)',
  })
  ordemevento: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpevts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

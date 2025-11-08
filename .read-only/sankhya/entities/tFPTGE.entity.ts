import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPTGE', ['nutge'], { unique: true })
@Index('TFPTGE_I01', ['codtabesocial', 'codigoesocial'], { unique: true })
@Entity('TFPTGE', { schema: 'SANKHYA' })
export class TfptgeEntity {
  @Column('int', { primary: true, name: 'NUTGE' })
  nutge: number;

  @Column('varchar', { name: 'DESCRTGE', length: 250 })
  descrtge: string;

  @Column('smallint', { name: 'CODTABESOCIAL' })
  codtabesocial: number;

  @Column('varchar', { name: 'CODIGOESOCIAL', length: 30 })
  codigoesocial: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptges)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

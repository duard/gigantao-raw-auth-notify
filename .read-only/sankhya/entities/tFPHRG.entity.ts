import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpghrEntity } from './tFPGHR.entity';
import { TfpcghEntity } from './tFPCGH.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPHRG', ['codgrupohorario', 'ordem'], { unique: true })
@Entity('TFPHRG', { schema: 'SANKHYA' })
export class TfphrgEntity {
  @Column('int', { primary: true, name: 'CODGRUPOHORARIO' })
  codgrupohorario: number;

  @Column('smallint', { primary: true, name: 'ORDEM' })
  ordem: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpghrEntity, (tfpghrEntity) => tfpghrEntity.tfphrgs)
  @JoinColumn([
    { name: 'CODGRUPOHORARIO', referencedColumnName: 'codgrupohorario' },
  ])
  codgrupohorario2: TfpghrEntity;

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tfphrgs)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphrgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

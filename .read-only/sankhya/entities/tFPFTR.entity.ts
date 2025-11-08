import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPFTR', ['codfatrisco'], { unique: true })
@Entity('TFPFTR', { schema: 'SANKHYA' })
export class TfpftrEntity {
  @Column('varchar', { primary: true, name: 'CODFATRISCO', length: 10 })
  codfatrisco: string;

  @Column('varchar', { name: 'DESCRFATRISCO', length: 250 })
  descrfatrisco: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpftrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

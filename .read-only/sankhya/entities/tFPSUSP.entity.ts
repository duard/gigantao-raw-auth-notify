import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppssEntity } from './tFPPSS.entity';

@Index('PK_TFPSUSP', ['nuprocesso', 'codsusp'], { unique: true })
@Entity('TFPSUSP', { schema: 'SANKHYA' })
export class TfpsuspEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('varchar', { primary: true, name: 'CODSUSP', length: 14 })
  codsusp: string;

  @Column('varchar', { name: 'INDSUSP', length: 2 })
  indsusp: string;

  @Column('datetime', { name: 'DTDESCISAO', nullable: true })
  dtdescisao: Date | null;

  @Column('char', { name: 'INDDEPOSITO', length: 1, default: () => "'N'" })
  inddeposito: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpsusps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfpsusps)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TfppssEntity;
}

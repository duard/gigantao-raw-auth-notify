import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfppssEntity } from './tFPPSS.entity';

@Index('PK_TFPTERC', ['nuprocesso', 'codterc'], { unique: true })
@Entity('TFPTERC', { schema: 'SANKHYA' })
export class TfptercEntity {
  @Column('int', { primary: true, name: 'NUPROCESSO' })
  nuprocesso: number;

  @Column('varchar', { primary: true, name: 'CODTERC', length: 4 })
  codterc: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 30 })
  descricao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptercs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfppssEntity, (tfppssEntity) => tfppssEntity.tfptercs)
  @JoinColumn([{ name: 'NUPROCESSO', referencedColumnName: 'nuprocesso' }])
  nuprocesso2: TfppssEntity;
}

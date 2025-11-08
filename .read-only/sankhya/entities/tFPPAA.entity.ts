import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPPAA', ['nucat', 'codparteatingida'], { unique: true })
@Entity('TFPPAA', { schema: 'SANKHYA' })
export class TfppaaEntity {
  @Column('int', { primary: true, name: 'NUCAT' })
  nucat: number;

  @Column('varchar', { primary: true, name: 'CODPARTEATINGIDA', length: 9 })
  codparteatingida: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'LATERALIDADE', nullable: true })
  lateralidade: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfppaas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

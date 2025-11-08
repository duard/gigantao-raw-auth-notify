import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPSGA', ['codsituacaogeradora'], { unique: true })
@Entity('TFPSGA', { schema: 'SANKHYA' })
export class TfpsgaEntity {
  @Column('int', { primary: true, name: 'CODSITUACAOGERADORA' })
  codsituacaogeradora: number;

  @Column('varchar', { name: 'DESCRSITUACAOGERADORA', length: 250 })
  descrsituacaogeradora: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpsgas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

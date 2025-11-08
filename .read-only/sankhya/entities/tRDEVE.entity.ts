import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';

@Index('PK_TRDEVE', ['nucontrole'], { unique: true })
@Entity('TRDEVE', { schema: 'SANKHYA' })
export class TrdeveEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('varchar', { name: 'ONCLICK', nullable: true, length: 255 })
  onclick: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @OneToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdeve)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;
}

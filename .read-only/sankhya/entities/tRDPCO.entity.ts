import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';

@Index('PK_TRDPCO', ['nucontrole', 'nome'], { unique: true })
@Entity('TRDPCO', { schema: 'SANKHYA' })
export class TrdpcoEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'VALOR', nullable: true, length: 3103 })
  valor: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdpcos)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;
}

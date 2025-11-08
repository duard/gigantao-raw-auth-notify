import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrdconEntity } from './tRDCON.entity';

@Index('PK_TRDFIL', ['nucontrole', 'sequencia'], { unique: true })
@Entity('TRDFIL', { schema: 'SANKHYA' })
export class TrdfilEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCONTROLE',
    precision: 10,
    scale: 0,
  })
  nucontrole: number;

  @Column('numeric', {
    primary: true,
    name: 'SEQUENCIA',
    precision: 10,
    scale: 0,
  })
  sequencia: number;

  @Column('varchar', { name: 'NOME', length: 50 })
  nome: string;

  @Column('text', { name: 'EXPRESSAO' })
  expressao: string;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @ManyToOne(() => TrdconEntity, (trdconEntity) => trdconEntity.trdfils)
  @JoinColumn([{ name: 'NUCONTROLE', referencedColumnName: 'nucontrole' }])
  nucontrole2: TrdconEntity;
}

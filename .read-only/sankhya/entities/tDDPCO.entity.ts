import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddcamEntity } from './tDDCAM.entity';

@Index('PK_TDDPCO', ['nucampo', 'nome'], { unique: true })
@Entity('TDDPCO', { schema: 'SANKHYA' })
export class TddpcoEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCAMPO',
    precision: 10,
    scale: 0,
  })
  nucampo: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('text', { name: 'VALOR', nullable: true })
  valor: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.tddpcos)
  @JoinColumn([{ name: 'NUCAMPO', referencedColumnName: 'nucampo' }])
  nucampo2: TddcamEntity;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TddcamEntity } from './tDDCAM.entity';

@Index(
  'IX_TDDOPC_CONTROLE_F4FEC',
  ['nucampo', 'valor', 'opcao', 'padrao', 'ordem', 'controle'],
  {},
)
@Index('PK_TDDOPC', ['nucampo', 'valor'], { unique: true })
@Entity('TDDOPC', { schema: 'SANKHYA' })
export class TddopcEntity {
  @Column('numeric', {
    primary: true,
    name: 'NUCAMPO',
    precision: 10,
    scale: 0,
  })
  nucampo: number;

  @Column('varchar', { primary: true, name: 'VALOR', length: 15 })
  valor: string;

  @Column('varchar', { name: 'OPCAO', length: 100 })
  opcao: string;

  @Column('char', {
    name: 'PADRAO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  padrao: string | null;

  @Column('smallint', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @ManyToOne(() => TddcamEntity, (tddcamEntity) => tddcamEntity.tddopcs)
  @JoinColumn([{ name: 'NUCAMPO', referencedColumnName: 'nucampo' }])
  nucampo2: TddcamEntity;
}

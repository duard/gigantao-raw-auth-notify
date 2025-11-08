import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';

@Index('PK_TCSELC', ['numcontrato', 'cnpjcpf'], { unique: true })
@Entity('TCSELC', { schema: 'SANKHYA' })
export class TcselcEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('varchar', { primary: true, name: 'CNPJCPF', length: 14 })
  cnpjcpf: string;

  @Column('varchar', { name: 'NOME', length: 40 })
  nome: string;

  @Column('varchar', { name: 'RAZAOSOCIAL', length: 40 })
  razaosocial: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcselcs)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;
}

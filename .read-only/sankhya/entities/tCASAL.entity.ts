import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcacprEntity } from './tCACPR.entity';

@Index('PK_TCASAL', ['nusala'], { unique: true })
@Entity('TCASAL', { schema: 'SANKHYA' })
export class TcasalEntity {
  @Column('int', { primary: true, name: 'NUSALA' })
  nusala: number;

  @Column('char', { name: 'NOME', length: 40 })
  nome: string;

  @Column('float', { name: 'METRAGEM', precision: 53 })
  metragem: number;

  @Column('char', { name: 'ATIVA', length: 1, default: () => "'S'" })
  ativa: string;

  @OneToMany(() => TcacprEntity, (tcacprEntity) => tcacprEntity.nusala)
  tcacprs: TcacprEntity[];
}

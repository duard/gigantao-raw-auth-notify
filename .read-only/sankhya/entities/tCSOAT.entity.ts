import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsoseEntity } from './tCSOSE.entity';

@Index('PK_TCSOAT', ['codoat'], { unique: true })
@Entity('TCSOAT', { schema: 'SANKHYA' })
export class TcsoatEntity {
  @Column('int', { primary: true, name: 'CODOAT' })
  codoat: number;

  @Column('varchar', { name: 'DESCROAT', length: 50 })
  descroat: string;

  @Column('int', { name: 'CODOATPAI' })
  codoatpai: number;

  @Column('varchar', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('decimal', { name: 'GRAU', precision: 5, scale: 0 })
  grau: number;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @OneToMany(() => TcsoseEntity, (tcsoseEntity) => tcsoseEntity.codoat)
  tcsoses: TcsoseEntity[];
}

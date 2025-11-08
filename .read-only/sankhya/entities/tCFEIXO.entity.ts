import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcfposicaoeixoEntity } from './tCFPOSICAOEIXO.entity';

@Index('PK_TCFEIXO', ['codtiprd', 'nomeeixo'], { unique: true })
@Entity('TCFEIXO', { schema: 'SANKHYA' })
export class TcfeixoEntity {
  @Column('varchar', { primary: true, name: 'CODTIPRD', length: 100 })
  codtiprd: string;

  @Column('varchar', { primary: true, name: 'NOMEEIXO', length: 100 })
  nomeeixo: string;

  @Column('varchar', { name: 'TIPOEIXO', nullable: true, length: 10 })
  tipoeixo: string | null;

  @Column('int', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @OneToMany(
    () => TcfposicaoeixoEntity,
    (tcfposicaoeixoEntity) => tcfposicaoeixoEntity.tcfeixo,
  )
  tcfposicaoeixos: TcfposicaoeixoEntity[];
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfeixoEntity } from './tCFEIXO.entity';

@Index('PK_TCFPOSICAOEIXO', ['codtiprd', 'nomeeixo', 'nomeposicao'], {
  unique: true,
})
@Entity('TCFPOSICAOEIXO', { schema: 'SANKHYA' })
export class TcfposicaoeixoEntity {
  @Column('varchar', { primary: true, name: 'CODTIPRD', length: 100 })
  codtiprd: string;

  @Column('varchar', { primary: true, name: 'NOMEEIXO', length: 100 })
  nomeeixo: string;

  @Column('varchar', { primary: true, name: 'NOMEPOSICAO', length: 100 })
  nomeposicao: string;

  @Column('int', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @ManyToOne(
    () => TcfeixoEntity,
    (tcfeixoEntity) => tcfeixoEntity.tcfposicaoeixos,
  )
  @JoinColumn([
    { name: 'CODTIPRD', referencedColumnName: 'codtiprd' },
    { name: 'NOMEEIXO', referencedColumnName: 'nomeeixo' },
  ])
  tcfeixo: TcfeixoEntity;
}

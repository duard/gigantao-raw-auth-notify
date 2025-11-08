import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfeplEntity } from './tGFEPL.entity';
import { TgflppEntity } from './tGFLPP.entity';

@Index('PK_TGFPLP', ['numplan'], { unique: true })
@Entity('TGFPLP', { schema: 'SANKHYA' })
export class TgfplpEntity {
  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'NUMLOTE' })
  numlote: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('int', { name: 'QTDPROD', nullable: true })
  qtdprod: number | null;

  @Column('smallint', { name: 'ETAPA', nullable: true })
  etapa: number | null;

  @Column('char', {
    name: 'CONCLUIDO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  concluido: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'NUMPLAN' })
  numplan: number;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @OneToMany(() => TgfeplEntity, (tgfeplEntity) => tgfeplEntity.numplan2)
  tgfepls: TgfeplEntity[];

  @OneToMany(() => TgflppEntity, (tgflppEntity) => tgflppEntity.numplan2)
  tgflpps: TgflppEntity[];
}

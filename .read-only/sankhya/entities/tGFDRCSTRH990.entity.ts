import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index('PK_TGFDRCSTRH990', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFDRCSTRH990', { schema: 'SANKHYA' })
export class Tgfdrcstrh990Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'H990'",
  })
  reg: string;

  @Column('int', { name: 'QTDLINH' })
  qtdlinh: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstrhs3,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTINICIAL', referencedColumnName: 'dtinicial' },
    { name: 'DTFINAL', referencedColumnName: 'dtfinal' },
  ])
  tgfdrcst: TgfdrcstEntity;
}

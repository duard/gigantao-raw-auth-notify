import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index('PK_TGFDRCSTR0990', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFDRCSTR0990', { schema: 'SANKHYA' })
export class Tgfdrcstr0990Entity {
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
    default: () => "'0990'",
  })
  reg: string;

  @Column('int', { name: 'QTDLIN0' })
  qtdlin0: number;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstr0s8,
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

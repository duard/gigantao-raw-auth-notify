import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index('PK_TGFDRCSTRH005', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFDRCSTRH005', { schema: 'SANKHYA' })
export class Tgfdrcstrh005Entity {
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
    default: () => "'H005'",
  })
  reg: string;

  @Column('datetime', { name: 'DTINV' })
  dtinv: Date;

  @Column('float', { name: 'VLINV', nullable: true, precision: 53 })
  vlinv: number | null;

  @Column('varchar', { name: 'MOTINV', length: 2 })
  motinv: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstrhs2,
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

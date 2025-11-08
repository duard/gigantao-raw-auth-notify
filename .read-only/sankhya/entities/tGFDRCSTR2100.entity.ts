import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdrcstEntity } from './tGFDRCST.entity';

@Index('PK_TGFDRCSTR2100', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFDRCSTR2100', { schema: 'SANKHYA' })
export class Tgfdrcstr2100Entity {
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
    default: () => "'2100'",
  })
  reg: string;

  @Column('float', { name: 'SVLICMSSTREST', nullable: true, precision: 53 })
  svlicmsstrest: number | null;

  @Column('float', { name: 'SVLICMSSTCOMPL', nullable: true, precision: 53 })
  svlicmsstcompl: number | null;

  @Column('float', { name: 'SDICMSSTREST', nullable: true, precision: 53 })
  sdicmsstrest: number | null;

  @Column('float', { name: 'SDICMSSTRESS', nullable: true, precision: 53 })
  sdicmsstress: number | null;

  @Column('float', { name: 'SDICMSSTCOMPL', nullable: true, precision: 53 })
  sdicmsstcompl: number | null;

  @Column('float', { name: 'SDICMSOP', nullable: true, precision: 53 })
  sdicmsop: number | null;

  @Column('float', { name: 'VAPURCREDICMS', nullable: true, precision: 53 })
  vapurcredicms: number | null;

  @Column('float', { name: 'VAPURICMSCOMP', nullable: true, precision: 53 })
  vapuricmscomp: number | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfdrcstEntity,
    (tgfdrcstEntity) => tgfdrcstEntity.tgfdrcstr2s2,
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

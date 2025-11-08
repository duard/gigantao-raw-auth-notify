import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiremEntity } from './tSIREM.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFFEM', ['codformrem', 'modulo', 'codemp'], { unique: true })
@Entity('TGFFEM', { schema: 'SANKHYA' })
export class TgffemEntity {
  @Column('int', { primary: true, name: 'CODFORMREM' })
  codformrem: number;

  @Column('char', {
    primary: true,
    name: 'MODULO',
    length: 1,
    default: () => "'B'",
  })
  modulo: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TsiremEntity, (tsiremEntity) => tsiremEntity.tgffems)
  @JoinColumn([
    { name: 'MODULO', referencedColumnName: 'modulo' },
    { name: 'CODFORMREM', referencedColumnName: 'codigo' },
  ])
  tsirem: TsiremEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgffems)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}

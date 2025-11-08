import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsconEntity } from './tCSCON.entity';

@Index(
  'PK_TCSPFP',
  ['codprod', 'numcontrato', 'pendencia', 'codocor', 'dtocor'],
  { unique: true },
)
@Entity('TCSPFP', { schema: 'SANKHYA' })
export class TcspfpEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTOCOR' })
  dtocor: Date;

  @Column('smallint', { primary: true, name: 'CODOCOR' })
  codocor: number;

  @Column('char', { primary: true, name: 'PENDENCIA', length: 1 })
  pendencia: string;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('float', { name: 'VLRACERTADO', nullable: true, precision: 53 })
  vlracertado: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcspfps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcspfps)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;
}

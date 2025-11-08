import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcsbloEntity } from './tCSBLO.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_TCSBME',
  ['codprod', 'codbem', 'numcontrato', 'dtinicio', 'referencia', 'medinicio'],
  {
    unique: true,
  },
)
@Entity('TCSBME', { schema: 'SANKHYA' })
export class TcsbmeEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { primary: true, name: 'MEDINICIO', precision: 53 })
  medinicio: number;

  @Column('float', { name: 'MEDFIM', nullable: true, precision: 53 })
  medfim: number | null;

  @Column('float', {
    name: 'PRECOMEDICAO',
    precision: 53,
    default: () => '(0)',
  })
  precomedicao: number;

  @Column('float', { name: 'MINMENSAL', precision: 53, default: () => '(0)' })
  minmensal: number;

  @Column('float', { name: 'MAXDIA', precision: 53, default: () => '(0)' })
  maxdia: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcsbmes)
  @JoinColumn([{ name: 'NUNOTAFAT', referencedColumnName: 'nunota' }])
  nunotafat: TgfcabEntity;

  @ManyToOne(() => TcsbloEntity, (tcsbloEntity) => tcsbloEntity.tcsbmes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'DTINICIO', referencedColumnName: 'dtinicio' },
  ])
  tcsblo: TcsbloEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsbmes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcsbmes)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsbmes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

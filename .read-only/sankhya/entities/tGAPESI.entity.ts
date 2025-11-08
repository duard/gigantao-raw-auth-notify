import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGAPESI', ['numpesagem', 'numcontrato'], { unique: true })
@Entity('TGAPESI', { schema: 'SANKHYA' })
export class TgapesiEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'NUMPESAGEM' })
  numpesagem: number;

  @Column('int', { name: 'CODPROC', nullable: true })
  codproc: number | null;

  @Column('int', { name: 'NUMPROD', nullable: true })
  numprod: number | null;

  @Column('float', { name: 'PESONF', nullable: true, precision: 53 })
  pesonf: number | null;

  @Column('float', { name: 'VALUNIT', nullable: true, precision: 53 })
  valunit: number | null;

  @Column('float', { name: 'VALTOTAL', nullable: true, precision: 53 })
  valtotal: number | null;

  @Column('float', { name: 'PESOROMANEIO', nullable: true, precision: 53 })
  pesoromaneio: number | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'NUNOTADEST', nullable: true })
  nunotadest: number | null;

  @Column('int', { name: 'NUMNOTATRANS', nullable: true })
  numnotatrans: number | null;

  @Column('char', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgapesis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgapesis)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgapesis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}

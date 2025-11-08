import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgarpoEntity } from './tGARPO.entity';

@Index('PK_TGAPOI', ['numcontrato', 'codport'], { unique: true })
@Entity('TGAPOI', { schema: 'SANKHYA' })
export class TgapoiEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPORT' })
  codport: number;

  @Column('int', { name: 'NUMPROD', nullable: true })
  numprod: number | null;

  @Column('float', { name: 'PESONF', nullable: true, precision: 53 })
  pesonf: number | null;

  @Column('float', { name: 'VALUNIT', nullable: true, precision: 53 })
  valunit: number | null;

  @Column('float', { name: 'VALTOTAL', nullable: true, precision: 53 })
  valtotal: number | null;

  @Column('int', { name: 'CODPROC', nullable: true })
  codproc: number | null;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('int', { name: 'NUMNOTATRANS', nullable: true })
  numnotatrans: number | null;

  @Column('char', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgapois)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgarpoEntity, (tgarpoEntity) => tgarpoEntity.tgapois)
  @JoinColumn([{ name: 'CODPORT', referencedColumnName: 'codport' }])
  codport2: TgarpoEntity;
}

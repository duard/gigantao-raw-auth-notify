import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfcotEntity } from './tGFCOT.entity';

@Index('PK_TGFFRC', ['numcotacao', 'codparc'], { unique: true })
@Entity('TGFFRC', { schema: 'SANKHYA' })
export class TgffrcEntity {
  @Column('int', { primary: true, name: 'NUMCOTACAO' })
  numcotacao: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'VLRFRETE', nullable: true, precision: 53 })
  vlrfrete: number | null;

  @Column('float', { name: 'VLRFRETEMELHOR', nullable: true, precision: 53 })
  vlrfretemelhor: number | null;

  @Column('float', { name: 'VLRFRETEFINAL', nullable: true, precision: 53 })
  vlrfretefinal: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('datetime', { name: 'VENCFRETE', nullable: true })
  vencfrete: Date | null;

  @Column('char', { name: 'CIF_FOB', nullable: true, length: 1 })
  cifFob: string | null;

  @Column('char', { name: 'CREDICMS', length: 1, default: () => "'S'" })
  credicms: string;

  @Column('char', { name: 'CREDIPI', length: 1, default: () => "'N'" })
  credipi: string;

  @Column('char', { name: 'TIPRATEIO', length: 1, default: () => "'V'" })
  tiprateio: string;

  @Column('char', { name: 'TIPFRETE', length: 1, default: () => "'S'" })
  tipfrete: string;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('float', { name: 'VLRDESCMELHOR', nullable: true, precision: 53 })
  vlrdescmelhor: number | null;

  @Column('float', { name: 'VLRDESCFINAL', nullable: true, precision: 53 })
  vlrdescfinal: number | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgffrcs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgffrcs2)
  @JoinColumn([{ name: 'CODPARCTRANSP', referencedColumnName: 'codparc' }])
  codparctransp: TgfparEntity;

  @ManyToOne(() => TgfcotEntity, (tgfcotEntity) => tgfcotEntity.tgffrcs)
  @JoinColumn([{ name: 'NUMCOTACAO', referencedColumnName: 'numcotacao' }])
  numcotacao2: TgfcotEntity;
}

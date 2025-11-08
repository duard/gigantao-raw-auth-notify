import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgflstEntity } from './tGFLST.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFSEM', ['codprod', 'codemp'], { unique: true })
@Entity('TGFSEM', { schema: 'SANKHYA' })
export class TgfsemEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CNAE' })
  cnae: number;

  @Column('varchar', { name: 'CODTRIBMUNISS', length: 20 })
  codtribmuniss: string;

  @Column('smallint', { name: 'TIPOSN', nullable: true, default: () => '(0)' })
  tiposn: number | null;

  @Column('varchar', { name: 'CODNBS', nullable: true, length: 9 })
  codnbs: string | null;

  @Column('int', { name: 'ENQREINTEGRA', nullable: true })
  enqreintegra: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfsems)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfsems)
  @JoinColumn([{ name: 'CODCTACTBEFD', referencedColumnName: 'codctactb' }])
  codctactbefd: TcbplaEntity;

  @ManyToOne(() => TgflstEntity, (tgflstEntity) => tgflstEntity.tgfsems)
  @JoinColumn([{ name: 'CODLST', referencedColumnName: 'codlst' }])
  codlst: TgflstEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfsems)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}

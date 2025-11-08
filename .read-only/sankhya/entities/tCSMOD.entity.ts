import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsmfuEntity } from './tCSMFU.entity';
import { TcsmetEntity } from './tCSMET.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcsmpdEntity } from './tCSMPD.entity';
import { TcsmprEntity } from './tCSMPR.entity';
import { TcsmsaEntity } from './tCSMSA.entity';

@Index('PK_TCSMOD', ['codmetod', 'nummodelo'], { unique: true })
@Entity('TCSMOD', { schema: 'SANKHYA' })
export class TcsmodEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('int', { primary: true, name: 'NUMMODELO' })
  nummodelo: number;

  @Column('smallint', { name: 'NUMSEQ' })
  numseq: number;

  @Column('char', { name: 'TIPVALOR', length: 1, default: () => "'N'" })
  tipvalor: string;

  @Column('char', { name: 'SUPLEMENTA', length: 1, default: () => "'N'" })
  suplementa: string;

  @Column('char', { name: 'SUPLEMENTADO', length: 1, default: () => "'N'" })
  suplementado: string;

  @Column('money', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('money', { name: 'VLRSUPLEMENTA', default: () => '(0)' })
  vlrsuplementa: number;

  @Column('money', { name: 'VLRSUPLEMENTADO', default: () => '(0)' })
  vlrsuplementado: number;

  @Column('int', { name: 'NUMMODELOPAI', default: () => '(99999)' })
  nummodelopai: number;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 40 })
  descricao: string | null;

  @Column('char', { name: 'OBRIGATORIA', nullable: true, length: 1 })
  obrigatoria: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('char', { name: 'EXIGEPRODUTOS', length: 1, default: () => "'N'" })
  exigeprodutos: string;

  @OneToMany(() => TcsmfuEntity, (tcsmfuEntity) => tcsmfuEntity.tcsmod)
  tcsmfus: TcsmfuEntity[];

  @ManyToOne(() => TcsmetEntity, (tcsmetEntity) => tcsmetEntity.tcsmods)
  @JoinColumn([{ name: 'CODMETOD', referencedColumnName: 'codmetod' }])
  codmetod2: TcsmetEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsmods)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @OneToMany(() => TcsmpdEntity, (tcsmpdEntity) => tcsmpdEntity.tcsmod)
  tcsmpds: TcsmpdEntity[];

  @OneToMany(() => TcsmpdEntity, (tcsmpdEntity) => tcsmpdEntity.tcsmod2)
  tcsmpds2: TcsmpdEntity[];

  @OneToMany(() => TcsmprEntity, (tcsmprEntity) => tcsmprEntity.tcsmod)
  tcsmprs: TcsmprEntity[];

  @OneToMany(() => TcsmsaEntity, (tcsmsaEntity) => tcsmsaEntity.tcsmod)
  tcsmsas: TcsmsaEntity[];
}

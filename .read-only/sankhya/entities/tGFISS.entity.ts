import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TgfaipEntity } from './tGFAIP.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgflstEntity } from './tGFLST.entity';

@Index('PK_TGFISS', ['codcid', 'codprod', 'codemp'], { unique: true })
@Entity('TGFISS', { schema: 'SANKHYA' })
export class TgfissEntity {
  @Column('int', { primary: true, name: 'CODCID', default: () => '(0)' })
  codcid: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'PERCINSS', precision: 53 })
  percinss: number;

  @Column('int', { name: 'CODTRIBISS', default: () => '(0)' })
  codtribiss: number;

  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('varchar', { name: 'TIPODEDUCAO', nullable: true, length: 1 })
  tipodeducao: string | null;

  @Column('float', { name: 'PERCDEDUCAO', nullable: true, precision: 53 })
  percdeducao: number | null;

  @Column('varchar', { name: 'CODTRIBMUNISS', nullable: true, length: 20 })
  codtribmuniss: string | null;

  @Column('char', { name: 'NAOCALCULA', nullable: true, length: 1 })
  naocalcula: string | null;

  @PrimaryGeneratedColumn({ type: 'int', name: 'IDALIQ' })
  idaliq: number;

  @OneToMany(() => TgfaipEntity, (tgfaipEntity) => tgfaipEntity.tgfiss)
  tgfaips: TgfaipEntity[];

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfisses)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TgflstEntity, (tgflstEntity) => tgflstEntity.tgfisses)
  @JoinColumn([{ name: 'CODLST', referencedColumnName: 'codlst' }])
  codlst: TgflstEntity;
}

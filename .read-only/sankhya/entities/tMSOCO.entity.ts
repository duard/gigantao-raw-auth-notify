import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcfcptpendEntity } from './tCFCPTPEND.entity';
import { TmscalocoEntity } from './tMSCALOCO.entity';
import { TmsfvgEntity } from './tMSFVG.entity';
import { TmsfvmdstocoEntity } from './tMSFVMDSTOCO.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TMSOCO', ['nuocor'], { unique: true })
@Entity('TMSOCO', { schema: 'SANKHYA' })
export class TmsocoEntity {
  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('varchar', { name: 'DESCROCOR', nullable: true, length: 100 })
  descrocor: string | null;

  @Column('varchar', { name: 'PADRAO', nullable: true, length: 10 })
  padrao: string | null;

  @Column('varchar', { name: 'GERFINREC', nullable: true, length: 10 })
  gerfinrec: string | null;

  @Column('varchar', { name: 'GERFINDESP', nullable: true, length: 10 })
  gerfindesp: string | null;

  @Column('int', { name: 'CODTIPOPERDESP', nullable: true })
  codtipoperdesp: number | null;

  @Column('int', { name: 'CODTIPOPERREC', nullable: true })
  codtipoperrec: number | null;

  @Column('int', { name: 'CODCENCUSREC', nullable: true })
  codcencusrec: number | null;

  @Column('int', { name: 'CODCENCUSDESP', nullable: true })
  codcencusdesp: number | null;

  @Column('varchar', { name: 'ATUALIZADTCHEGADA', nullable: true, length: 10 })
  atualizadtchegada: string | null;

  @Column('int', { name: 'CODTIPOPERCTE', nullable: true })
  codtipopercte: number | null;

  @Column('varchar', { name: 'SERIECTE', nullable: true, length: 10 })
  seriecte: string | null;

  @Column('float', { name: 'FATORMULTCTE', nullable: true, precision: 53 })
  fatormultcte: number | null;

  @Column('int', { name: 'DIASVENCDESP', nullable: true })
  diasvencdesp: number | null;

  @Column('int', { name: 'DIASVENCREC', nullable: true })
  diasvencrec: number | null;

  @Column('int', { name: 'CODTIPTITREC', nullable: true })
  codtiptitrec: number | null;

  @Column('int', { name: 'CODTIPTITDESP', nullable: true })
  codtiptitdesp: number | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @Column('varchar', { name: 'OCORTICKET', nullable: true, length: 10 })
  ocorticket: string | null;

  @Column('int', { name: 'CODTIPCOB', nullable: true })
  codtipcob: number | null;

  @OneToMany(
    () => TcfcptpendEntity,
    (tcfcptpendEntity) => tcfcptpendEntity.nuocor,
  )
  tcfcptpends: TcfcptpendEntity[];

  @OneToMany(
    () => TmscalocoEntity,
    (tmscalocoEntity) => tmscalocoEntity.codocorrencia,
  )
  tmscalocos: TmscalocoEntity[];

  @OneToMany(() => TmsfvgEntity, (tmsfvgEntity) => tmsfvgEntity.nuocor)
  tmsfvgs: TmsfvgEntity[];

  @OneToMany(
    () => TmsfvmdstocoEntity,
    (tmsfvmdstocoEntity) => tmsfvmdstocoEntity.nuocor,
  )
  tmsfvmdstocos: TmsfvmdstocoEntity[];

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tmsocos)
  @JoinColumn([{ name: 'CODNATREC', referencedColumnName: 'codnat' }])
  codnatrec: TgfnatEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tmsocos2)
  @JoinColumn([{ name: 'CODNATDESP', referencedColumnName: 'codnat' }])
  codnatdesp: TgfnatEntity;
}

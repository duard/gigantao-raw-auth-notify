import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimchkEntity } from './tIMCHK.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimimbEntity } from './tIMIMB.entity';
import { TimadmEntity } from './tIMADM.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimclcEntity } from './tIMCLC.entity';
import { TimmfdEntity } from './tIMMFD.entity';
import { TimqpvEntity } from './tIMQPV.entity';
import { TimrclEntity } from './tIMRCL.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMCLA', ['clacodigo'], { unique: true })
@Entity('TIMCLA', { schema: 'SANKHYA' })
export class TimclaEntity {
  @Column('int', { primary: true, name: 'CLACODIGO' })
  clacodigo: number;

  @Column('char', { name: 'CLATIPO', length: 2 })
  clatipo: string;

  @Column('char', { name: 'CLAESTAGIO', nullable: true, length: 2 })
  claestagio: string | null;

  @Column('char', { name: 'CLAINVESTIMENTO', nullable: true, length: 2 })
  clainvestimento: string | null;

  @Column('float', { name: 'CLAVALORTOTAL', nullable: true, precision: 53 })
  clavalortotal: number | null;

  @Column('float', { name: 'CLACOMISSAO', nullable: true, precision: 53 })
  clacomissao: number | null;

  @Column('float', { name: 'CLACOMISSAOVALOR', nullable: true, precision: 53 })
  clacomissaovalor: number | null;

  @Column('datetime', { name: 'CLADHALTER', nullable: true })
  cladhalter: Date | null;

  @Column('float', { name: 'CLAVALORMETA', nullable: true, precision: 53 })
  clavalormeta: number | null;

  @Column('datetime', {
    name: 'CLADATADIGITACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  cladatadigitacao: Date | null;

  @Column('float', {
    name: 'CLAPERCENTUALPARCERIA',
    nullable: true,
    precision: 53,
  })
  clapercentualparceria: number | null;

  @Column('float', { name: 'CLAVGV', nullable: true, precision: 53 })
  clavgv: number | null;

  @Column('float', { name: 'CLACORRBANCARIO', nullable: true, precision: 53 })
  clacorrbancario: number | null;

  @Column('datetime', { name: 'CLADATAMOTIFICADAO', nullable: true })
  cladatamotificadao: Date | null;

  @Column('datetime', { name: 'CLADATADAPROPOSTA', default: () => 'getdate()' })
  cladatadaproposta: Date;

  @Column('char', { name: 'CLANAOCOBRAR', nullable: true, length: 1 })
  clanaocobrar: string | null;

  @Column('char', { name: 'CLANC', nullable: true, length: 1 })
  clanc: string | null;

  @Column('char', { name: 'CLAPE', nullable: true, length: 1 })
  clape: string | null;

  @Column('char', { name: 'CLAJUSTICACOMUN', nullable: true, length: 1 })
  clajusticacomun: string | null;

  @Column('smallint', { name: 'CLAPROTOCOLO', nullable: true })
  claprotocolo: number | null;

  @Column('char', { name: 'CLAACC', nullable: true, length: 2 })
  claacc: string | null;

  @Column('char', { name: 'CLALEGADO', nullable: true, length: 1 })
  clalegado: string | null;

  @Column('float', {
    name: 'CLAVALORDOSINAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  clavalordosinal: number | null;

  @Column('datetime', { name: 'CLADATACANCELAMENTO', nullable: true })
  cladatacancelamento: Date | null;

  @Column('datetime', { name: 'CLADATAASSINATURA', nullable: true })
  cladataassinatura: Date | null;

  @Column('datetime', { name: 'CLAENTREGACHAVES', nullable: true })
  claentregachaves: Date | null;

  @Column('text', { name: 'CLACONDICOESDAPOSSE', nullable: true })
  clacondicoesdaposse: string | null;

  @Column('text', { name: 'CLACONDICOESDAVENDA', nullable: true })
  clacondicoesdavenda: string | null;

  @OneToMany(() => TimchkEntity, (timchkEntity) => timchkEntity.chkcontratocla)
  timchks: TimchkEntity[];

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timclas)
  @JoinColumn([
    { name: 'CLAEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  claempreendimento: TimeprEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timclas)
  @JoinColumn([{ name: 'CLACORRETOR', referencedColumnName: 'corcodigo' }])
  clacorretor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timclas2)
  @JoinColumn([{ name: 'CLAGERENTECOR', referencedColumnName: 'corcodigo' }])
  clagerentecor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timclas3)
  @JoinColumn([{ name: 'CLAGERGERCOR', referencedColumnName: 'corcodigo' }])
  clagergercor: TimcorEntity;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timclas)
  @JoinColumn([{ name: 'CLAIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  claimobiliaria: TimimbEntity;

  @ManyToOne(() => TimadmEntity, (timadmEntity) => timadmEntity.timclas)
  @JoinColumn([
    { name: 'CLACONTRATOADM', referencedColumnName: 'admnucontrato' },
  ])
  clacontratoadm: TimadmEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timclas)
  @JoinColumn([{ name: 'CLAIMOVEL', referencedColumnName: 'imvcodigo' }])
  claimovel: TimimvEntity;

  @ManyToOne(() => TimchkEntity, (timchkEntity) => timchkEntity.timclas)
  @JoinColumn([{ name: 'CLANUCHECKLIST', referencedColumnName: 'chknucheck' }])
  clanuchecklist: TimchkEntity;

  @OneToMany(() => TimclcEntity, (timclcEntity) => timclcEntity.clccontrato2)
  timclcs: TimclcEntity[];

  @OneToMany(() => TimmfdEntity, (timmfdEntity) => timmfdEntity.mfdcontratocla)
  timmfds: TimmfdEntity[];

  @OneToMany(() => TimqpvEntity, (timqpvEntity) => timqpvEntity.qpvcontrato2)
  timqpvs: TimqpvEntity[];

  @OneToMany(() => TimrclEntity, (timrclEntity) => timrclEntity.rclcontrato2)
  timrcls: TimrclEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclaimvrev,
  )
  timvdos: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclavenlan,
  )
  timvdos2: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclaimvloc,
  )
  timvdos3: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclavenrev,
  )
  timvdos4: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclaavaloc,
  )
  timvdos5: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclaavaven,
  )
  timvdos6: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclacorban,
  )
  timvdos7: TimvdoEntity[];

  @OneToMany(
    () => TimvdoEntity,
    (timvdoEntity) => timvdoEntity.vdocontratoclaimvlan,
  )
  timvdos8: TimvdoEntity[];
}

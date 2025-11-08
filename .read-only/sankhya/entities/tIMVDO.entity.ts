import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimlocEntity } from './tIMLOC.entity';
import { TimfacEntity } from './tIMFAC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimlotEntity } from './tIMLOT.entity';
import { TimeprEntity } from './tIMEPR.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TimpvdEntity } from './tIMPVD.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimclaEntity } from './tIMCLA.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimlteEntity } from './tIMLTE.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMVDO', ['vdocodigo'], { unique: true })
@Entity('TIMVDO', { schema: 'SANKHYA' })
export class TimvdoEntity {
  @Column('int', { primary: true, name: 'VDOCODIGO' })
  vdocodigo: number;

  @Column('varchar', { name: 'VDODESCRICAO', nullable: true, length: 50 })
  vdodescricao: string | null;

  @Column('varchar', { name: 'VDOPATHSCANNER', length: 100 })
  vdopathscanner: string;

  @Column('char', { name: 'VDOPRODUTO', length: 2 })
  vdoproduto: string;

  @Column('char', { name: 'VDOPROCESSADO', nullable: true, length: 1 })
  vdoprocessado: string | null;

  @Column('datetime', { name: 'VDODHINC', nullable: true })
  vdodhinc: Date | null;

  @Column('datetime', { name: 'VDODHALT', nullable: true })
  vdodhalt: Date | null;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timvdos)
  @JoinColumn([{ name: 'VDOCONTRATOLOC', referencedColumnName: 'loccodigo' }])
  vdocontratoloc: TimlocEntity;

  @ManyToOne(() => TimfacEntity, (timfacEntity) => timfacEntity.timvdos)
  @JoinColumn([{ name: 'VDOFICHAATEND', referencedColumnName: 'faccodigo' }])
  vdofichaatend: TimfacEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timvdos)
  @JoinColumn([{ name: 'VDOUSUALT', referencedColumnName: 'codusu' }])
  vdousualt: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timvdos2)
  @JoinColumn([{ name: 'VDOUSUINC', referencedColumnName: 'codusu' }])
  vdousuinc: TsiusuEntity;

  @ManyToOne(() => TimlotEntity, (timlotEntity) => timlotEntity.timvdos)
  @JoinColumn([{ name: 'VDOLOTEAMENTO', referencedColumnName: 'lotcodigo' }])
  vdoloteamento: TimlotEntity;

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timvdos)
  @JoinColumn([
    { name: 'VDOEMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  vdoempreendimento: TimeprEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timvdos)
  @JoinColumn([{ name: 'VDOCORRETOR', referencedColumnName: 'corcodigo' }])
  vdocorretor: TimcorEntity;

  @ManyToOne(() => TimpvdEntity, (timpvdEntity) => timpvdEntity.timvdos)
  @JoinColumn([{ name: 'VDOPASTA', referencedColumnName: 'pvdcodigo' }])
  vdopasta: TimpvdEntity;

  @ManyToOne(() => TimltvEntity, (timltvEntity) => timltvEntity.timvdos)
  @JoinColumn([{ name: 'VDOCONTRATOLTV', referencedColumnName: 'ltvcodigo' }])
  vdocontratoltv: TimltvEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAIMVREV', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclaimvrev: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos2)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAVENLAN', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclavenlan: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos3)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAIMVLOC', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclaimvloc: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos4)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAVENREV', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclavenrev: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos5)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAAVALOC', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclaavaloc: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos6)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAAVAVEN', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclaavaven: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos7)
  @JoinColumn([
    { name: 'VDOCONTRATOCLACORBAN', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclacorban: TimclaEntity;

  @ManyToOne(() => TimclaEntity, (timclaEntity) => timclaEntity.timvdos8)
  @JoinColumn([
    { name: 'VDOCONTRATOCLAIMVLAN', referencedColumnName: 'clacodigo' },
  ])
  vdocontratoclaimvlan: TimclaEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timvdos)
  @JoinColumn([{ name: 'VDOIMOVEL', referencedColumnName: 'imvcodigo' }])
  vdoimovel: TimimvEntity;

  @ManyToOne(() => TimlteEntity, (timlteEntity) => timlteEntity.timvdos)
  @JoinColumn([{ name: 'VDOLOTE', referencedColumnName: 'ltecodigo' }])
  vdolote: TimlteEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timvdos)
  @JoinColumn([{ name: 'VDOPARCEIRO', referencedColumnName: 'codparc' }])
  vdoparceiro: TgfparEntity;
}

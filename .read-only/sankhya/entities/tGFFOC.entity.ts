import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgffcvEntity } from './tGFFCV.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TgfhcoEntity } from './tGFHCO.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TGFFOC', ['codform'], { unique: true })
@Entity('TGFFOC', { schema: 'SANKHYA' })
export class TgffocEntity {
  @Column('smallint', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('text', { name: 'VENDAREGPROP', nullable: true })
  vendaregprop: string | null;

  @Column('text', { name: 'VENDAREGTERC', nullable: true })
  vendaregterc: string | null;

  @Column('text', { name: 'VENDATERCREG', nullable: true })
  vendatercreg: string | null;

  @Column('text', { name: 'SUPREGPROP', nullable: true })
  supregprop: string | null;

  @Column('text', { name: 'SUPREGTERC', nullable: true })
  supregterc: string | null;

  @Column('text', { name: 'SUPTERCREG', nullable: true })
  suptercreg: string | null;

  @Column('varchar', { name: 'DESCRFORM', length: 40 })
  descrform: string;

  @Column('varchar', { name: 'TIPINTEGRA', length: 1, default: () => "'N'" })
  tipintegra: string;

  @OneToMany(() => TgffcvEntity, (tgffcvEntity) => tgffcvEntity.codform2)
  tgffcvs: TgffcvEntity[];

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tgffocs)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgffocs)
  @JoinColumn([{ name: 'HISTREGTERC', referencedColumnName: 'codhistcom' }])
  histregterc: TgfhcoEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgffocs2)
  @JoinColumn([{ name: 'HISTSUPREGPROP', referencedColumnName: 'codhistcom' }])
  histsupregprop: TgfhcoEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgffocs3)
  @JoinColumn([{ name: 'HISTSUPREGTERC', referencedColumnName: 'codhistcom' }])
  histsupregterc: TgfhcoEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgffocs4)
  @JoinColumn([{ name: 'HISTSUPTERCREG', referencedColumnName: 'codhistcom' }])
  histsuptercreg: TgfhcoEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgffocs5)
  @JoinColumn([{ name: 'HISTREGPROP', referencedColumnName: 'codhistcom' }])
  histregprop: TgfhcoEntity;

  @ManyToOne(() => TgfhcoEntity, (tgfhcoEntity) => tgfhcoEntity.tgffocs6)
  @JoinColumn([{ name: 'HISTTERCREG', referencedColumnName: 'codhistcom' }])
  histtercreg: TgfhcoEntity;

  @OneToMany(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.codform)
  tgfvens: TgfvenEntity[];
}

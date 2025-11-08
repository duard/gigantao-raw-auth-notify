import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFFOR', ['codformprec'], { unique: true })
@Entity('TGFFOR', { schema: 'SANKHYA' })
export class TgfforEntity {
  @Column('smallint', { primary: true, name: 'CODFORMPREC' })
  codformprec: number;

  @Column('char', { name: 'DESCRFORM', length: 36 })
  descrform: string;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('text', { name: 'FORCUSVARIAVEL', nullable: true })
  forcusvariavel: string | null;

  @Column('text', { name: 'FORCUSREP', nullable: true })
  forcusrep: string | null;

  @Column('text', { name: 'FORCUSCOMICMS', nullable: true })
  forcuscomicms: string | null;

  @Column('text', { name: 'FORCUSSEMICMS', nullable: true })
  forcussemicms: string | null;

  @Column('text', { name: 'FORPRECOTAB', nullable: true })
  forprecotab: string | null;

  @Column('text', { name: 'DESCRCUSVARIAVEL', nullable: true })
  descrcusvariavel: string | null;

  @Column('text', { name: 'DESCRCUSREP', nullable: true })
  descrcusrep: string | null;

  @Column('text', { name: 'DESCRCUSCOMICMS', nullable: true })
  descrcuscomicms: string | null;

  @Column('text', { name: 'DESCRCUSSEMICMS', nullable: true })
  descrcussemicms: string | null;

  @Column('text', { name: 'DESCRPRECOTAB', nullable: true })
  descrprecotab: string | null;

  @Column('text', { name: 'DESCRFORMULA', nullable: true })
  descrformula: string | null;

  @OneToMany(() => TgfempEntity, (tgfempEntity) => tgfempEntity.codformprec)
  tgfemps: TgfempEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codformprec)
  tgfpros: TgfproEntity[];
}

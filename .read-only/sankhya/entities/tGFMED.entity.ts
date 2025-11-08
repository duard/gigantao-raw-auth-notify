import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfptcEntity } from './tGFPTC.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFMED', ['numeq', 'dtexec', 'codptc', 'hora'], { unique: true })
@Entity('TGFMED', { schema: 'SANKHYA' })
export class TgfmedEntity {
  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('datetime', {
    primary: true,
    name: 'DTEXEC',
    default: () => 'getdate()',
  })
  dtexec: Date;

  @Column('float', { name: 'MEDIDA', nullable: true, precision: 53 })
  medida: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { primary: true, name: 'CODPTC' })
  codptc: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { primary: true, name: 'HORA' })
  hora: number;

  @Column('int', { name: 'HORAFIM', nullable: true })
  horafim: number | null;

  @ManyToOne(() => TgfptcEntity, (tgfptcEntity) => tgfptcEntity.tgfmeds, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPTC', referencedColumnName: 'codptc' }])
  codptc2: TgfptcEntity;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgfmeds)
  @JoinColumn([{ name: 'NUMEQ', referencedColumnName: 'numeq' }])
  numeq2: TgfmeqEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfmeds)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmeds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}

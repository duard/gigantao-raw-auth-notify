import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmbcEntity } from './tGFMBC.entity';

@Index('PK_TGFMBS', ['nubcorec', 'nubcodesp'], { unique: true })
@Index('TGFMBS_I01', ['nubcodesp'], {})
@Entity('TGFMBS', { schema: 'SANKHYA' })
export class TgfmbsEntity {
  @Column('int', { primary: true, name: 'NUBCOREC' })
  nubcorec: number;

  @Column('int', { primary: true, name: 'NUBCODESP' })
  nubcodesp: number;

  @Column('money', { name: 'VALOR', nullable: true })
  valor: number | null;

  @Column('float', { name: 'VLRVARCAMBIAL', nullable: true, precision: 53 })
  vlrvarcambial: number | null;

  @ManyToOne(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.tgfmbs)
  @JoinColumn([{ name: 'NUBCODESP', referencedColumnName: 'nubco' }])
  nubcodesp2: TgfmbcEntity;

  @ManyToOne(() => TgfmbcEntity, (tgfmbcEntity) => tgfmbcEntity.tgfmbs2)
  @JoinColumn([{ name: 'NUBCOREC', referencedColumnName: 'nubco' }])
  nubcorec2: TgfmbcEntity;
}

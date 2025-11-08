import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TMSPARQB', ['codparc', 'seq'], { unique: true })
@Entity('TMSPARQB', { schema: 'SANKHYA' })
export class TmsparqbEntity {
  @Column('int', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('varchar', { name: 'TIPOCOB', nullable: true, length: 10 })
  tipocob: string | null;

  @Column('float', { name: 'PERCTOL', nullable: true, precision: 53 })
  perctol: number | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tmsparqbs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tmsparqbs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}

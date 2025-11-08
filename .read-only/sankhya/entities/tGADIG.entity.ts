import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgaartsEntity } from './tGAARTS.entity';
import { TgabdEntity } from './tGABD.entity';
import { TgabdlcEntity } from './tGABDLC.entity';
import { TgadprEntity } from './tGADPR.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGADIG', ['nudig', 'tipo'], { unique: true })
@Entity('TGADIG', { schema: 'SANKHYA' })
export class TgadigEntity {
  @Column('int', { primary: true, name: 'NUDIG' })
  nudig: number;

  @Column('char', { name: 'DESCRDIG', length: 80 })
  descrdig: string;

  @Column('char', { name: 'CIENTIFICO', nullable: true, length: 80 })
  cientifico: string | null;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @OneToMany(() => TgaartsEntity, (tgaartsEntity) => tgaartsEntity.tgadig)
  tgaarts: TgaartsEntity[];

  @OneToMany(() => TgabdEntity, (tgabdEntity) => tgabdEntity.tgadig)
  tgabds: TgabdEntity[];

  @OneToMany(() => TgabdlcEntity, (tgabdlcEntity) => tgabdlcEntity.tgadig)
  tgabdlcs: TgabdlcEntity[];

  @OneToMany(() => TgadprEntity, (tgadprEntity) => tgadprEntity.tgadig)
  tgadprs: TgadprEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgadig)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgadig2)
  tgfpros2: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgadig3)
  tgfpros3: TgfproEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgadig4)
  tgfpros4: TgfproEntity[];
}

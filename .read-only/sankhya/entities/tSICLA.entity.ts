import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiexcEntity } from './tSIEXC.entity';
import { TsiexgEntity } from './tSIEXG.entity';
import { TsiexuEntity } from './tSIEXU.entity';

@Index('PK_TSICLA', ['codcla'], { unique: true })
@Entity('TSICLA', { schema: 'SANKHYA' })
export class TsiclaEntity {
  @Column('smallint', { primary: true, name: 'CODCLA' })
  codcla: number;

  @Column('varchar', { name: 'DESCCLA', length: 100 })
  desccla: string;

  @Column('datetime', { name: 'DTCRIAC' })
  dtcriac: Date;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSUCRIAC' })
  codusucriac: number;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @OneToMany(() => TsiexcEntity, (tsiexcEntity) => tsiexcEntity.codcla2)
  tsiexcs: TsiexcEntity[];

  @OneToMany(() => TsiexgEntity, (tsiexgEntity) => tsiexgEntity.codcla2)
  tsiexgs: TsiexgEntity[];

  @OneToMany(() => TsiexuEntity, (tsiexuEntity) => tsiexuEntity.codcla2)
  tsiexus: TsiexuEntity[];
}

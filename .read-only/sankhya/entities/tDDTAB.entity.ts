import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TddcamEntity } from './tDDCAM.entity';
import { TsirgbEntity } from './tSIRGB.entity';

@Index('IX_TDDTAB_CONTROLE_90403', ['nometab', 'controle'], {})
@Index('PK_TDDTAB', ['nometab'], { unique: true })
@Entity('TDDTAB', { schema: 'SANKHYA' })
export class TddtabEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { name: 'DESCRTAB', length: 255 })
  descrtab: string;

  @Column('varchar', { name: 'TIPONUMERACAO', length: 1 })
  tiponumeracao: string;

  @Column('numeric', {
    name: 'NUCAMPONUMERACAO',
    nullable: true,
    precision: 10,
    scale: 0,
  })
  nucamponumeracao: number | null;

  @Column('char', { name: 'ADICIONAL', nullable: true, length: 1 })
  adicional: string | null;

  @Column('char', { name: 'CONTROLE', nullable: true, length: 1 })
  controle: string | null;

  @Column('varchar', { name: 'DOMAIN', nullable: true, length: 250 })
  domain: string | null;

  @OneToMany(() => TddcamEntity, (tddcamEntity) => tddcamEntity.nometab2)
  tddcams: TddcamEntity[];

  @OneToMany(() => TsirgbEntity, (tsirgbEntity) => tsirgbEntity.tabela2)
  tsirgbs: TsirgbEntity[];
}

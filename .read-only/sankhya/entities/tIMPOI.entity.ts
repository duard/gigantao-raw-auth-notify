import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TimpotEntity } from './tIMPOT.entity';

@Index('IX_POI_DESCRPOI', ['descrpoi'], {})
@Index('PK_TIMPOI', ['codpoi'], { unique: true })
@Entity('TIMPOI', { schema: 'SANKHYA' })
export class TimpoiEntity {
  @Column('int', { primary: true, name: 'CODPOI' })
  codpoi: number;

  @Column('varchar', { name: 'DESCRPOI', nullable: true, length: 200 })
  descrpoi: string | null;

  @Column('varbinary', { name: 'ARQUIVO', nullable: true })
  arquivo: Buffer | null;

  @Column('text', { name: 'SINGLEQUERY', nullable: true })
  singlequery: string | null;

  @Column('text', { name: 'MULTIPLEQUERY', nullable: true })
  multiplequery: string | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 60 })
  nomearquivo: string | null;

  @Column('text', { name: 'JAVACLASS', nullable: true })
  javaclass: string | null;

  @Column('char', { name: 'POILEGADO', nullable: true, length: 1 })
  poilegado: string | null;

  @OneToMany(() => TimpotEntity, (timpotEntity) => timpotEntity.codpoi2)
  timpots: TimpotEntity[];
}

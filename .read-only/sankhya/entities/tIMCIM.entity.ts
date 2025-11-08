import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TIMCIM', ['cimimovel', 'cimcodigo'], { unique: true })
@Entity('TIMCIM', { schema: 'SANKHYA' })
export class TimcimEntity {
  @Column('int', { primary: true, name: 'CIMCODIGO' })
  cimcodigo: number;

  @Column('int', { primary: true, name: 'CIMIMOVEL' })
  cimimovel: number;

  @Column('smallint', { name: 'CIMTIPODECONTA' })
  cimtipodeconta: number;

  @Column('varchar', { name: 'CIMDESCRICAO', length: 60 })
  cimdescricao: string;

  @Column('varchar', { name: 'CIMRESPONSAVEL', length: 2 })
  cimresponsavel: string;

  @Column('datetime', { name: 'CIMDTULTAPRESENTACAO', nullable: true })
  cimdtultapresentacao: Date | null;

  @Column('smallint', { name: 'CIMDIAVENCTO', nullable: true })
  cimdiavencto: number | null;

  @Column('varchar', { name: 'CIMCONTRATO', nullable: true, length: 60 })
  cimcontrato: string | null;

  @Column('char', { name: 'CIMLEGADO', nullable: true, length: 1 })
  cimlegado: string | null;

  @Column('float', { name: 'CIMVALORFIXO', nullable: true, precision: 53 })
  cimvalorfixo: number | null;

  @Column('int', { name: 'CIMPARCDESP', nullable: true })
  cimparcdesp: number | null;

  @Column('int', { name: 'CIMHISTORICO', nullable: true })
  cimhistorico: number | null;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timcims, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CIMIMOVEL', referencedColumnName: 'imvcodigo' }])
  cimimovel2: TimimvEntity;
}

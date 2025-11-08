import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimcedEntity } from './tIMCED.entity';

@Index('PK_TIMCFP', ['cfpsequence'], { unique: true })
@Entity('TIMCFP', { schema: 'SANKHYA' })
export class TimcfpEntity {
  @Column('int', { primary: true, name: 'CFPSEQUENCE' })
  cfpsequence: number;

  @Column('varchar', { name: 'CFPNOME', length: 50 })
  cfpnome: string;

  @Column('varchar', { name: 'CFPDESCRICAO', length: 50 })
  cfpdescricao: string;

  @Column('char', { name: 'CFPTIPO', length: 1 })
  cfptipo: string;

  @Column('text', { name: 'CFPOPCOES', nullable: true })
  cfpopcoes: string | null;

  @Column('varchar', { name: 'CFPINSTANCIA', nullable: true, length: 50 })
  cfpinstancia: string | null;

  @Column('varchar', { name: 'CFPNUCAMPOINSTDEST', nullable: true, length: 50 })
  cfpnucampoinstdest: string | null;

  @Column('char', { name: 'CFPREQUERIDO', nullable: true, length: 1 })
  cfprequerido: string | null;

  @Column('varchar', { name: 'CFPDEFAULTVALUE', nullable: true, length: 50 })
  cfpdefaultvalue: string | null;

  @Column('char', { name: 'CFPLEGADO', nullable: true, length: 1 })
  cfplegado: string | null;

  @ManyToOne(() => TimcedEntity, (timcedEntity) => timcedEntity.timcfps)
  @JoinColumn([
    { name: 'CFPMODULO', referencedColumnName: 'cedmodulo' },
    { name: 'CFPCODIGO', referencedColumnName: 'cedcodigo' },
  ])
  timced: TimcedEntity;
}

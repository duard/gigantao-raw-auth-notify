import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIDAS_EXC', ['nudoc'], { unique: true })
@Entity('TSIDAS_EXC', { schema: 'SANKHYA' })
export class TsidasExcEntity {
  @Column('int', { primary: true, name: 'NUDOC' })
  nudoc: number;

  @Column('varchar', { name: 'MOTIVOEXC', nullable: true, length: 255 })
  motivoexc: string | null;

  @Column('varchar', { name: 'CHAVEARQUIVO', length: 255 })
  chavearquivo: string;

  @Column('smallint', { name: 'CODUSUEXC' })
  codusuexc: number;

  @Column('datetime', { name: 'DHEXC' })
  dhexc: Date;
}

import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__TFXAII__8F060DE58CE28FAF', ['nuacompanhamento'], { unique: true })
@Entity('TFXAII', { schema: 'SANKHYA' })
export class TfxaiiEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'NUACOMPANHAMENTO' })
  nuacompanhamento: number;

  @Column('int', { name: 'NROUNICO', nullable: true })
  nrounico: number | null;

  @Column('int', { name: 'SERIE', nullable: true })
  serie: number | null;

  @Column('varchar', { name: 'NOMEINTEGRACAO', nullable: true, length: 50 })
  nomeintegracao: string | null;

  @Column('int', { name: 'NROCHECKOUT', nullable: true })
  nrocheckout: number | null;

  @Column('varchar', { name: 'CHECKOUT', nullable: true, length: 50 })
  checkout: string | null;

  @Column('varchar', { name: 'EMPRESA', nullable: true, length: 50 })
  empresa: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('datetime', { name: 'DHALTERACAO', nullable: true })
  dhalteracao: Date | null;
}

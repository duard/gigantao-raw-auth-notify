import { Column, Entity, Index } from 'typeorm';

@Index('PK__TTKPITC__6C2F9339030E313B', ['sequencia'], { unique: true })
@Entity('TTKPITC', { schema: 'SANKHYA' })
export class TtkpitcEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUPROC', nullable: true })
  nuproc: number | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 100 })
  nomearquivo: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 20 })
  status: string | null;
}

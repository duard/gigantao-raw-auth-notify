import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFGHA', ['nufgha'], { unique: true })
@Entity('TFPFGHA', { schema: 'SANKHYA' })
export class TfpfghaEntity {
  @Column('int', { primary: true, name: 'NUFGHA' })
  nufgha: number;

  @Column('datetime', { name: 'DHINC' })
  dhinc: Date;

  @Column('varchar', { name: 'NOMETAB', length: 20 })
  nometab: string;

  @Column('varchar', { name: 'CHAVE', length: 3103 })
  chave: string;

  @Column('datetime', { name: 'DTESOCIAL' })
  dtesocial: Date;

  @Column('varchar', { name: 'EVENTO', length: 10 })
  evento: string;
}

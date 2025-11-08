import { Column, Entity, Index } from 'typeorm';

@Index('PK_EVTFILA_REC', ['chaveevento'], { unique: true })
@Entity('EVTFILA_REC', { schema: 'SANKHYA' })
export class EvtfilaRecEntity {
  @Column('varchar', { primary: true, name: 'CHAVEEVENTO', length: 40 })
  chaveevento: string;

  @Column('varchar', { name: 'RECUPERADO', length: 1 })
  recuperado: string;
}

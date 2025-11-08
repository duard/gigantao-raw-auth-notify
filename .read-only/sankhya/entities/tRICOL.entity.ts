import { Column, Entity, Index } from 'typeorm';

@Index('PK_TRICOL', ['nometab', 'nomecol'], { unique: true })
@Entity('TRICOL', { schema: 'SANKHYA' })
export class TricolEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 255 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'NOMECOL', length: 255 })
  nomecol: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'V'" })
  tipo: string;
}

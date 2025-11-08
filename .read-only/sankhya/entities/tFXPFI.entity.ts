import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPFI', ['codperfil'], { unique: true })
@Entity('TFXPFI', { schema: 'SANKHYA' })
export class TfxpfiEntity {
  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('float', { name: 'PERCDESCMAX', nullable: true, precision: 53 })
  percdescmax: number | null;
}

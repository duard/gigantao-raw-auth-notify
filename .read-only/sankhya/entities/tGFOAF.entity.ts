import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFOAF', ['nucraf', 'sequencia'], { unique: true })
@Entity('TGFOAF', { schema: 'SANKHYA' })
export class TgfoafEntity {
  @Column('int', { primary: true, name: 'NUCRAF' })
  nucraf: number;

  @Column('varchar', { name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('varchar', { name: 'OCORRENCIA', length: 15 })
  ocorrencia: string;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;
}

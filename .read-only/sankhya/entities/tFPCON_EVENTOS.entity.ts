import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPCON_EVENTOS', ['codconvenio', 'codevento', 'tipo'], {
  unique: true,
})
@Entity('TFPCON_EVENTOS', { schema: 'SANKHYA' })
export class TfpconEventosEntity {
  @Column('int', { primary: true, name: 'CODCONVENIO' })
  codconvenio: number;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;
}

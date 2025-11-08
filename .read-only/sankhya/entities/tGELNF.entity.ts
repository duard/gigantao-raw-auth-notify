import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGELNF', ['chavenfe'], { unique: true })
@Entity('TGELNF', { schema: 'SANKHYA' })
export class TgelnfEntity {
  @Column('varchar', { primary: true, name: 'CHAVENFE', length: 44 })
  chavenfe: string;

  @Column('text', { name: 'XMLENVIO', nullable: true })
  xmlenvio: string | null;

  @Column('text', { name: 'XMLASSINADO', nullable: true })
  xmlassinado: string | null;

  @Column('varchar', { name: 'DIGESTVALUE', nullable: true, length: 44 })
  digestvalue: string | null;

  @Column('text', { name: 'XMLENVCONSULTA', nullable: true })
  xmlenvconsulta: string | null;

  @Column('text', { name: 'XMLRETCONSULTA', nullable: true })
  xmlretconsulta: string | null;

  @Column('varchar', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'NPROT', nullable: true, length: 15 })
  nprot: string | null;

  @Column('varchar', { name: 'NREC', nullable: true, length: 15 })
  nrec: string | null;

  @Column('varchar', { name: 'VALIDADO', nullable: true, length: 1 })
  validado: string | null;

  @Column('smallint', { name: 'TPEMIS', nullable: true })
  tpemis: number | null;

  @Column('varchar', { name: 'ASSINATURAVALIDA', nullable: true, length: 1 })
  assinaturavalida: string | null;

  @Column('text', { name: 'XMLRETPROCLOTE', nullable: true })
  xmlretproclote: string | null;
}

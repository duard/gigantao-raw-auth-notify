import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TPQRPESEQ',
  ['seqproposta', 'numos', 'nupesq', 'codperg', 'codresp'],
  { unique: true },
)
@Entity('TPQRPESEQ', { schema: 'SANKHYA' })
export class TpqrpeseqEntity {
  @Column('int', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODRESP' })
  codresp: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('datetime', { name: 'DHCORRECAO', nullable: true })
  dhcorrecao: Date | null;

  @Column('float', { name: 'NOTA', nullable: true, precision: 53 })
  nota: number | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('smallint', { name: 'CODUSUCORRETOR', nullable: true })
  codusucorretor: number | null;

  @Column('char', { name: 'PROIBELIMPEZA', nullable: true, length: 1 })
  proibelimpeza: string | null;
}

import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIDAS', ['nudoc'], { unique: true })
@Index('UK_TSIDAS_NOMEARQ_TID', ['nomearquivo', 'transactionid'], {
  unique: true,
})
@Entity('TSIDAS', { schema: 'SANKHYA' })
export class TsidasEntity {
  @Column('int', { primary: true, name: 'NUDOC' })
  nudoc: number;

  @Column('varchar', { name: 'CHAVEARQUIVO', length: 255 })
  chavearquivo: string;

  @Column('varchar', { name: 'NOMEARQUIVO', unique: true, length: 1000 })
  nomearquivo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('text', { name: 'DETALHESTATUS', nullable: true })
  detalhestatus: string | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHSOLIC' })
  dhsolic: Date;

  @Column('datetime', { name: 'DHRESP', nullable: true })
  dhresp: Date | null;

  @Column('varchar', { name: 'HASHARQUIVO', nullable: true, length: 1000 })
  hasharquivo: string | null;

  @Column('varchar', {
    name: 'TRANSACTIONID',
    nullable: true,
    unique: true,
    length: 1000,
  })
  transactionid: string | null;

  @Column('varchar', { name: 'IDSOLICITANTE', length: 255 })
  idsolicitante: string;

  @Column('varchar', { name: 'NOMESOLICITANTE', nullable: true, length: 255 })
  nomesolicitante: string | null;

  @Column('varchar', { name: 'IDDESTINATARIO', length: 255 })
  iddestinatario: string;

  @Column('varchar', { name: 'NOMEDESTINATARIO', nullable: true, length: 255 })
  nomedestinatario: string | null;

  @Column('varchar', { name: 'TIPONOTIFIC', nullable: true, length: 2 })
  tiponotific: string | null;
}

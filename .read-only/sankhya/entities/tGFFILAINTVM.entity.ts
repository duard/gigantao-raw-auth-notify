import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFFILAINTVM', ['nuchave', 'operacao', 'origem'], { unique: true })
@Entity('TGFFILAINTVM', { schema: 'SANKHYA' })
export class TgffilaintvmEntity {
  @Column('int', { primary: true, name: 'NUCHAVE' })
  nuchave: number;

  @Column('varchar', { primary: true, name: 'OPERACAO', length: 100 })
  operacao: string;

  @Column('varchar', { primary: true, name: 'ORIGEM', length: 100 })
  origem: string;

  @Column('varchar', { name: 'PAYLOAD', nullable: true })
  payload: string | null;

  @Column('varchar', { name: 'METODO', length: 100 })
  metodo: string;

  @Column('int', { name: 'QTDMAX' })
  qtdmax: number;

  @Column('int', { name: 'QTD', default: () => '(0)' })
  qtd: number;

  @Column('varchar', { name: 'STATUS', length: 100, default: () => "'P'" })
  status: string;

  @Column('int', { name: 'STATUSCODE', nullable: true })
  statuscode: number | null;

  @Column('varchar', { name: 'RESPOSTA', nullable: true })
  resposta: string | null;
}

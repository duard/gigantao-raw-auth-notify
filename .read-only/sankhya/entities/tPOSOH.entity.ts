import { Column, Entity, Index } from 'typeorm';

@Index('PK_TPOSOH', ['idprojeto', 'idobjeto'], { unique: true })
@Entity('TPOSOH', { schema: 'SANKHYA' })
export class TposohEntity {
  @Column('int', { primary: true, name: 'IDPROJETO' })
  idprojeto: number;

  @Column('varchar', { name: 'NOMEPROJETO', length: 255 })
  nomeprojeto: string;

  @Column('int', { primary: true, name: 'IDOBJETO' })
  idobjeto: number;

  @Column('varchar', { name: 'NOMEOBJETO', nullable: true, length: 255 })
  nomeobjeto: string | null;

  @Column('int', { name: 'STATUSOBJETO' })
  statusobjeto: number;

  @Column('varchar', {
    name: 'DESCRICAOSTATUSOBJETO',
    nullable: true,
    length: 255,
  })
  descricaostatusobjeto: string | null;

  @Column('varchar', { name: 'NOMEUSU', nullable: true, length: 255 })
  nomeusu: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}

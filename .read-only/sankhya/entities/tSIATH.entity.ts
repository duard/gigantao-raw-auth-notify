import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIATH', ['codath'], { unique: true })
@Entity('TSIATH', { schema: 'SANKHYA' })
export class TsiathEntity {
  @Column('smallint', { primary: true, name: 'CODATH' })
  codath: number;

  @Column('varchar', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @Column('varchar', { name: 'NOMEDAAPI', nullable: true, length: 50 })
  nomedaapi: string | null;

  @Column('varchar', { name: 'CLIENTID', nullable: true, length: 80 })
  clientid: string | null;

  @Column('varchar', { name: 'CLIENTSECRET', nullable: true, length: 80 })
  clientsecret: string | null;

  @Column('varchar', { name: 'URLAPIGOOGLE', nullable: true, length: 80 })
  urlapigoogle: string | null;

  @Column('varchar', { name: 'URLGETACCESSTOKEN', nullable: true, length: 80 })
  urlgetaccesstoken: string | null;

  @Column('varchar', { name: 'URLGOOGLEPEOPLE', nullable: true, length: 80 })
  urlgooglepeople: string | null;

  @Column('varchar', { name: 'REDIRECTURI', nullable: true, length: 80 })
  redirecturi: string | null;

  @Column('text', { name: 'SCOPES', nullable: true })
  scopes: string | null;

  @Column('varchar', { name: 'TENANT', nullable: true, length: 80 })
  tenant: string | null;

  @Column('char', { name: 'PROVEDOR', nullable: true, length: 1 })
  provedor: string | null;
}

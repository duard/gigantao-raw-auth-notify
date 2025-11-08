import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIMAP', ['hash'], { unique: true })
@Entity('TSIMAP', { schema: 'SANKHYA' })
export class TsimapEntity {
  @Column('varchar', { primary: true, name: 'HASH', length: 512 })
  hash: string;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('date', { name: 'DATA', nullable: true })
  data: Date | null;

  @Column('date', { name: 'PRIMEIROLOGIN', nullable: true })
  primeirologin: Date | null;

  @Column('date', { name: 'ULTIMOLOGIN', nullable: true })
  ultimologin: Date | null;

  @Column('int', { name: 'QTDLOGIN', nullable: true })
  qtdlogin: number | null;

  @Column('varchar', { name: 'IP', nullable: true, length: 1024 })
  ip: string | null;

  @Column('varchar', { name: 'ORIGEM', nullable: true, length: 1 })
  origem: string | null;

  @Column('varchar', { name: 'IDENTIFICADOR', nullable: true, length: 1024 })
  identificador: string | null;

  @Column('varchar', { name: 'USERAGENT', nullable: true, length: 1024 })
  useragent: string | null;
}
